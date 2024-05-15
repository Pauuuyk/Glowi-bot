let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `𝘼𝙉𝙊𝙏𝙀𝙉𝙎𝙀 𝘼𝙇 𝙑𝙎 𝘽𝙀𝘽𝙄𝙏𝘼𝙎❄️ ${pesan}`
let teks = `╭┈┈ ๑❀๑ •• ${oi} ๑❀๑ ••:\n`
for (let mem of participants) {
teks += `@${mem.id.split('@')[0]}💗`}
teks += `


conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['smsf00 <mesaje>','fem00 <mesaje>']
handler.tags = ['group']
handler.command = /^(femenino00|fem00)$/i
handler.admin = true
handler.group = true
export default handler
