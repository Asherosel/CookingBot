const Discord = require("discord.js");

exports.run = async (client, message, args) => {


        let embed = new Discord.EmbedBuilder()
        .setTitle("Sahip")
        .setDescription(`👑 Botun sahibine dair bilgiler aşağıda verilmiştir.\n
\`465237644822052874\` Bot sahibinin ID'si.
\`asherosel\` Bot sahibinin kullanıcı adı.
\`cgdestek\` Destek sunucumuzun bağlantısını atar.
<@465237644822052874> Botun sahibi.
`)
        .setColor("#ffaa00")
        .setFooter({ text: `${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });
        return message.channel.send({embeds : [embed]});


}


exports.conf = {
    aliases: ['botsahibi','sahibi','owner', 'sahıp'],
    permLevel: 0,
    kategori: "Sahip"
};

exports.help = {
    name: "sahip",
    description: "Bot sahibini gösterir.",
    usage: "sahip"
};