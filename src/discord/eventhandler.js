const { Events } = require("discord.js")

/**
 * Handles Discord events.
 * @param {Client} client - The Discord client instance.
 */
function setEventHandler(client) {
    client.once(Events.ClientReady, (client) => {
        console.log(`Logged in as ${client.user.tag}`)
    })

    client.on(Events.InteractionCreate, async (interaction) => {
        // only accepting slash commands
        if(!interaction.isChatInputCommand()) return;

        const command = interaction.client.commands.get(interaction.commandName);
        if(!command) return;

        try {
            await command.execute(interaction);
        } catch(error) {
            console.error(error);
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
            } else {
                await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
        }
    })
    
    client.on(Events.MessageCreate,(message) => {
        console.log(`${message.author.username}: ${message.content}`)
        if(message.content == "say hi"){
            message.reply("Hi!")
        }
    })
}

module.exports = setEventHandler;