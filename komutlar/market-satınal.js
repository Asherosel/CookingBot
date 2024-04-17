const Discord = require("discord.js");
const { QuickDB } = require("quick.db");
const db = new QuickDB();

exports.run = async (client, message, args) => {


    const alanınparası = await db.get(`${message.author.id}.gcoin`)

        //SU KOMUTU
    if(args[0] === "su" || args[0] === "SU" || args[0] === "Su" || args[0] === "sU") {

    if(alanınparası >= 100) {
    message.channel.send(`🟠 \`Su(200 Adet)\` satın alımınız başarıyla tamamlandı.`)
    await db.add(`${message.author.id}.malzemeleri.market.su`, 200)
    const kalanparası = alanınparası - 100
    await db.set(`${message.author.id}.gcoin`, kalanparası)
    return
    } else if (alanınparası < 100) {
    message.channel.send(`🟠 \`Su(200 Adet)\` satın alımınız GCoin miktarınızın yetersiz olması sebebiyle başarısız oldu.`)
    return
    }
}
        //SÜT KOMUTU
    if(args[0] === "süt" || args[0] === "SÜT" || args[0] === "Süt" || args[0] === "sÜT") {
    
    if(alanınparası >= 150) {
    message.channel.send(`🟠 \`Süt(100 Adet)\` satın alımınız başarıyla tamamlandı.`)
    await db.add(`${message.author.id}.malzemeleri.market.süt`, 100)
    const kalanparası = alanınparası - 150
    await db.set(`${message.author.id}.gcoin`, kalanparası)
    return
    } else if (alanınparası < 150) {
    message.channel.send(`🟠 \`Süt(100 Adet)\` satın alımınız GCoin miktarınızın yetersiz olması sebebiyle başarısız oldu.`)
    return
    }
}
        //AYRAN KOMUTU
    if(args[0] === "ayran" || args[0] === "AYRAN" || args[0] === "Ayran" || args[0] === "aYRAN") {
    
    if(alanınparası >= 200) {
    message.channel.send(`🟠 \`Ayran(150 Adet)\` satın alımınız başarıyla tamamlandı.`)
    await db.add(`${message.author.id}.malzemeleri.market.ayran`, 150)
    const kalanparası = alanınparası - 200
    await db.set(`${message.author.id}.gcoin`, kalanparası)
    return
    } else if (alanınparası < 200) {
    message.channel.send(`🟠 \`Ayran(150 Adet)\` satın alımınız GCoin miktarınızın yetersiz olması sebebiyle başarısız oldu.`)
    return
    }
}
        //YAĞ KOMUTU
    if(args[0] === "yağ" || args[0] === "YAĞ" || args[0] === "Yağ" || args[0] === "yAĞ") {
    
    if(alanınparası >= 150) {
    message.channel.send(`🟠 \`Yağ(50 Adet)\` satın alımınız başarıyla tamamlandı.`)
    await db.add(`${message.author.id}.malzemeleri.market.yağ`, 50)
    const kalanparası = alanınparası - 150
    await db.set(`${message.author.id}.gcoin`, kalanparası)
    return
    } else if (alanınparası < 150) {
    message.channel.send(`🟠 \`Yağ(50 Adet)\` satın alımınız GCoin miktarınızın yetersiz olması sebebiyle başarısız oldu.`)
    return
    }
}



        message.channel.send(`🟠 Lütfen almak istediğiniz ürünün adını yazınız, ürün listesine bakmak için \`cgmarket\` yazabilirsiniz.`);

}


exports.conf = {
    aliases: ['al','sal'],
    permLevel: 0,
    kategori: "Eğlence"
};

exports.help = {
    name: "satınal",
    description: "Yazdığınız ürünü satın almanızı sağlar.",
    usage: "satınal"
};