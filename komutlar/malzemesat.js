const Discord = require("discord.js");
const { QuickDB } = require("quick.db");
const db = new QuickDB();

var timeout = [];

exports.run = async (client, message, args) => {

    if(timeout.includes(message.author.id)) return await message.reply(`Bu komutu tekrar kullanmak için \`3\` saniye beklemelisiniz!`).then(msg => setTimeout(() => msg.delete(), 3000));

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

    if(marul + domates + stursu + teti + et + yumurta + patates + sucuk + sosis + lavas == "undefined") return message.channel.send(`🟠 Sahip olduğunuz malzeme bulunmadığı için satılamadı.
   | Malzeme toplamak için \`cgtp\` yazabilirsiniz.`)
    if(marul + domates + stursu + teti + et + yumurta + patates + sucuk + sosis + lavas == "0") return message.channel.send(`🟠 Sahip olduğunuz malzeme bulunmadığı için satılamadı.
   | Malzeme toplamak için \`cgtp\` yazabilirsiniz.`)

    const gcoinmiktari = await db.get(`${message.author.id}.gcoin`)

    if (marul > 0) {
        marulfiyati = marul * 0.2
        await db.set(`${message.author.id}.malzemeleri.marul`, 0)
    } else if (marul <= 0) {
        marulfiyati = 0
    }
    if (domates > 0) {
        domatesfiyatı = domates * 0.2
        await db.set(`${message.author.id}.malzemeleri.domates`, 0)
    } else if (domates <= 0) {
        domatesfiyatı = 0
    }
    if (stursu > 0) {
        stursufiyatı = stursu * 0.3
        await db.set(`${message.author.id}.malzemeleri.stursu`, 0)
    } else if (stursu <= 0) {
        stursufiyatı = 0
    }
    if (teti > 0) {
        tetifiyatı = teti * 0.5
        await db.set(`${message.author.id}.malzemeleri.teti`, 0)
    } else if (teti <= 0) {
        tetifiyatı = 0
    }
    if (et > 0) {
        etfiyatı = et * 0.8
        await db.set(`${message.author.id}.malzemeleri.et`, 0)
    } else if (et <= 0) {
        etfiyatı = 0
    }
    if (yumurta > 0) {
        yumurtafiyatı = yumurta * 0.3
        await db.set(`${message.author.id}.malzemeleri.yumurta`, 0)
    } else if (yumurta <= 0) {
        yumurtafiyatı = 0
    }
    if (patates > 0) {
        patatesfiyatı = patates * 0.2
        await db.set(`${message.author.id}.malzemeleri.patates`, 0)
    } else if (patates <= 0) {
        patatesfiyatı = 0
    }
    if (sucuk > 0) {
        sucukfiyatı = sucuk * 0.6
        await db.set(`${message.author.id}.malzemeleri.sucuk`, 0)
    } else if (sucuk <= 0) {
        sucukfiyatı = 0
    }
    if (sosis > 0) {
        sosisfiyatı = sosis * 0.7
        await db.set(`${message.author.id}.malzemeleri.sosis`, 0)
    } else if (sosis <= 0) {
        sosisfiyatı = 0
    }
    if (lavas > 0) {
        lavasfiyatı = lavas * 0.6
        await db.set(`${message.author.id}.malzemeleri.lavas`, 0)
    } else if (lavas <= 0) {
        lavasfiyatı = 0
    }

        const kazanılantoplamgcoin = marulfiyati + domatesfiyatı + stursufiyatı + tetifiyatı + etfiyatı + yumurtafiyatı + patatesfiyatı + sucukfiyatı + sosisfiyatı + lavasfiyatı

        const yenipara = kazanılantoplamgcoin + gcoinmiktari
        await db.set(`${message.author.id}.gcoin`, yenipara)

        düzeltilmiş = kazanılantoplamgcoin.toFixed(1)

        if(marul == undefined) {
            marul = 0
        }
        if(domates == undefined) {
            domates = 0
        }
        if(stursu == undefined) {
            stursu = 0
        }
        if(teti == undefined) {
            teti  = 0
        }
        if(et == undefined) {
            et  = 0
        }
        if(yumurta == undefined) {
            yumurta = 0
        }
        if(patates == undefined) {
            patates = 0
        }
        if(sucuk == undefined) {
            sucuk = 0
        }
        if(sosis == undefined) {
            sosis = 0
        }
        if(lavas == undefined) {
            lavas = 0
        } 

        message.channel.send(`🟠 Sahip olduğunuz malzemeler başarılı bir şekilde satıldı.
   | Kazandığınız miktar: \`${düzeltilmiş}\`<:GCoin:1111072342483931186>
   | Satılan malzemeler:
   | 🥬${marul} 🍅${domates} 🥒${stursu} 🐔${teti}
   | 🍗${et} 🥚${yumurta} 🥔${patates} <:sucuk:1110994457358249984>${sucuk}
   | <:sosis:1110992985249816697>${sosis} 🌯${lavas}
        `);

    timeout.push(message.author.id);
    setTimeout(() => {
         timeout.shift();
    }, 3000)
}


exports.conf = {
    aliases: ['malzemesat','sebzesat','mmsat','meyvesat'],
    permLevel: 0,
    kategori: "Eğlence"
};

exports.help = {
    name: "msat",
    description: "Sahip olduğunuz malzemeleri satmanızı sağlar.",
    usage: "msat"
};