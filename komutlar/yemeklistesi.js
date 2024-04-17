const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json') 

exports.run = async (client, message, args) => {
    var prefix = ayarlar.prefix;

//ÇİĞKÖFTE KOMUTU
        if(args[0] === "çiğköfte" || args[0] === "çiğköftedürüm" || args[0] === "çiğköftedurum" || args[0] === "ÇiğKöfteDürüm") {
        let CigKofte = new Discord.EmbedBuilder()
        .setTitle(`Çiğ Köfte Dürüm`)
        .setColor('#ffaa00')
        .setDescription(`Çiğ köfte dürüm yapmanız için gereken malzemeler:
        \`20 Adet\` Lavaş
        \`40 Adet\` Marul
        \`30 Adet\` Domates
        \`50 Adet\` Çiğ Köfte
        \`10 Adet\` Ayran
        Çiğ köfte dürüm \`200 GCoin\` fiyatıyla satılmaktadır.
        `)
       .setFooter({ text: `${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });
  return message.channel.send({embeds : [CigKofte]});
}

//DOMATES ÇORBASI KOMUTU
        if(args[0] === "domatesçorbası" || args[0] === "domatescorbasi" || args[0] === "DOMATESÇORBASI" || args[0] === "DOMATESCORBASI") {
        let DomatesCorbasi = new Discord.EmbedBuilder()
        .setTitle(`Domates Çorbası`)
        .setColor('#ffaa00')
        .setDescription(`Domates çorbası yapmanız için gereken malzemeler:
        \`30 Adet\` Domates
        \`30 Adet\` Su
        \`30 Adet\` Süt
        Domates \`150 GCoin\` fiyatıyla satılmaktadır.
        `)
       .setFooter({ text: `${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });
  return message.channel.send({embeds : [DomatesCorbasi]});
}



        let embed = new Discord.EmbedBuilder()
        .setTitle("Yemekler")
        .setDescription(`
        Yemeklerin yapımı için gereken malzemeleri görmek için istediğiniz yemek adını yazınız.
        **Örnek kullanım:** \`${prefix}yl çiğköftedürüm\`

        Çiğ Köfte Dürüm - Mercimek Çorbası - Pilav
        Domates Çorbası - Tavuklu Pilav - Makarna
        Et Dürüm - Tavuk Dürüm - Tavada Yumurta
        Sucuklu Yumurta - Haşlanmış Yumurta - Kızarmış Patates
        Sucuk Ekmek - Sosisli Sandviç - Hamburger
        Pizza - Kuru Fasulye 
        `)
        .setColor("#ffaa00")
        .setFooter({ text: `${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });
        message.channel.send({embeds : [embed]});

}


exports.conf = {
    aliases: ['yemeklistesi','yemeklerinlistesi','yl'],
    permLevel: 0,
    kategori: "Eğlence"
};

exports.help = {
    name: "yemekler",
    description: "Yemeklerin listesini gösterir.",
    usage: "yemekler"
};