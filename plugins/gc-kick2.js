const handler = async (m, {conn, participants, usedPrefix, command}) => {
  if (!global.db.data.settings[conn.user.jid].restrict) throw '*𝙈𝙄 𝙊𝙒𝙉𝙀𝙍 http://wa.me/51936732723 𝙏𝙄𝙀𝙉𝙀 𝙍𝙀𝙎𝙏𝙍𝙄𝙉𝙂𝙄𝘿𝙊 𝙀𝙇 𝙐𝙎𝙊 𝘿𝙀 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊*';
  const kicktext = `*𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼 𝘼𝙇 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝙌𝙐𝙀 𝘿𝙀𝙎𝙀𝘼𝙎 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝙍*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} @${global.suittag}*`;
  if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, {mentions: conn.parseMention(kicktext)});
  if (m.mentionedJid.includes(conn.user.jid)) return;
  const user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
  const owr = m.chat.split`-`[0];
  await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
};
handler.command = /^(kick2|echar2|hechar2|sacar2)$/i;
handler.admin = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
