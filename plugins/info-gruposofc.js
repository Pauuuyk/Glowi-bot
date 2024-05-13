const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*𝐻𝓎𝓅𝑒𝓇𝒱 𝐵𝑜𝓉 𝓉𝑒 𝒾𝓃𝓋𝒾𝓉𝒶 𝒶 𝓊𝓃𝒾𝓇𝓉𝑒 𝒶𝓁 𝑔𝓇𝓊𝓅𝑜 𝑜𝒻𝒾𝒸𝒾𝒶𝓁 𝒹𝑒 𝒲𝒽𝒶𝓉𝓈𝒜𝓅𝓅*

*➤ 𝒢𝓇𝓊𝓅𝑜 𝑜𝒻𝒾𝒸𝒾𝒶𝓁 𝒹𝑒 𝐻𝓎𝓅𝑒𝓇𝒱 𝐵𝑜𝓉:*
*1.-* https://chat.whatsapp.com/DXAdja6QqGsEqMtuTJNTXn`.trim();
  const buttonMessage= {
    'document': {url: `https://www.instagram.com/boybenjx7`},
    'mimetype': `application/${document}`,
    'fileName': `「  𝓞𝔀𝓷𝓮𝓻 @𝓫𝓸𝔂𝓫𝓮𝓷𝓳𝔁7 」`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://www.instagram.com/boybenjx7',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': '𝐻𝓎𝓅𝑒𝓇𝒱 𝑒𝓁 𝓂𝑒𝒿𝑜𝓉 𝐵𝑜𝓉 𝒹𝑒 𝒲𝒽𝒶𝓉𝓈𝒜𝓅𝓅⁩',
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
