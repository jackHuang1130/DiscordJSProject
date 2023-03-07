const { EmbedBuilder } = require('discord.js');

async function COIVDResponseSuccess(time ,data, user){
    return new EmbedBuilder()
        .setColor(0x0099FF)
        .setAuthor({ name: `${user.username+'#'+user.discriminator} 查詢了 ${data.country} 的疫情資訊`, iconURL: `${user.avatarURL()}` })
        .setDescription(`以下是我們查詢到該地區的相關資料`)
        .addFields(
            { name: '總人口數', value: `> \`${data.population}\``},
            { name: '總確診數', value: `> \`${data.cases}\``, inline: true},
            { name: '總死亡數', value: `> \`${data.deaths}\``, inline: true},
            { name: '總康復數', value: `> \`${data.recovered}\``, inline: true},
            { name: '今日確診數', value: `> \`${data.todayCases}\``, inline: true},
            { name: '今日死亡數', value: `> \`${data.todayDeaths}\``, inline: true},
            { name: '今日康復數', value: `> \`${data.todayRecovered}\``, inline: true}
            //{ name: '不活躍時限', value: "`"+`${afkTimeout}`+"`", inline: true},
            //{ name: '\u200B', value: '\u200B', inline: true }
        )
        //.setDescription(`該地區總確診數 ${data.cases}`)
        .setThumbnail(`${data.countryInfo.flag}`)
        .setFooter({ text: `jack.huang_14 技術開發 (資訊提供：disease.sh) • ${time}`, iconURL: 'https://instagram.ftpe8-3.fna.fbcdn.net/v/t51.2885-19/328435729_146505831646207_4024874995475887638_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ftpe8-3.fna.fbcdn.net&_nc_cat=107&_nc_ohc=L4ACOWXJvp4AX9V5jPi&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAMVrZwGkFql8Hx3Tbo9aGOAo3uFgv-ijZBgqS75oUY3Q&oe=640BE2A9&_nc_sid=1527a3' });

}

async function COIVDResponseFail(time ,country , user){
    return new EmbedBuilder()
    .setColor(0x0099FF)
    .setAuthor({ name: `${user.username+'#'+user.discriminator} 查詢了 ${country} 的疫情資訊`, iconURL: `${user.avatarURL()}` })
    .setDescription(`我們無法從您所指定的國家或地區中查詢\n到相關資料，請確認是否輸入正確。`)

    //.setDescription(`該地區總確診數 ${data.cases}`)
    //.setThumbnail(`${data.countryInfo.flag}`)
    .setFooter({ text: `jack.huang_14 技術開發 • ${time}`, iconURL: 'https://instagram.ftpe8-3.fna.fbcdn.net/v/t51.2885-19/328435729_146505831646207_4024874995475887638_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ftpe8-3.fna.fbcdn.net&_nc_cat=107&_nc_ohc=L4ACOWXJvp4AX9V5jPi&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAMVrZwGkFql8Hx3Tbo9aGOAo3uFgv-ijZBgqS75oUY3Q&oe=640BE2A9&_nc_sid=1527a3' });

}

module.exports = {
    COIVDResponseSuccess: COIVDResponseSuccess,
    COIVDResponseFail: COIVDResponseFail
}