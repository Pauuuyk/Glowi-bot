let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `❄️𝘼𝙉𝙊𝙏𝙀𝙉𝙎𝙀 𝘼𝙇 𝙑𝙎 𝘽𝙀𝘽𝙄𝙏𝘼𝙎❄️ ${pesan}`
let teks = `✯ ${oi} ✯═╮\n`
for (let mem of participants) {
teks += `@${mem.id.split('@')[0]}💗`}
teks += `

║
║     〘 ✯✯✯✯✯✯✯✯✯ 〙
║       
║➤      ෆ 𝘌𝘯𝘤𝘢𝘳𝘨𝘢𝘥𝘢:
║➤      ෆ 𝘏𝘰𝘳𝘢𝘳𝘪𐐫:
║➤      ෆ 𝘔𝘰𝘥𝘢𝘭𝘪𝘥𝘢𝘥:
║➤         ‧₊⌗ 18🇵🇪 ⌇ 19🇨🇱 ⌇ 20🇦🇷      
║
║➤   ㅤㅤʚ 𝘑𝘶𝘨𝘢𝘥𝘰𝘳𝘢𝘴:
║➤     ❄️• 
║➤     ❄️• 
║➤     ❄️• 
║➤     ❄️•
║   ㅤㅤ
║➤   ㅤㅤʚ 𝘚𝘶𝘱𝘭𝘦𝘯𝘵𝘦𝘴:
║➤   ㅤ❄️•
║➤   ㅤ❄️•
║
║➤    ⊹ ִֶָ  𝘋𝘰𝘯𝘢𝘥𝘰𝘳𝘢 𝘥𝘦 𝘴𝘢𝘭𝘢: 
║
╰═══╡ https://wa.me/51936732723 ╞═══╯
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['smsf00 <mesaje>','fem00 <mesaje>']
handler.tags = ['group']
handler.command = /^(femenino00|fem00)$/i
handler.admin = true
handler.group = true
export default handler
