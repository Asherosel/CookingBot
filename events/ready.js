const client = require("../bot");
const { Collection, REST, Routes, Events } = require("discord.js")
const fs = require("fs")
const ayarlar = require('../ayarlar.json');
const ActivityType = require("discord.js")

var prefix = ayarlar.prefix;

client.commands = new Collection();
client.aliases = new Collection();
fs.readdir("./komutlar/", (err, files) => {
if (err) console.error(err);
files.forEach(f => {
let props = require(`../komutlar/${f}`);
    

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};


let durumlar = [
  {
      name: 'BETA | cgyardım',
      type: ActivityType.Watching,
  },
/* {
      name: 'cgyardım',
      type: ActivityType.Watching,
  },
   {
      name: 'Keyifli Pişirmeler!',
      type: ActivityType.Watching,
  },
*/
]

client.on("ready", async () => {

  console.log("Cooking Pişirmeye Hazır!")

  let clientId = ayarlar.clientID;
  let guildId = ayarlar.guildID;
  let token = ayarlar.token;

  const rest = new REST().setToken(token);

  (async () => {
      try {
          console.log(`Started refreshing ${commands.length} application (/) commands.`);

          const data = await rest.put(
              Routes.applicationGuildCommands(clientId, guildId),
              { body: slashCommands },
          );

          await rest.put(
            Routes.applicationCommands(clientId),
            { body: slashCommands },
        );
  
          console.log(`Successfully reloaded ${data.length} application (/) commands.`);
      } catch (error) {
          console.error(error);
      }})


  client.commands.set(props.help.name, props);
  props.conf.aliases.forEach(alias => {
  client.aliases.set(alias, props.help.name)})

  client.user.setStatus("idle")


  setInterval(() => {
      let random = Math.floor(Math.random() * durumlar.length)

      client.user.setActivity(durumlar[random])
  }, 20000)
})

});

});
