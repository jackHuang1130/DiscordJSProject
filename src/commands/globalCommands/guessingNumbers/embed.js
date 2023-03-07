const { EmbedBuilder } = require('discord.js');


async function correctNumber(time, user, playerGuess, previousNumber){
    return new EmbedBuilder()
    .setColor(0x0099FF)
    .setAuthor({ name: `${user.username+'#'+user.discriminator} 猜了一次數字`, iconURL: `${user.avatarURL()}` })
    .setDescription(`系統每五分鐘刷新一次數字，在此之前都可以猜該數字。\n根據紀錄，上一個數字為 \`${previousNumber}\`，是於 \`${global.numberUpdateTime}\` 更新的。`)
    .addFields(
        { name: `${user.username+'#'+user.discriminator} 猜了..`, value: `> ${playerGuess}`, inline: true },
        //{ name: '\u200B', value: '\u200B' },
    )
    .addFields(
        { name: '正確無誤。', value: ' '}
    )
    //.setDescription(`該地區總確診數 ${data.cases}`)
    //.setThumbnail(`${data.countryInfo.flag}`)
    .setFooter({ text: `jack.huang_14 技術開發 • ${time}`, iconURL: 'https://instagram.ftpe8-3.fna.fbcdn.net/v/t51.2885-19/328435729_146505831646207_4024874995475887638_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ftpe8-3.fna.fbcdn.net&_nc_cat=107&_nc_ohc=L4ACOWXJvp4AX9V5jPi&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAMVrZwGkFql8Hx3Tbo9aGOAo3uFgv-ijZBgqS75oUY3Q&oe=640BE2A9&_nc_sid=1527a3' });

}

async function biggerNumber(time, user, playerGuess, previousNumber){
    return new EmbedBuilder()
    .setColor(0x0099FF)
    .setAuthor({ name: `${user.username+'#'+user.discriminator} 猜了一次數字`, iconURL: `${user.avatarURL()}` })
    .setDescription(`系統每五分鐘刷新一次數字，在此之前都可以猜該數字。\n根據紀錄，上一個數字為 \`${previousNumber}\`，是於 \`${global.numberUpdateTime}\` 更新的。`)
    .addFields(
        { name: `${user.username+'#'+user.discriminator} 猜了..`, value: `> ${playerGuess}`, inline: true },
        //{ name: '\u200B', value: '\u200B' },
    )
    .addFields(
        { name: '數字過大。', value: ' '}
    )
    //.setDescription(`該地區總確診數 ${data.cases}`)
    //.setThumbnail(`${data.countryInfo.flag}`)
    .setFooter({ text: `jack.huang_14 技術開發 • ${time}`, iconURL: 'https://instagram.ftpe8-3.fna.fbcdn.net/v/t51.2885-19/328435729_146505831646207_4024874995475887638_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ftpe8-3.fna.fbcdn.net&_nc_cat=107&_nc_ohc=L4ACOWXJvp4AX9V5jPi&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAMVrZwGkFql8Hx3Tbo9aGOAo3uFgv-ijZBgqS75oUY3Q&oe=640BE2A9&_nc_sid=1527a3' });

}

async function smallerNumber(time, user, playerGuess, previousNumber){
    return new EmbedBuilder()
    .setColor(0x0099FF)
    .setAuthor({ name: `${user.username+'#'+user.discriminator} 猜了一次數字`, iconURL: `${user.avatarURL()}` })
    .setDescription(`系統每五分鐘刷新一次數字，在此之前都可以猜該數字。\n根據紀錄，上一個數字為 \`${previousNumber}\`，是於 \`${global.numberUpdateTime}\` 更新的。`)
    .addFields(
        { name: `${user.username+'#'+user.discriminator} 猜了..`, value: `> ${playerGuess}`, inline: true },
        //{ name: '\u200B', value: '\u200B' },
    )
    .addFields(
        { name: '數字過小。', value: ' '}
    )
    //.setDescription(`該地區總確診數 ${data.cases}`)
    //.setThumbnail(`${data.countryInfo.flag}`)
    .setFooter({ text: `jack.huang_14 技術開發 • ${time}`, iconURL: 'https://instagram.ftpe8-3.fna.fbcdn.net/v/t51.2885-19/328435729_146505831646207_4024874995475887638_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ftpe8-3.fna.fbcdn.net&_nc_cat=107&_nc_ohc=L4ACOWXJvp4AX9V5jPi&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAMVrZwGkFql8Hx3Tbo9aGOAo3uFgv-ijZBgqS75oUY3Q&oe=640BE2A9&_nc_sid=1527a3' });

}

module.exports = {
    smallerNumber: smallerNumber,
    biggerNumber: biggerNumber,
    correctNumber: correctNumber
}