const { Client,GatewayIntentBits } = require("discord.js");

const discordEventHandler = require("./eventhandler");
const discordCommandHandler = require("./commandhandler");

// initializing client with necessary intents
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildIntegrations
    ]
});

discordEventHandler(client);
discordCommandHandler(client);

module.exports = client;