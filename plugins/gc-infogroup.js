const handler = async (m, {conn, participants, groupMetadata}) => {
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/avatar_contact.png';
  const {antiToxic, antiTraba, antidelete, antiviewonce, isBanned, welcome, detect, detect2, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, modoadmin, audios, delete: del} = global.db.data.chats[m.chat];
  const groupAdmins = participants.filter((p) => p.admin);
  const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
  const owner = groupMetadata.owner || groupAdmins.find((p) => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
  const text = `*「 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍 𝙃𝙔𝙋𝙀𝙍´𝙑 𝐃𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 」*\n
*𝙄𝘿𝙀𝙉𝙏𝙄𝙁𝙄𝘾𝘼𝘾𝙄𝙊𝙉 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊:* 
${groupMetadata.id}

*𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊:* 
${groupMetadata.subject}

*𝘿𝙀𝙎𝘾𝙍𝙄𝙋𝘾𝙄𝙊𝙉 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊:* 
${groupMetadata.desc?.toString() || '𝚂𝙸𝙽 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽'}

*𝙏𝙊𝙏𝘼𝙇 𝘿𝙀 𝙋𝘼𝙍𝙏𝙄𝘾𝙄𝙋𝘼𝙉𝙏𝙀𝙎:*
${participants.length} Participantes

*𝘾𝙍𝙀𝘼𝘿𝙊𝙍 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊:* 
@${owner.split('@')[0]}

*𝙃𝙔𝙋𝙀𝙍´𝘼𝘿𝙈𝙄𝙉𝙎 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊:*
${listAdmin}

*𝙊𝙋𝘾𝙄𝙊𝙉𝙀𝙎 𝙃𝙔𝙋𝙀𝙍´𝙑:*
—◉ 𝚆𝙴𝙻𝙲𝙾𝙼𝙴: ${welcome ? '✅' : '❌'}
—◉ 𝙳𝙴𝚃𝙴𝙲𝚃: ${detect ? '✅' : '❌'} 
—◉ 𝙳𝙴𝚃𝙴𝙲𝚃 2: ${detect2 ? '✅' : '❌'} 
—◉ 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺: ${antiLink ? '✅' : '❌'} 
—◉ 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺 𝟸: ${antiLink2 ? '✅' : '❌'} 
—◉ 𝙼𝙾𝙳𝙾 𝙷𝙾𝚁𝙽𝚈: ${modohorny ? '✅' : '❌'} 
—◉ 𝙰𝚄𝚃𝙾𝚂𝚃𝙸𝙲𝙺𝙴𝚁: ${autosticker ? '✅' : '❌'} 
—◉ 𝙰𝚄𝙳𝙸𝙾𝚂: ${audios ? '✅' : '❌'} 
—◉ 𝙰𝙽𝚃𝙸𝚅𝙸𝙴𝚆𝙾𝙽𝙲𝙴: ${antiviewonce ? '✅' : '❌'} 
—◉ 𝙰𝙽𝚃𝙸𝙳𝙴𝙻𝙴𝚃𝙴: ${antidelete ? '✅' : '❌'} 
—◉ 𝙰𝙽𝚃𝙸𝚃𝙾𝚇𝙸𝙲: ${antiToxic ? '✅' : '❌'} 
—◉ 𝙰𝙽𝚃𝙸𝚃𝚁𝙰𝙱𝙰: ${antiTraba ? '✅' : '❌'} 
—◉ 𝙼𝙾𝙳𝙾𝙰𝙳𝙼𝙸𝙽: ${modoadmin ? '✅' : '❌'} 
`.trim();
  conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, {mentions: [...groupAdmins.map((v) => v.id), owner]});
};
handler.help = ['infogrup'];
handler.tags = ['group'];
handler.command = /^(infogrupo|gro?upinfo|info(gro?up|gc))$/i;
handler.group = true;
export default handler;
