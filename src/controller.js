const express = require("express")
const router = express.Router()

const ROOT = "./views"

router.get("/",(req,res) => {
    res.sendFile("index.html", {root: ROOT})
})

router.get("/home",(req,res) => {
    res.sendFile("home.html", {root: ROOT})
})

router.get("/settings",(req,res) => {
    res.send("settings")
})

router.get("/settings/home",(req,res) => {
    res.send("settings/home")
})

module.exports = router