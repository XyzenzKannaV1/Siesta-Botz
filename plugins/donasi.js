let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
››╭─〘 *Donasi* 〙
╭╡📮: Donasi ngab jgan gunain doang.
│┝‷✧ *Ovo:* [${global.povo}]
│┝‷✧ *Dana:* [${global.pdana}]
│┝‷✧ *Gopay:* [${global.pgopay}]
│╰───···─────
│⁺◛˖ Ingin Donasi? Chat nomor owner
╰──────────···───╮
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '🧸 YouTube 🧸', url: snh}},
    {index: 2, urlButton: {displayText: '💬 Instagram 💬', url: sig}},
    {index: 3, urlButton: {displayText: '🌎 Official Group 🌎', url: sgc}},
    {index: 4, quickReplyButton: {displayText: 'Menu', id: '.menu'}},
    {index: 5, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
