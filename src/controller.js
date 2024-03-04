const express = require("express")
const router = express.Router()

router.get("/",(req,res) => {
    res.send("/")
})

router.get("/home",(req,res) => {
    res.send("/home")
})

router.get("/settings",(req,res) => {
    res.send("settings")
})

router.get("/settings/home",(req,res) => {
    res.send("settings/home")
})

module.exports = router