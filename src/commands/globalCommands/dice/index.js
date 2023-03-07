const { SlashCommandBuilder,EmbedBuilder } = require('discord.js');
const { info } = require('../../../modules/consoleMsg/console.js')
const { getDateTime } = require('../../../modules/time/getTime.js')


module.exports = {
	data: new SlashCommandBuilder()
			.setName('擲骰子')
			.setDescription('給你一個一到六的數字。'),
	async execute(interaction) {
        
        await interaction.deferReply();

        const diceChoice = [1,2,3,4,5,6];
        const randomChoose = Math.floor(Math.floor(Math.random() * 100)%6);

        info(`${interaction.user.username+'#'+ interaction.user.discriminator} drooped a dice. And it just got ${diceChoice[randomChoose]}`)
        
        const diceImg = [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/1024px-Dice-1-b.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/1200px-Dice-2-b.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/1200px-Dice-3-b.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/557px-Dice-4-b.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/2048px-Dice-5-b.svg.png',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Dice-6-b.svg/768px-Dice-6-b.svg.png'
        ]

        function response(time){
            return new EmbedBuilder()
            .setColor(0x0099FF)
            .setAuthor({ name: `${interaction.user.username+'#'+ interaction.user.discriminator} 擲了骰子`, iconURL: `${interaction.user.avatarURL()}` })
            .setDescription('骰子投出了. . ' + '`' + diceChoice[randomChoose]+ '`')
            .setThumbnail(diceImg[diceChoice[randomChoose]-1])
            .setFooter({ text: `jack.huang_14 技術開發 • ${time}`, iconURL: 'https://instagram.ftpe8-3.fna.fbcdn.net/v/t51.2885-19/328435729_146505831646207_4024874995475887638_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ftpe8-3.fna.fbcdn.net&_nc_cat=107&_nc_ohc=L4ACOWXJvp4AX9V5jPi&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAMVrZwGkFql8Hx3Tbo9aGOAo3uFgv-ijZBgqS75oUY3Q&oe=640BE2A9&_nc_sid=1527a3' });
        }
    
        await interaction.editReply({embeds: [await response(getDateTime())]})

    }
}