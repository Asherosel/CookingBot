const Discord = require("discord.js");
const { QuickDB } = require("quick.db");
const db = new QuickDB();

exports.run = async (client, message, args) => {

    if(message.author.id !== '465237644822052874') return message.channel.send(`🔒 Bu komut yalnızca Asherosel tarafından kullanılabilir.`).then(msg => setTimeout(() => msg.delete(), 3000));


    if(!args[0]) { 
        message.channel.send(`🔒 Yapılacak eylemi girmelisin.`);
        return
    }

    //PARAVER KOMUTU
    if(args[0] === "paraver" || args[0] === "pv" || args[0] === "gcver" || args[0] === "gcoinver") {
    verilenkullanıcı = args[1]
    verilengcoin = args[2]
    if(!verilenkullanıcı) {
        message.channel.send(`🔒 GCoin verilecek kullanıcının ID bilgisini girmelisin.`).then(msg => setTimeout(() => msg.delete(), 5000));
        return
    }
    if(verilenkullanıcı.length < 17 || verilenkullanıcı.length > 19) {
        message.channel.send(`🔒 GCoin verilecek kullanıcının ID bilgisini doğru girmelisin.`).then(msg => setTimeout(() => msg.delete(), 5000));
        return
    }
    if(!verilengcoin) {
        message.channel.send(`🔒 Verilecek GCoin miktarını girmelisin.`).then(msg => setTimeout(() => msg.delete(), 5000));
        return
    }
    let gcoinver = new Discord.EmbedBuilder()
    .setTitle(`GCoin`)
    .setColor('#ffaa00')
    .setDescription(`<@${verilenkullanıcı}> kullanıcısına ${verilengcoin} GCoin başarıyla verildi.`)
    .setFooter({ text: `${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });
    message.channel.send({embeds : [gcoinver]});
    await db.add(`${verilenkullanıcı}.gcoin`, verilengcoin)
    return
    }
    //PARAVER KOMUTU

    //PARAAL KOMUTU
    if(args[0] === "paraal" || args[0] === "pa" || args[0] === "gcal" || args[0] === "gcoinal") {
    verilenkullanıcı = args[1]
    verilengcoin = args[2]
    if(!verilenkullanıcı) {
        message.channel.send(`🔒 GCoin alınacak kullanıcının ID bilgisini girmelisin.`).then(msg => setTimeout(() => msg.delete(), 5000));
        return
    }
    if(verilenkullanıcı.length < 17 || verilenkullanıcı.length > 19) {
            message.channel.send(`🔒 GCoin alınacak kullanıcının ID bilgisini doğru girmelisin.`).then(msg => setTimeout(() => msg.delete(), 5000));
            return
    }
    if(!verilengcoin) {
        message.channel.send(`🔒 Alınacak GCoin miktarını girmelisin.`).then(msg => setTimeout(() => msg.delete(), 5000));
        return
    }
    let gcoinver = new Discord.EmbedBuilder()
    .setTitle(`GCoin`)
    .setColor('#ffaa00')
    .setDescription(`<@${verilenkullanıcı}> kullanıcısından ${verilengcoin} GCoin başarıyla alındı.`)
    .setFooter({ text: `${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });
    message.channel.send({embeds : [gcoinver]});
    const gcoinmiktari = await db.get(`${message.author.id}.gcoin`)
    const yenipara = gcoinmiktari - verilengcoin
    await db.set(`${message.author.id}.gcoin`, yenipara)
    return
    }
    //PARAAL KOMUTU



}


exports.conf = {
    aliases: ['ashe'],
    permLevel: 0,
    kategori: "Sahip"
};

exports.help = {
    name: "asherosel",
    description: "Asherosel.",
    usage: "asherosel"
};