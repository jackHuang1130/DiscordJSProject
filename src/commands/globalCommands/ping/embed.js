const { EmbedBuilder } = require('discord.js');
const os = require("os");
const { cpuUsage } = require('process');
const { client } = require('../../../discord/bot.js')
const { getCpu, getMemory, getSystem } = require('../../../modules/getSystemInformation/getSystemInformation.js')

async function pingResponseIntroduce(time){
    let cpu = await getCpu();
    let mem = await getMemory();
    let sys = await getSystem();

    return new EmbedBuilder()
		.setColor(0x0099FF)
		.setAuthor({ name: '嗨 你好!', iconURL: 'https://cdn.discordapp.com/emojis/588505226441392129.webp?size=96&quality=lossless' })
		.setDescription('我是由 <@192995817626402818> 所主導開發的 Discord 機器人，\n是其第一代重頭開始撰寫的第一個正式開源專案，\n所以是個試驗品！可能會有點瑕疵。\n而我呢，叫做小冰，初次見面，您好！')
        .addFields(
            { name: '⭐ 開發資訊', value: ' ' },
            //{ name: '\u200B', value: '\u200B' },
            { name: '<:mgwand:964155420514091008>開發、維護者', value: '> jack.hunag_14', inline: true},
            { name: ':gear: 運行版本', value: '> 第三代 \n> ||打掉重練二次||', inline: true},
            { name: '⭐ 相關資源', value: ' '},
            { name: 'Discord 社群', value: '> [點我前往](https://discord.com/invite/as77uKwjyV)', inline: true},
            { name: 'Github 開源碼', value: '> [點我前往](https://github.com/jackHuang14/DiscordJSProject/)', inline: true},
            { name: '⭐ 系統資訊', value: ' '},
            { name: '系統延遲', value: `> ${client.ws.ping}`, inline: true},
            { name: '運行系統', value: `> ${sys.OSPlatform}`, inline: true},
            { name: '運行時間', value: `> ${sys.OSUptime}`, inline: true},
            { name: '使用處理器', value: `> ${cpu.cpuModel}`,},
            { name: '處理器核心數', value: `> ${cpu.cpuCores}`, inline: true},
            { name: '處理器使用率', value: `> ${cpu.cpuUsage} %`, inline: true},
            { name: '系統記憶體用量', value: `> ${mem.memUsage.usedMemMb} / ${mem.memUsage.totalMemMb}`}
            //{ name: ''}
        )        
        .setFooter({ text: `jack.huang_14 技術開發 • ${time}`, iconURL: 'https://instagram.ftpe8-3.fna.fbcdn.net/v/t51.2885-19/328435729_146505831646207_4024874995475887638_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.ftpe8-3.fna.fbcdn.net&_nc_cat=107&_nc_ohc=L4ACOWXJvp4AX9V5jPi&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAMVrZwGkFql8Hx3Tbo9aGOAo3uFgv-ijZBgqS75oUY3Q&oe=640BE2A9&_nc_sid=1527a3' });
}

module.exports = {
    pingResponseIntroduce: pingResponseIntroduce
}