const { Events } = require("discord.js")

/**
 * Handles Discord events.
 * @param {Client} client - The Discord client instance.
 */
function discordEventHandler(client) {
    client.once(Events.ClientReady, (client) => {
        console.log(`Logged in as ${client.user.tag}`)
    })
    
    client.on(Events.MessageCreate,(message) => {
        //console.log(`${message.author.username}: ${message.content}`)
    })
}

module.exports = discordEventHandler