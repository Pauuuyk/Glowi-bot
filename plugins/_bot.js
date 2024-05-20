const handler = async (m, {conn}) => {
  m.reply(global.bot);
};
handler.command = /^(bot|bot)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.bot = ` 
*[𝐇𝐘𝐏𝐄𝐑´𝐕 𝐁𝐎𝐓]*

`;
