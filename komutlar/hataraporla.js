const Discord = require("discord.js");

exports.run = async (client, message, args) => {


        hatabos = args[0]
        hata = message.content.slice(6); //split(` `)

        if(!hatabos) {
            message.channel.send(`📙 Lütfen raporlayacağınız hatayı yazınız.`)
            return
        }

//HATAYI RAPORLAYAN
        let embed = new Discord.EmbedBuilder()
        .setTitle("Hata başarıyla raporlandı.")
        .setDescription(`**Raporlanan Hata:**
${hata}`)
        .setColor("#310000")
        .setFooter({ text: `${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });
        message.channel.send({embeds : [embed]});
//HATAYI RAPORLAYAN

//RAPOR KANALI
let owner = await message.guild.fetchOwner()

let embed2 = new Discord.EmbedBuilder()
.setTitle("Bir hata raporlandı.")
.setDescription(`**Raporlayan kullanıcı: <@${message.author.id}>
**Raporun gönderildiği sunucu: \`${message.guild.name}\`
**Sunucunun Sahibi:** ${owner}
**Raporlanan Hata:**
${hata}`)
.setColor("#310000")
.setFooter({ text: `${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });
client.channels.cache.get("1111683012325806152").send({embeds : [embed2]});
//RAPOR KANALI



}


exports.conf = {
    aliases: ['rapor','raporla','hatabildir'],
    permLevel: 0,
    kategori: "Genel"
};

exports.help = {
    name: "hata",
    description: "Botda bulduğunuz herhangi bir hatayı bize bildirebilirsiniz.",
    usage: "hata"
};