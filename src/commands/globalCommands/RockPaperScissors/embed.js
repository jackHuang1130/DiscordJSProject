const { EmbedBuilder } = require('discord.js');

function winResponse(time, user, playerResult, botResult){
    if(playerResult == 'Paper'){
        playerResult = ':hand_splayed: 布'
    } else if(playerResult == 'Scissors'){
        playerResult = ':v: 剪刀'
    } else if(playerResult == 'Rock'){
        playerResult = ':fist: 石頭'
    } 
    if(botResult == 'Paper'){
        botResult = ':hand_splayed: 布'
    } else if(botResult == 'Scissors'){
        botResult = ':v: 剪刀'
    } else if(botResult == 'Rock'){
        botResult = ':fist: 石頭'
    } 
    return new EmbedBuilder()
        .setColor(0x0099FF)
        .setAuthor({ name: `${user.username+'#'+user.discriminator} 向機器人發起了挑戰`, iconURL: `${user.avatarURL()}` })
        .setDescription('\n猜拳是一種鬥智鬥勇的遊戲.. \n可以透過判斷對方神情決定出拳。\n但在這裡，你無從判斷！')
        .addFields(
            { name: '玩家出了..', value: `> ${playerResult}`, inline: true },
            //{ name: '\u200B', value: '\u200B' },
            { name: '機器人出了..', value: `> ${botResult}`, inline: true},
        )
        .addFields(
            { name: '這局結果為玩家勝出。', value: ' '}
        )
        .setFooter({ text: `jack.huang_14 技術開發 • ${time}`, iconURL: 'https://instagram.ftpe8-3.fna.fbcdn.net/v/t51.2885-19/328435729_146505831646207_4024874995475887638_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ftpe8-3.fna.fbcdn.net&_nc_cat=107&_nc_ohc=L4ACOWXJvp4AX9V5jPi&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAMVrZwGkFql8Hx3Tbo9aGOAo3uFgv-ijZBgqS75oUY3Q&oe=640BE2A9&_nc_sid=1527a3' });
}

function lostResponse(time, user, playerResult, botResult){
    if(playerResult == 'Paper'){
        playerResult = ':hand_splayed: 布'
    } else if(playerResult == 'Scissors'){
        playerResult = ':v: 剪刀'
    } else if(playerResult == 'Rock'){
        playerResult = ':fist: 石頭'
    } 
    if(botResult == 'Paper'){
        botResult = ':hand_splayed: 布'
    } else if(botResult == 'Scissors'){
        botResult = ':v: 剪刀'
    } else if(botResult == 'Rock'){
        botResult = ':fist: 石頭'
    } 
    return new EmbedBuilder()
        .setColor(0x0099FF)
        .setAuthor({ name: `${user.username+'#'+user.discriminator} 向機器人發起了挑戰`, iconURL: `${user.avatarURL()}` })
        .setDescription('\n猜拳是一種鬥智鬥勇的遊戲.. \n可以透過判斷對方神情決定出拳。\n但在這裡，你無從判斷！')
        .addFields(
            { name: '玩家出了..', value: `> ${playerResult}`, inline: true },
            //{ name: '\u200B', value: '\u200B' },
            { name: '機器人出了..', value: `> ${botResult}`, inline: true},
        )
        .addFields(
            { name: '這局結果為機器人勝出。', value: ' '}
        )
        .setFooter({ text: `jack.huang_14 技術開發 • ${time}`, iconURL: 'https://instagram.ftpe8-3.fna.fbcdn.net/v/t51.2885-19/328435729_146505831646207_4024874995475887638_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ftpe8-3.fna.fbcdn.net&_nc_cat=107&_nc_ohc=L4ACOWXJvp4AX9V5jPi&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAMVrZwGkFql8Hx3Tbo9aGOAo3uFgv-ijZBgqS75oUY3Q&oe=640BE2A9&_nc_sid=1527a3' });
}

async function drawResponse(time, user, playerResult, botResult){
    if(playerResult == 'Paper'){
        playerResult = ':hand_splayed: 布'
    } else if(playerResult == 'Scissors'){
        playerResult = ':v: 剪刀'
    } else if(playerResult == 'Rock'){
        playerResult = ':fist: 石頭'
    } 
    if(botResult == 'Paper'){
        botResult = ':hand_splayed: 布'
    } else if(botResult == 'Scissors'){
        botResult = ':v: 剪刀'
    } else if(botResult == 'Rock'){
        botResult = ':fist: 石頭'
    } 
    return new EmbedBuilder()
        .setColor(0x0099FF)
        .setAuthor({ name: `${user.username+'#'+user.discriminator} 向機器人發起了挑戰`, iconURL: `${user.avatarURL()}` })
        .setDescription('\n猜拳是一種鬥智鬥勇的遊戲.. \n可以透過判斷對方神情決定出拳。\n但在這裡，你無從判斷！')
        .addFields(
            { name: '玩家出了..', value: `> ${playerResult}`, inline: true },
            //{ name: '\u200B', value: '\u200B' },
            { name: '機器人出了..', value: `> ${botResult}`, inline: true},
        )
        .addFields(
            { name: '這局結果為平手。無人勝出。', value: ' '}
        )
        .setFooter({ text: `jack.huang_14 技術開發 • ${time}`, iconURL: 'https://instagram.ftpe8-3.fna.fbcdn.net/v/t51.2885-19/328435729_146505831646207_4024874995475887638_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ftpe8-3.fna.fbcdn.net&_nc_cat=107&_nc_ohc=L4ACOWXJvp4AX9V5jPi&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAMVrZwGkFql8Hx3Tbo9aGOAo3uFgv-ijZBgqS75oUY3Q&oe=640BE2A9&_nc_sid=1527a3' });
}

module.exports = {
    drawResponse: drawResponse,
    lostResponse: lostResponse,
    winResponse: winResponse
}