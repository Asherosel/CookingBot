const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    const totalGuilds = client.guilds.cache.size;
    const totalMembers = client.users.cache.size;

    return message.channel.send(`<:Cooking:1111728192890347641> Destek Sunucumuz https://discord.gg/C3RQ6fvQ7p
`);

}


exports.conf = {
    aliases: ['desteksunucusu','dks'],
    permLevel: 0,
    kategori: "Genel"
};

exports.help = {
    name: "destek",
    description: "Destek sunucumuzun bağlantısını atar.",
    usage: "destek"
};