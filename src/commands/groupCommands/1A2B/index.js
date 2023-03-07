const { SlashCommandBuilder,EmbedBuilder } = require('discord.js');
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const axios = require('axios').default;
//const { EmbedBuilder } = require('discord.js');
const { info } = require('../../../modules/consoleMsg/console.js')
const { getDateTime } = require('../../../modules/time/getTime.js')


module.exports = {
	data: new SlashCommandBuilder()
			.setName('test')
			.setDescription('給你一個一到六的數字。'),
	async execute(interaction) {
        await require('./event.js')
        //await interaction.deferReply();

        const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('primary')
                .setLabel('Click me!')
                .setStyle(ButtonStyle.Primary),
        );

		const modal = new ModalBuilder()
			.setCustomId('myModal')
			.setTitle('My Modal');

		// Add components to modal

		// Create the text input components
		const favoriteColorInput = new TextInputBuilder()
			.setCustomId('favoriteColorInput')
		    // The label is the prompt the user sees for this input
			.setLabel("What's your favorite color?")
		    // Short means only a single line of text
			.setStyle(TextInputStyle.Short);

		const hobbiesInput = new TextInputBuilder()
			.setCustomId('hobbiesInput')
			.setLabel("What's some of your favorite hobbies?")
		    // Paragraph means multiple lines of text.
			.setStyle(TextInputStyle.Paragraph);

		// An action row only holds one text input,
		// so you need one action row per text input.
		const firstActionRow = new ActionRowBuilder().addComponents(favoriteColorInput);
		const secondActionRow = new ActionRowBuilder().addComponents(hobbiesInput);

		// Add inputs to the modal
		modal.addComponents(firstActionRow, secondActionRow);

        await interaction.reply({ content: 'I think you should,', components: [row] });
		// Show the modal to the user
		//await interaction.showModal(modal);
        //await interaction.reply({ content: 'Your submission was received successfully!' });
        //console.log(res)
        //console.log(interaction.user)
    }
}