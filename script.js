const express = require("express")
const fs = require("fs")
const app = express()
require("dotenv/config")

module.exports = app

const apikey = process.env.apikey
const apikeySecret = process.env.apikeysecret
const accessToken = process.env.accesstoken
const accessTokenSecret = process.env.accesstokensecret

const Twit = require("twit");

var T = new Twit({
    consumer_key: apikey,
    consumer_secret: apikeySecret,
    access_token: accessToken,
    access_token_secret: accessTokenSecret,
    timeout_ms: 60 * 1000,
    strictSSL: true,
})

app.get("/trends", async (req, res) => {
    await T.get("https://api.twitter.com/1.1/trends/place.json?id=23424768", (error, data, response) => {
        let trends = data[0].trends.slice(0, 10)
        const sorted = `O resultado é: ${trends[Math.floor(Math.random() * trends.length)].name}`

        fs.writeFile("./resultado.txt", sorted, (err) => console.log('Arquivo atualizado!', { err }))
        res.status(200).send()

    })
    res.status(500).send()
})

app.listen(2000);