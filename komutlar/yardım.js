const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json') 

exports.run = async (client, message, args) => {
    var prefix = ayarlar.prefix;


//GENEL KOMUTU
    if(args[0] === "Genel" || args[0] === "genel" || args[0] === "General" || args[0] === "general") {
              let Genel = new Discord.EmbedBuilder()
              .setTitle(`Genel`)
              .setColor('#ffaa00')
              .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Genel').map(cmd => `🍊 **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
             .setFooter({ text: `${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });
        return message.channel.send({embeds : [Genel]});
         
       
       return;
    }
    //SUNUCU KOMUTU
      if(args[0] === "Sunucu" || args[0] === "sunucu") {
              let Sunucu = new Discord.EmbedBuilder()
              .setTitle(`Sunucu`)
              .setColor('#ffaa00')
              .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Sunucu').map(cmd => `🍊 **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
             .setFooter({ text: `${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });
                   return message.channel.send({embeds : [Sunucu]});
         
      

       return;
    }
//EĞLENCE KOMUTU
      if(args[0] === "Eğlence" || args[0] === "eğlence" || args[0] === "Fun" || args[0] === "fun") {
            let Eğlence = new Discord.EmbedBuilder()
            .setTitle(`Eğlence`)
            .setColor('#ffaa00')
            .setDescription("🍊 **cgeğlence** Eğlence komutları hakkında bilgi verir.")
           .setFooter({ text: `${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });
                 return message.channel.send({embeds : [Eğlence]});
  
      
           return;
  }
  //MODERASYON KOMUTU
  if(args[0] === "Moderasyon" || args[0] === "moderasyon" || args[0] === "moderation" || args[0] === "Moderation") {
   let Moderasyon = new Discord.EmbedBuilder()
   .setTitle(`Moderasyon`)
   .setColor('#ffaa00')
   .setDescription("🍊 **cgmoderasyon** Moderasyon komutları hakkında bilgi verir.")
  .setFooter({ text: `${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });
       return message.channel.send({embeds : [Moderasyon]});
             
       
               return;
  }
     //SAHİP KOMUTU
  if(args[0] === "Sahip" || args[0] === "sahip" ) {
    let Sahip = new Discord.EmbedBuilder()
    .setTitle(`Sahip`)
    .setColor('#ffaa00')
    .setDescription(client.commands.filter(cmd => cmd.conf.kategori === 'Sahip').map(cmd => `🍊 **${prefix}${cmd.help.name}** ${cmd.help.description}`).join("\n "))
   .setFooter({ text: `${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });

         return message.channel.send({embeds : [Sahip]});
              
        
                return;
   }

        //BOT KOMUTU
  if(args[0] === "Bot" || args[0] === "bot" ) {
    let Sahip = new Discord.EmbedBuilder()
    .setTitle(`Bot`)
    .setColor('#ffaa00')
    .setDescription("🍊 **cgbot** Bot hakkında bilgi verir.")
   .setFooter({ text: `${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });

         return message.channel.send({embeds : [Sahip]});
              
        
                return;
   }

//YARDIM KOMUTU
  
  let embed = new Discord.EmbedBuilder()
  .setTitle(`Cooking Yardım`)
  .setColor('#ffaa00')
  .setDescription(`**Örnek:** \`${prefix}eğlence\` \n\n📙 Botu sunucunuza eklediğiniz için teşekkür ederiz, her türlü yardım için \`${prefix}destek\` yazıp sunucumuza gelerek destek alabilirsiniz.
📙 Herhangi bir hata bulduğunuzda \`${prefix}hata (hata içeriği)\` yazarak bizlere bildirirseniz çok mutlu oluruz 🧡`)
	.addFields(
		{ name: `Genel`, value: 'cggenel', inline: true },
		{ name: `Eğlence`, value: 'cgeğlence', inline: true },
    { name: `Moderasyon`, value: 'cgmoderasyon', inline: true },
		{ name: `Sunucu`, value: 'cgsunucu', inline: true },
		{ name: `Sahip`, value: 'cgsahip', inline: true },
		{ name: `Destek`, value: 'cgdestek', inline: true },
	)

  .setFooter({ text: `${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` });

  return message.channel.send({embeds : [embed]});

  
    }
    

  exports.conf = {
    aliases: ['help', 'cmds', 'komutlar','y'],
    permLevel: 0,
    kategori: "Genel"

  };

  exports.help = {
    name: 'yardım',
    description: 'Komutlar hakkında bilgi verir.',
    usage: 'yardım',
  };