const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*HYPERV TE INVITA A UNIRTE AL GRUPO OFICIAL DE WHATSAPP*

*➤ GRUPO OFICIAL DE HYPERV BOT:*
*1.-* https://chat.whatsapp.com/DXAdja6QqGsEqMtuTJNTXn`.trim();
  const buttonMessage= {
    'document': {url: `https://www.instagram.com/boybenjx7`},
    'mimetype': `application/${document}`,
    'fileName': `「  OWNER https://wa.link/bwj7ga 」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://www.instagram.com/boybenjx7',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': 'HYPERV EL MEJOR BOT DE WHATSAPP⁩',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://www.instagram.com/boybenjx7'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['linkgc', 'grupos'];
export default handler;
