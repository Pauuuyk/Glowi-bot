const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
let oi = `*Owner: @boybenjx7 / https://wa.link/bwj7ga* ${pesan}`
let teks = `*𝑯𝒀𝑷𝑬𝑹𝑽 𝒊𝒏𝒗𝒐𝒄𝒂 𝒂 𝒕𝒐𝒅𝒐𝒔 𝒍𝒐𝒔 𝒎𝒊𝒆𝒎𝒃𝒓𝒐𝒔 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐*\n\n${oi}\n*ＨｙｐｅｒＭｉｅｍｂｒｏｓ*\n`
for (let mem of participants) {
teks += `🗣️ @${mem.id.split('@')[0]}\n`}
teks += `ℍ𝕪𝕡𝕖𝕣𝕍 𝕖𝕝 𝕞𝕖𝕛𝕠𝕥 𝔹𝕠𝕥 𝕕𝕖 𝕎𝕙𝕒𝕥𝕤𝔸𝕡𝕡 / @BOYBENJX7`
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
