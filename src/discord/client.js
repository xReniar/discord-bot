const { Client,GatewayIntentBits } = require("discord.js");

const setEventHandler = require("./eventhandler");
const setCommandHandler = require("./commandhandler");

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

setEventHandler(client);
setCommandHandler(client);

module.exports = client;