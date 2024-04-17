const Discord = require("discord.js");

exports.run = async (client, message, args) => {


        let embed = new Discord.EmbedBuilder()
        .setTitle("Genel")
        .setDescription(`📙 Genel komutlarımız aşağıda listelenmiştir.\n
\`cgyardım\` Bot hakkında aradığınız her şey burada yer almaktadır.
\`cgping\` Botun ve Discord'un gecikmesini göstermektedir.
\`cgsunucubilgi\` Sunucunun bilgilerini vermektedir.
\`cgaliases\` Komutların kısa ve farklı yazılışlarını göstermektedir.
`)
        .setColor("#ffaa00")
        .setFooter({ text: `${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });
        return message.channel.send({embeds : [embed]});


}


exports.conf = {
    aliases: ['genelkomutlar','gnl'],
    permLevel: 0,
    kategori: "Genel"
};

exports.help = {
    name: "genel",
    description: "Genel komutları gösterir.",
    usage: "genel"
};