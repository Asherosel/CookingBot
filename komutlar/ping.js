const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    const discord_ping = Math.abs(message.client.ws.ping)
    const bot_ping = Math.abs(Date.now() - message.createdTimestamp)

        let embed = new Discord.EmbedBuilder()
        .setColor("#ffaa00")
        .setFooter({ text: `${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` })
        .addFields(
            { name: "Discord Gecikmesi", value: `${discord_ping} ms`, inline: true },
            { name: "Bot Gecikmesi", value: `${bot_ping} ms`, inline: true },
        );
        message.channel.send({embeds : [embed]});

}


exports.conf = {
    aliases: ['gecikme', 'ge', 'pıng'],
    permLevel: 0,
    kategori: "Bot"
};

exports.help = {
    name: "ping",
    description: "Discord ve botun pingini gösterir.",
    usage: "ping"
};