const Discord = require("discord.js");
const { QuickDB } = require("quick.db");
const db = new QuickDB();

exports.run = async (client, message, args) => {


         marul = await db.get(`${message.author.id}.malzemeleri.marul`)
         domates = await db.get(`${message.author.id}.malzemeleri.domates`)
         stursu = await db.get(`${message.author.id}.malzemeleri.stursu`)
         teti = await db.get(`${message.author.id}.malzemeleri.teti`)
         et = await db.get(`${message.author.id}.malzemeleri.et`)
         yumurta = await db.get(`${message.author.id}.malzemeleri.yumurta`)
         patates = await db.get(`${message.author.id}.malzemeleri.patates`)
         sucuk = await db.get(`${message.author.id}.malzemeleri.sucuk`)
         sosis = await db.get(`${message.author.id}.malzemeleri.sosis`)
         lavas = await db.get(`${message.author.id}.malzemeleri.lavas`)

         //MARKET MALZEMELERİ
         su = await db.get(`${message.author.id}.malzemeleri.market.su`)
         süt = await db.get(`${message.author.id}.malzemeleri.market.süt`)
         ayran = await db.get(`${message.author.id}.malzemeleri.market.ayran`)
         yağ = await db.get(`${message.author.id}.malzemeleri.market.yağ`)

       if(marul == undefined) {
        marul = "0"
       }
       if(domates == undefined) {
        domates = "0"
       }
       if(stursu == undefined) {
        stursu = "0"
       }
       if(teti == undefined) {
        teti = "0"
       }
       if(et == undefined) {
        et = "0"
       }
       if(yumurta == undefined) {
        yumurta = "0"
       }
       if(patates == undefined) {
        patates = "0"
       }
       if(sucuk == undefined) {
        sucuk = "0"
       }
       if(sosis == undefined) {
        sosis = "0"
       }
       if(lavas == undefined) {
        lavas = "0"
       }
       if(su == undefined) {
        su = "0"
       }
       if(süt == undefined) {
        süt = "0"
       }
       if(ayran == undefined) {
        ayran = "0"
       }
       if(yağ == undefined) {
        yağ = "0"
       }

       message.channel.send(`🟠 <@${message.author.id}> Malzemelerin:
   | 🥬${marul}  🍅${domates}  🥒${stursu}
   | 🐔${teti}  🍗${et}  🥚${yumurta}
   | 🥔${patates}  <:sucuk:1110994457358249984>${sucuk}  <:sosis:1110992985249816697>${sosis}
   | 🌯${lavas}
🟠 Market Malzemelerin:
   | 💦${su}  🥛${süt}
   | <:ayran:1111715769215094814>${ayran}  🧈${yağ}
       
       
       
       `);

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
       
}


exports.conf = {
    aliases: ['mm','meyvelerim','sebzelerim','malzemeler'],
    permLevel: 0,
    kategori: "Eğlence"
};

exports.help = {
    name: "malzemelerim",
    description: "Malzemelerinizi gösterir.",
    usage: "malzemelerim"
};