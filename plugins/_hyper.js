const handler = async (m, {conn}) => {
  m.reply(global.hyper);
};
handler.command = /^(hyper|hyper)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.hyper = ` 
*[𝐇𝐘𝐏𝐄𝐑´𝐕 𝐁𝐎𝐓]*

`;
