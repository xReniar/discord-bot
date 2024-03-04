const express = require("express")
const app = express()
const { server } = require("./conf.json")

app.get("/",(req,res) => {
    res.send("Hello World")
})

app.listen(server.port,() => {
    console.log(`Listening on port ${server.port}`)
})