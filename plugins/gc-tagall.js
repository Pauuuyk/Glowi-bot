const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  let oi = `*║➤ 📩𝙃𝙮𝙥𝙚𝙧𝙈𝙚𝙣𝙨𝙖𝙟𝙚:* ${pesan}`
let teks = `*╭═══〘 ✯❄️𝙃𝙔𝙋𝙀𝙍´𝙑 𝙇𝙊𝙎 𝙄𝙉𝙑𝙊𝘾𝘼 𝘼 𝙏𝙊𝘿𝙊𝙎(𝘼)❄️✯ 〙══╮*\n\n${oi}\n║➤ *𝙈𝙀𝙉𝘾𝙄𝙊𝙉 𝙂𝙀𝙉𝙀𝙍𝘼𝙇 𝙃𝙔𝙋𝙀𝙍´𝙑:*
\n`
for (let mem of participants) {
teks += `║➤ ❄ @${mem.id.split('@')[0]}\n`}
teks += `*╰═══╡✯ 🤖𝙊𝙬𝙣𝙚𝙧:https://wa.me/51936732723 ✯╞═══╯*`
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
