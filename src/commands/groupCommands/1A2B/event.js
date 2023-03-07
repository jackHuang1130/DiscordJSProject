const { client } = require("../../../discord/bot")
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

const row = new ActionRowBuilder()
.addComponents(
    new ButtonBuilder()
        .setCustomId('primary')
        .setLabel('Click me!')
        .setStyle(ButtonStyle.Primary),
);
//const collector = await interaction.channel.createMessageComponentCollector();
client.on('interactionCreate', async (interaction) => {

    try {
        const filter = i => i.customId === 'primary';

        const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });
            
        await wait(4000);
       
     
        if(interaction.customId === "myModal"){
            
            const favoriteColor = interaction.fields.getTextInputValue('favoriteColorInput');
            const hobbies = interaction.fields.getTextInputValue('hobbiesInput');
            console.log({ favoriteColor, hobbies });
    
            await interaction.reply({content: `${favoriteColor + ' ' + hobbies} `})
        }
    
    
    
        if(interaction.customId === "primary" ){
            //const filter = i => interaction.customId === 'primary';
    
            
            console.log(collector)
            await collector.on('collect', async i => {
                //await i.update({ content: 'A button was clicked!'});
                await i.reply({ content: 'A button was clicked!', components: [row]});
            });
            
            collector.on('end', collected => console.log(`Collected ${collected.size} items`));
    
            
        }
            
    } catch (error) {
        
    }


})

