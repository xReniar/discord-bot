require("dotenv").config();
/* importing necessary modules */
const express = require("express")
const app = express()
const client = require("./src/discord/client")
const routes = require("./src/controller")

// Mount the routes from controller.js
app.use("/", routes);

/* once client is ready start the server */
client.login(process.env.DISCORD_TOKEN)
    .then(() => {
        app.listen(process.env.SERVER_PORT,() => {
            console.log(`Listening on port ${process.env.SERVER_PORT}`)
        })
    })