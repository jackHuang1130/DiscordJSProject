const { EmbedBuilder } = require('discord.js');

async function responseSuccess(time ,user, data, dataWx, dataPoP, dataMinT, dataCI, dataMaxT){
    return new EmbedBuilder()
        .setColor(0x0099FF)
        .setAuthor({ name: `${user.username+'#'+user.discriminator} 查詢了 ${data.location[0].locationName} 的氣候資訊`, iconURL: `${user.avatarURL()}` })
        .setDescription(`以下是我們獲取到的資料 - \`${data.location[0].locationName}\` \`${data.datasetDescription}\``)
        .addFields(
            { name: '時間順序', value: ' '},
            { name: ` `, value: `${dataWx[0].startTime} -\n ${dataWx[0].endTime}。`, inline: true},
            { name: ` `, value: `${dataWx[1].startTime} -\n ${dataWx[1].endTime}。`, inline: true},
            { name: ` `, value: `${dataWx[2].startTime} -\n ${dataWx[2].endTime}。`, inline: true},
            { name: ' ', value: `**當地氣候**`},
            { name: ` `, value: `${dataWx[0].parameter.parameterName}`, inline: true},
            { name: ` `, value: `${dataWx[1].parameter.parameterName}`, inline: true},
            { name: ` `, value: `${dataWx[2].parameter.parameterName}`, inline: true},
            { name: ' ', value: `**氣溫變化 (攝氏)** `},
            { name: ` `, value: `${dataMinT[0].parameter.parameterName} - ${dataMaxT[0].parameter.parameterName}`, inline: true},
            { name: ` `, value: `${dataMinT[1].parameter.parameterName} - ${dataMaxT[1].parameter.parameterName}`, inline: true},
            { name: ` `, value: `${dataMinT[2].parameter.parameterName} - ${dataMaxT[2].parameter.parameterName}`, inline: true},
            { name: ' ', value: `**降雨機率**`},
            { name: ` `, value: `${dataPoP[0].parameter.parameterName}%`, inline: true},
            { name: ` `, value: `${dataPoP[1].parameter.parameterName}%`, inline: true},
            { name: ` `, value: `${dataPoP[2].parameter.parameterName}%`, inline: true},
            { name: ` `, value: `**舒適度**`},
            { name: ` `, value: `${dataCI[0].parameter.parameterName}`, inline: true},
            { name: ` `, value: `${dataCI[1].parameter.parameterName}`, inline: true},
            { name: ` `, value: `${dataCI[2].parameter.parameterName}`, inline: true},

        )

        .setFooter({ text: `jack.huang_14 技術開發 (資訊提供：中央氣象局) • ${time}`, iconURL: 'https://instagram.ftpe8-3.fna.fbcdn.net/v/t51.2885-19/328435729_146505831646207_4024874995475887638_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ftpe8-3.fna.fbcdn.net&_nc_cat=107&_nc_ohc=L4ACOWXJvp4AX9V5jPi&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAMVrZwGkFql8Hx3Tbo9aGOAo3uFgv-ijZBgqS75oUY3Q&oe=640BE2A9&_nc_sid=1527a3' });

}

async function responseFail(time ,user , location){
    return new EmbedBuilder()
    .setColor(0x0099FF)
    .setAuthor({ name: `${user.username+'#'+user.discriminator} 查詢了 ${location} 的氣候資訊`, iconURL: `${user.avatarURL()}` })
    .setDescription(`我們無法從您所指定的地區中查詢\n到相關資料，請確認是否輸入正確。`)
    .setFooter({ text: `jack.huang_14 技術開發 • ${time}`, iconURL: 'https://instagram.ftpe8-3.fna.fbcdn.net/v/t51.2885-19/328435729_146505831646207_4024874995475887638_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ftpe8-3.fna.fbcdn.net&_nc_cat=107&_nc_ohc=L4ACOWXJvp4AX9V5jPi&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAMVrZwGkFql8Hx3Tbo9aGOAo3uFgv-ijZBgqS75oUY3Q&oe=640BE2A9&_nc_sid=1527a3' });

}

module.exports = {
    responseSuccess: responseSuccess,
    responseFail: responseFail
}