const Discord = require("discord.js");

exports.run = async (client, message, args) => {


        let embed = new Discord.EmbedBuilder()
        .setTitle("Aliases")
        .setDescription(`📙 Komutların kısa alternatiflerini buradan görebilirsiniz.\n
\`cgcoin\` -> \`cggc, cggcoin, cgpara, cgparam, cgmoney, cgbalance\`.
\`cgmalzemelerim\` -> \`mm, meyvelerim, sebzelerim, malzemeler\`.
\`cgmalzemesat\` -> \`msat, mmsat, sebzesat, meyvesat\`.
\`cgsatınal\` -> \`al, sal\`.
\`cgmarket\` -> \`mt, shop, bakkal, dükkan, manav\`.
\`cgtopla\` -> \`tp, meyve, sebze, malzemetopla\`.
\`cgyemeklistesi\` -> \`yl, yemekler, yemeklerinlistesi\`.
`)
        .setColor("#ffaa00")
        .setFooter({ text: `${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });
        return message.channel.send({embeds : [embed]});


}


exports.conf = {
    aliases: ['kısakomutlar','alternatifler', 'alternatif', 'alıases'],
    permLevel: 0,
    kategori: "Genel"
};

exports.help = {
    name: "aliases",
    description: "Eğlence komutlarını gösterir.",
    usage: "aliases"
};