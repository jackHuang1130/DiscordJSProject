const { EmbedBuilder, Embed } = require('discord.js');

async function responseSuccess(time, reply, keyWord, userName, avatarURL){

    const randomTitle = ['江郎才盡', '掰不下去了']
    const randomChoose = Math.floor(Math.floor(Math.random() * 10)%2);
    return new EmbedBuilder()
        .setColor(0x0099FF)
        .setAuthor({ name: `${userName} ${randomTitle[randomChoose]}，想唬爛一些東西`, iconURL: `${avatarURL}` })
        .setDescription('他的關鍵字：'+'```'+ keyWord +'```'+'\n以下生成器所回傳的內容。\n```\n'+ reply +'\n```')

        .setFooter({ text: `jack.huang_14 技術開發 • ${time}`, iconURL: 'https://instagram.ftpe8-3.fna.fbcdn.net/v/t51.2885-19/328435729_146505831646207_4024874995475887638_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ftpe8-3.fna.fbcdn.net&_nc_cat=107&_nc_ohc=L4ACOWXJvp4AX9V5jPi&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAMVrZwGkFql8Hx3Tbo9aGOAo3uFgv-ijZBgqS75oUY3Q&oe=640BE2A9&_nc_sid=1527a3' });
}

async function responseFail(time){
    return new EmbedBuilder()
        .setColor(0x0099FF)
        .setDescription(`系統無法得到回應。`)
        .setFooter({ text: `jack.huang_14 技術開發 • ${time}`, iconURL: 'https://instagram.ftpe8-3.fna.fbcdn.net/v/t51.2885-19/328435729_146505831646207_4024874995475887638_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ftpe8-3.fna.fbcdn.net&_nc_cat=107&_nc_ohc=L4ACOWXJvp4AX9V5jPi&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAMVrZwGkFql8Hx3Tbo9aGOAo3uFgv-ijZBgqS75oUY3Q&oe=640BE2A9&_nc_sid=1527a3' });
}



module.exports = {
    responseSuccess: responseSuccess,
    responseFail: responseFail

}