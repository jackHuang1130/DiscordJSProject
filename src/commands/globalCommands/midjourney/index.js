const { SlashCommandBuilder,EmbedBuilder } = require('discord.js');
const axios = require('axios').default;
//const { EmbedBuilder } = require('discord.js');
const { info } = require('../../../modules/consoleMsg/console.js')
const { getDateTime } = require('../../../modules/time/getTime.js')
const { responseSuccess, responseFail } = require('./embed.js')

module.exports = {
	data: new SlashCommandBuilder()
			.setName('繪圖')
			.setDescription('使用人工智慧產生圖片')
            .addStringOption(option =>
                option.setName('提示詞')
                    .setDescription('為你欲生成的圖片填入一些關鍵字')
                    .setRequired(true)),
	async execute(interaction) {
        await interaction.deferReply();
        const user = interaction.user
        const prompt = interaction.options.data[0].value;

        info(`${user.username+'#'+user.discriminator} asked for a picture with "${prompt}"`)
        try {
            const { default: midjourney } = await import('midjourney-client')
            let response = await midjourney(`mdjrny-v4 style ${prompt}`);
            info(response[0])
            await interaction.editReply({embeds: [await responseSuccess(getDateTime() ,user, response, prompt)]})
            

        } catch (error) {
            console.log(error)
            await interaction.editReply({embeds: [await responseFail(getDateTime(), user)]})
            //console.log(error)
        }
    }
}