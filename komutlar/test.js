const Discord = require("discord.js");

exports.run = async (client, message, args) => {



        let embed = new Discord.EmbedBuilder()
        .setTitle("Test Embed")
        .setDescription("🍅 Test.")
        .setColor("#310000")
        .setFooter({ text: `${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });
        if(message.author.id == '465237644822052874') return message.channel.send({embeds : [embed]});

}


exports.conf = {
    aliases: ['ed','bosembed','testembed'],
    permLevel: 0,
    kategori: "Sahip"
};

exports.help = {
    name: "embed",
    description: "Boş embed mesajı atar.",
    usage: "embed"
};