const express = require("express")
const app = express()

const { server } = require("./conf.json")
const routes = require("./src/controller")

// Mount the routes from controller.js
app.use("/", routes);

app.listen(server.port,() => {
    console.log(`Listening on port ${server.port}`)
})