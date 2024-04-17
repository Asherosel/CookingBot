const { Client, GatewayIntentBits, Partials, Routes, Collection, Events, REST } = require("discord.js");
const ayarlar = require("./ayarlar.json");
const { QuickDB } = require("quick.db");
const db = new QuickDB();
const fs = require('node:fs');
const path = require('node:path');
const rest = require('@discordjs/rest')

require('events').EventEmitter.prototype._maxListeners = 100;


const client = new Client({
  intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildPresences,
      GatewayIntentBits.GuildMessageReactions,
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.MessageContent
  ],
  partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction]
});
client.commands = new Collection();
const slashCommands = [];


const commandsPath = path.join(__dirname, 'slashCommands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
    slashCommands.push(command.data.toJSON());

    console.log(`${command.data.name} dosya yüklendi.`)
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}

module.exports = client;

require("./events/message.js")
require("./events/ready.js")

const express = require("express");
const app = express();
const http = require("http");
const { Console } = require("node:console");
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);


client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;


if (interaction.commandName === 'ping') {
  await interaction.reply('Pong!')
	}


	const command = interaction.client.commands.get(interaction.commandName);

});


const clientId = ayarlar.clientID
const guildId = ayarlar.guildID


client.login(process.env.TOKEN || ayarlar.token)
