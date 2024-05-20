const handler = async (m, {conn}) => {
  m.reply(global.hyper);
};
handler.command = /^(hyper|hyper)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.hyper = ` 
╭═ *❄️𝘼𝙉𝙊𝙏𝙀𝙉𝙎𝙀 𝘼𝙇 𝙑𝙎❄️*  ═╮

`;
