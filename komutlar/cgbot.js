const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    const totalGuilds = client.guilds.cache.size;
    const totalMembers = client.users.cache.size;

    return message.channel.send(`    ${totalGuilds} sunucu, ${totalMembers} kullanıcı     `);

}


exports.conf = {
    aliases: ['botbilgi','stats', 'istatistik', 'i'],
    permLevel: 0,
    kategori: "Genel"
};

exports.help = {
    name: "bot",
    description: "Bot hakkında bilgileri gösterir.",
    usage: "bot"
};