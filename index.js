/* importing necessary modules */
const express = require("express")
const app = express()
const { Client, GatewayIntentBits } = require("discord.js")

/* conf.json, server routing and discord various handlers */
const { discord, server } = require("./conf.json")
const routes = require("./src/controller")
const discordEventHandler = require("./src/discord/eventhandler")
const discordCommandHandler = require("./src/discord/commandhandler")

// Mount the routes from controller.js
app.use("/", routes);

// initializing client with necessary intents
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildIntegrations
    ]
})

// discord client setup
discordEventHandler(client)
discordCommandHandler(client)

/* once client is ready start the server */
client.login(discord.token)
    .then(() => {
        app.listen(server.port,() => {
            console.log(`Listening on port ${server.port}`)
        })
    })