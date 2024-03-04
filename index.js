/* importing necessary modules */
const express = require("express")
const app = express()
const { Events } = require("discord.js")

/* conf.json, server routing and discord event handler */
const { discord, server } = require("./conf.json")
const routes = require("./src/controller")
const client = require("./src/discordEventHandler")

// Mount the routes from controller.js
app.use("/", routes);

/* once client is ready start the server */
client.once(Events.ClientReady, (client) => {
    console.log(`Logged in as ${client.user.tag}`)
    app.listen(server.port,() => {
        console.log(`Listening on port ${server.port}`)
    })
})

client.login(discord.token)