const Discord = require("discord.js");

exports.run = async (client, message, args) => {

        let marketembed = new Discord.EmbedBuilder()
        .setTitle("Market")
        .setDescription(`İstediğiniz ürünü örnekteki gibi satın alabilirsiniz.
        **Örnek kullanım:** \`cgsatınal su / cgal su\`

        Su(200 Adet -> 100GC)
        Süt(100 Adet -> 150GC)
        Ayran(150 Adet -> 200GC)
        Yağ(50 Adet -> 150GC)
        
        `)
        .setColor("#ffaa00")
        .setFooter({ text: `${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });
        return message.channel.send({embeds : [marketembed]});

}


exports.conf = {
    aliases: ['shop', 'mt', 'bakkal', 'dükkan', 'manav'],
    permLevel: 0,
    kategori: "Eğlence"
};

exports.help = {
    name: "market",
    description: "Marketteki ürünleri gösterir.",
    usage: "market"
};