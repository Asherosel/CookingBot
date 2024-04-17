const { EmbedBuilder } = require("discord.js");
var ayarlar = require("../ayarlar.json");
const client = require("../bot");
const prefix = ayarlar.prefix;
const { QuickDB } = require("quick.db");
const db = new QuickDB();

client.on("messageCreate", async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.toLocaleLowerCase().split(" ")[0].slice(prefix.length);
  let params = message.content.split(" ").slice(1);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    cmd.run(client, message, params);
  }

  if(message.author.id) {

    //MALZEME BÖLÜMÜ
    marul = await db.get(`${message.author.id}.malzemeleri.marul`)
    domates = await db.get(`${message.author.id}.malzemeleri.domates`)
    stursu = await db.get(`${message.author.id}.malzemeleri.stursu`)
    teti = await db.get(`${message.author.id}.malzemeleri.teti`)
    et = await db.get(`${message.author.id}.malzemeleri.et`)
    yumurta = await db.get(`${message.author.id}.malzemeleri.yumurta`)
    patates = await db.get(`${message.author.id}.malzemeleri.patates`)
    sucuk = await db.get(`${message.author.id}.malzemeleri.sucuk`)
    sosis = await db.get(`${message.author.id}.malzemeleri.sosis`)
    lavas = await db.get(`${message.author.id}.malzemeleri.lavas`)
    if(marul == undefined) {
      await db.set(`${message.author.id}.malzemeleri.marul`, 0)
     }
     if(domates == undefined) {
      await db.set(`${message.author.id}.malzemeleri.domates`, 0)
     }
     if(stursu == undefined) {
      await db.set(`${message.author.id}.malzemeleri.stursu`, 0)
     }
     if(teti == undefined) {
      await db.set(`${message.author.id}.malzemeleri.teti`, 0)
     }
     if(et == undefined) {
      await db.set(`${message.author.id}.malzemeleri.et`, 0)
     }
     if(yumurta == undefined) {
      await db.set(`${message.author.id}.malzemeleri.yumurta`, 0)
     }
     if(patates == undefined) {
      await db.set(`${message.author.id}.malzemeleri.patates`, 0)
     }
     if(sucuk == undefined) {
      await db.set(`${message.author.id}.malzemeleri.sucuk`, 0)
     }
     if(sosis == undefined) {
      await db.set(`${message.author.id}.malzemeleri.sosis`, 0)
     }
     if(lavas == undefined) {
      await db.set(`${message.author.id}.malzemeleri.lavas`, 0)
     }
     //MALZEME BÖLÜMÜ

     //PARA
    para = await db.get(`${message.author.id}.gcoin`)
    if(para == undefined) {
      await db.set(`${message.author.id}.gcoin`, 0)
     }
    if(para == null) {
      await db.set(`${message.author.id}.gcoin`, 0)
     }



  }

});