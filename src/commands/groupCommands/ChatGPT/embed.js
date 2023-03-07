const { EmbedBuilder, Embed } = require('discord.js');

function responseSuccess(time, reply, question, userName, avatarURL){

    const randomTitle = ['想通靈一些事情', '對人生有點困惑', '想尋求人生解答', '問了一些問題', '想不通..', '向大師發問了..']
    const randomChoose = Math.floor(Math.floor(Math.random() * 10)%5);
    return new EmbedBuilder()
        .setColor(0x0099FF)
        .setAuthor({ name: `${userName} ${randomTitle[randomChoose]}`, iconURL: `${avatarURL}` })
        .setDescription('他的問題：'+'```'+ question +'```'+'\n以下是我們得到的回應。\n```\n'+ reply +'\n```')

        .setFooter({ text: `jack.huang_14 技術開發 (資訊提供：OpenAI) • ${time}`, iconURL: 'https://instagram.ftpe8-3.fna.fbcdn.net/v/t51.2885-19/328435729_146505831646207_4024874995475887638_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ftpe8-3.fna.fbcdn.net&_nc_cat=107&_nc_ohc=L4ACOWXJvp4AX9V5jPi&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAMVrZwGkFql8Hx3Tbo9aGOAo3uFgv-ijZBgqS75oUY3Q&oe=640BE2A9&_nc_sid=1527a3' });
}

function responseFail(time){
    return new EmbedBuilder()
        .setColor(0x0099FF)
        .setDescription(`系統無法得到回應。`)
        .setFooter({ text: `jack.huang_14 技術開發 • ${time}`, iconURL: 'https://instagram.ftpe8-3.fna.fbcdn.net/v/t51.2885-19/328435729_146505831646207_4024874995475887638_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ftpe8-3.fna.fbcdn.net&_nc_cat=107&_nc_ohc=L4ACOWXJvp4AX9V5jPi&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAMVrZwGkFql8Hx3Tbo9aGOAo3uFgv-ijZBgqS75oUY3Q&oe=640BE2A9&_nc_sid=1527a3' });
}

function responseCooldown(time){
    return new EmbedBuilder()
        .setColor(0x0099FF)
        .setDescription(`為避免達到使用率上限，每個頻道每十秒才可發送一次請求`)
        .setFooter({ text: `jack.huang_14 技術開發 • ${time}`, iconURL: 'https://instagram.ftpe8-3.fna.fbcdn.net/v/t51.2885-19/328435729_146505831646207_4024874995475887638_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ftpe8-3.fna.fbcdn.net&_nc_cat=107&_nc_ohc=L4ACOWXJvp4AX9V5jPi&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAMVrZwGkFql8Hx3Tbo9aGOAo3uFgv-ijZBgqS75oUY3Q&oe=640BE2A9&_nc_sid=1527a3' });
}

module.exports = {
    responseSuccess: responseSuccess,
    responseFail: responseFail,
    responseCooldown: responseCooldown

}