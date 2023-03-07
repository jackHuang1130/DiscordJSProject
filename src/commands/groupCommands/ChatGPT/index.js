const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const dotenv = require('dotenv');
const { Configuration, OpenAIApi} = require('openai');

const { info } = require('../../../modules/consoleMsg/console.js');
const { getDateTime } = require('../../../modules/time/getTime.js');
const { responseFail , responseSuccess,responseCooldown } = require('./embed.js')
const { askQuestions } = require('./chatGPT.js');

const configuration = new Configuration({
    apiKey: `${process.env.ChatGPTAPIKey}`
});

const openai = new OpenAIApi(configuration);

let commandCooldown = []

module.exports = {
	data: new SlashCommandBuilder()
			.setName('通靈法師')
			.setDescription('問大法師一些問題，他將協助通靈。')
            .addStringOption(option =>
                option.setName('問句')
                    .setDescription('填入你想詢問的問題')
                    .setRequired(true)),
	async execute(interaction) {
        await interaction.deferReply();

        let userName = interaction.user.username +'#'+ interaction.user.discriminator
        //console.log(interaction.user.avatarURL())
        const question = interaction.options.getString('問句')

        const reply = await askQuestions(question)
        
        info(`${interaction.user.username}#${interaction.user.discriminator} asked question: '${question}'`)

		if (!commandCooldown.includes(interaction.channelId)){
            ///////// MAIN CODE AREA
            if (reply != 'failed'){
                await interaction.editReply({embeds: [await responseSuccess(getDateTime(), reply, question, userName, interaction.user.avatarURL())]})
                info(`bot replied ${reply}`)
                //responseSuccess(getDateTime(), reply, question)
            } else {
                await interaction.editReply({embeds: [await responseFail(getDateTime())]})
                
            }
            ///////////
			info(`${interaction.user.username}#${interaction.user.discriminator} issued command '${interaction.commandName}'`);
			info(`${interaction.commandName} triggered, pushed channel ${interaction.channelId}(#${interaction.channel.name}) into cooldown list`);

            commandCooldown.push(interaction.channelId);
            commandCooldown.push(interaction.channel.name);

			setTimeout(function () {
				//pingCooldown = false;
				info(`command ${interaction.commandName} ended, dropped channel ${commandCooldown[0]}(#${commandCooldown[1]})`);
                commandCooldown.shift()
                commandCooldown.shift()

			}, 10000);   			
		} else {
            await interaction.editReply({embeds: [await responseCooldown(getDateTime())], ephemeral: true});
			//await interaction.reply({embeds: [commandResponse], ephemeral: true});
			//info(`${interaction.user.username}#${interaction.user.discriminator} issued command '${interaction.commandName}' (ephemeral)`)	
		}

    }
}