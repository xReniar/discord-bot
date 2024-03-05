const { Client, Events, GatewayIntentBits } = require("discord.js")

// initializing client with necessary intents
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ]
});

client.once(Events.ClientReady, (client) => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on(Events.MessageCreate,(message) => {
    console.log(message)
})

module.exports = client;