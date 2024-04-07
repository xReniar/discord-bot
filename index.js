/* importing necessary modules */
const express = require("express")
const app = express()
const client = require("./src/discord/client")

/* conf.json, server routing and discord various handlers */
const { discord, server } = require("./conf.json")
const routes = require("./src/controller")

// Mount the routes from controller.js
app.use("/", routes);

/* once client is ready start the server */
client.login(discord.token)
    .then(() => {
        app.listen(server.port,() => {
            console.log(`Listening on port ${server.port}`)
        })
    })