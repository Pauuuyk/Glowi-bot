const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*HYPERV TE INVITA A UNIRTE AL GRUPO OFICIAL DE WHATSAPP*

*➤ 𝙶𝚛𝚞𝚙𝚘 𝚘𝚏𝚒𝚌𝚒𝚊𝚕𝚎𝚜 𝚍𝚎𝚕 𝙱𝚘𝚝:*
*1.-* https://chat.whatsapp.com/DXAdja6QqGsEqMtuTJNTXn`.trim();
  const buttonMessage= {
    'document': {url: `https://www.instagram.com/boybenjx7`},
    'mimetype': `application/${document}`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://www.instagram.com/boybenjx7',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': 'HYPERV BOT : @BOYBENJX7',
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
