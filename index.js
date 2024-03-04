/* importing necessary modules */
const express = require("express")
const app = express()

/* conf.json, server routing and discord event handler */
const { discord, server } = require("./conf.json")
const routes = require("./src/controller")
const client = require("./src/discordEventHandler")

// Mount the routes from controller.js
app.use("/", routes);

/* once client is ready start the server */
client.login(discord.token)
    .then((value) => {
        app.listen(server.port,() => {
            console.log(`Listening on port ${server.port}`)
        })
    })