const Discord = require("discord.js");
const { QuickDB } = require("quick.db");
const db = new QuickDB();
let ms = require('ms')

 var timeout = [];

exports.run = async (client, message, args) => {


    if(timeout.includes(message.author.id)) return await message.reply(`Bu komutu tekrar kullanmak için \`3\` saniye beklemelisiniz!`)

    const malzemeler = [
        "🥬 Marul",
        "🍅 Domates",
        "🥒 Salatalık Turşusu",
        "🐔 Tavuk Eti",
        "🍗 Et",
        "🥚 Yumurta",
        "🥔 Patates",
        "<:sucuk:1110994457358249984> Sucuk",
        "<:sosis:1110992985249816697> Sosis",
        "🌯 Lavaş"
    ];
    
    const malzeme = Math.floor(Math.random() * malzemeler.length);

        if(malzemeler[malzeme] == "🥬 Marul") {
            await db.add(`${message.author.id}.malzemeleri.marul`, 1);
        }
        if(malzemeler[malzeme] == "🍅 Domates") {
            await db.add(`${message.author.id}.malzemeleri.domates`, 1);
        }
        if(malzemeler[malzeme] == "🥒 Salatalık Turşusu") {
            await db.add(`${message.author.id}.malzemeleri.stursu`, 1);
        }
        if(malzemeler[malzeme] == "🐔 Tavuk Eti") {
            await db.add(`${message.author.id}.malzemeleri.teti`, 1);
        }
        if(malzemeler[malzeme] == "🍗 Et") {
            await db.add(`${message.author.id}.malzemeleri.et`, 1);
        }
        if(malzemeler[malzeme] == "🥚 Yumurta") {
            await db.add(`${message.author.id}.malzemeleri.yumurta`, 1);
        }
        if(malzemeler[malzeme] == "🥔 Patates") {
            await db.add(`${message.author.id}.malzemeleri.patates`, 1);
        }
        if(malzemeler[malzeme] == "<:sucuk:1110994457358249984> Sucuk") {
            await db.add(`${message.author.id}.malzemeleri.sucuk`, 1);
        }
        if(malzemeler[malzeme] == "<:sosis:1110992985249816697> Sosis") {
            await db.add(`${message.author.id}.malzemeleri.sosis`, 1);
        }
        if(malzemeler[malzeme] == "🌯 Lavaş") {
            await db.add(`${message.author.id}.malzemeleri.lavas`, 1);
        }


        await message.channel.send(`${malzemeler[malzeme]} topladın.`);


         timeout.push(message.author.id);
         setTimeout(() => {
            timeout.shift();
        }, 3000)
    }


exports.conf = {
    aliases: ['tp','meyve','sebze','malzemetopla'],
    permLevel: 0,
    kategori: "Eğlence"
};

exports.help = {
    name: "topla",
    description: "Malzeme toplamanızı sağlar.",
    usage: "topla"
};