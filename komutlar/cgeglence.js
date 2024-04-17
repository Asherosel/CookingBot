const Discord = require("discord.js");

exports.run = async (client, message, args) => {


        let embed = new Discord.EmbedBuilder()
        .setTitle("Eğlence")
        .setDescription(`📙 Eğlence komutlarımız aşağıda listelenmiştir.\n
\`cgcoin\` GCoin miktarınızı gösterir.
\`cgmalzemelerim\` Elinizde bulunan malzemeleri gösterir.
\`cgmalzemesat\` Malzemelerinizi satmanızı sağlar.
\`cgsatınal\` Marketten malzeme satın almanızı sağlar.
\`cgmarket\` Marketteki malzemelere bakmanızı sağlar.
\`cgtopla\` Malzeme toplamanızı sağlar.
\`cgyemeklistesi\` Yemek listesine bakmanızı sağlar.
`)
        .setColor("#ffaa00")
        .setFooter({ text: `${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });
        return message.channel.send({embeds : [embed]});


}


exports.conf = {
    aliases: ['eglence','eğc', 'egc'],
    permLevel: 0,
    kategori: "Genel"
};

exports.help = {
    name: "eğlence",
    description: "Eğlence komutlarını gösterir.",
    usage: "eğlence"
};