const Discord = require("discord.js");

exports.run = async (client, message, args) => {

        if(message.author.id == '465237644822052874') return message.channel.send(`🍅 Test.`);

}


exports.conf = {
    aliases: ['yazı','bostext','testtext','tt'],
    permLevel: 0,
    kategori: "Sahip"
};

exports.help = {
    name: "text",
    description: "Boş mesaj atar.",
    usage: "text"
};