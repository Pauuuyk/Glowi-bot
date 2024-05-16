const handler = async (m, {conn, text, participants}) => {
  const member = participants.map((u) => u.id);
  if (!text) {
    var sum = member.length;
  } else {
    var sum = text;
  }
  let total = 0;
  const sider = [];
  for (let i = 0; i < sum; i++) {
    const users = m.isGroup ? participants.find((u) => u.id == member[i]) : {};
    if ((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) {
      if (typeof global.db.data.users[member[i]] !== 'undefined') {
        if (global.db.data.users[member[i]].whitelist == false) {
          total++;
          sider.push(member[i]);
        }
      } else {
        total++;
        sider.push(member[i]);
      }
    }
  }
  if (total == 0) return conn.reply(m.chat, `*𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊 𝙀𝙎 𝘼𝘾𝙏𝙄𝙑𝙊, 𝙉𝙊 𝙏𝙄𝙀𝙉𝙀 𝙁𝘼𝙉𝙏𝘼𝙎𝙈𝘼𝙎*`, m);
  m.reply(`*[ 𝙃𝙔𝙋𝙀𝙍´𝙑 𝘿𝙀𝙏𝙀𝘾𝙏𝙊 𝙁𝘼𝙉𝙏𝘼𝙎𝙈𝘼𝙎 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊 ]*\n\n*𝙶𝚁𝚄𝙿𝙾:* ${await conn.getName(m.chat)}\n*𝙈𝙄𝙀𝙈𝘽𝙍𝙊𝙎 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊:* ${sum}\n\n*[ 👻 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙁𝘼𝙉𝙏𝘼𝙎𝙈𝘼𝙎 𝙃𝙔𝙋𝙀𝙍´𝙑 👻 ]*\n${sider.map((v) => '  👉🏻 @' + v.replace(/@.+/, '')).join('\n')}\n\n*𝙀𝙎𝙏𝙀 𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊 𝙉𝙊 𝙋𝙐𝙀𝘿𝙀𝙍 𝙎𝙀𝙍 100% 𝘼𝘾𝙀𝙍𝙏𝘼𝘿𝙊, 𝙃𝙔𝙋𝙀𝙍´𝙑 𝙄𝙉𝙄𝘾𝙄𝘼 𝙀𝙇 𝘾𝙊𝙉𝙏𝙀𝙊 𝘿𝙀 𝙈𝙀𝙉𝙎𝘼𝙅𝙀𝙎 𝘾𝙐𝘼𝙉𝘿𝙊 𝙍𝙀𝘾𝙄𝙀𝙉 𝙀𝙎𝙏𝘼 𝙀𝙉 𝙀𝙇 𝙂𝙍𝙐𝙋𝙊*`, null, {mentions: sider});
};
handler.command = /^(verfantasmas|fantasmas|sider)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;
