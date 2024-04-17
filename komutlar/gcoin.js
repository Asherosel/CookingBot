const Discord = require("discord.js");
const { QuickDB } = require("quick.db");
const db = new QuickDB();

exports.run = async (client, message, args) => {

    const gcoinmiktari = await db.get(`${message.author.id}.gcoin`)
    
    düzeltilmiş = gcoinmiktari.toFixed(1)

        message.channel.send(`<:GCoin:1111072342483931186> | <@${message.author.id}>, sahip olduğun GCoin miktarı ${düzeltilmiş} adettir!`);

}


exports.conf = {
    aliases: ['coin','gc','para','param', 'money', 'balance', 'cgcoın'],
    permLevel: 0,
    kategori: "Eğlence"
};

exports.help = {
    name: "gcoin",
    description: "GCoin miktarınızı gösterir.",
    usage: "gcoin"
};