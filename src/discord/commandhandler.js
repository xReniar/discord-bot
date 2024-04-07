const { Collection, REST, Routes } = require("discord.js")
const { discord } = require("../../conf.json")
const path = require("node:path")
const fs = require("node:fs")

function importSlashCommands(client){
    const commands = []
    client.commands = new Collection();

    const foldersPath = path.join(__dirname,"..","..","commands")
    const commandFolders = fs.readdirSync(foldersPath)

    for(const folder of commandFolders){
        const commandsPath = path.join(foldersPath, folder);
        const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

        for(const file of commandFiles){
            const filePath = path.join(commandsPath,file);
            const command = require(filePath)
            
            if ('data' in command && 'execute' in command) {
                client.commands.set(command.data.name, command);
                commands.push(command.data.toJSON())
            } else {
                console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
            }
        }
    }
    return commands
}

function registerSlashCommands(commands){
    const rest = new REST().setToken(discord.token);
    (async () => {
        try {
            console.log(`Started refreshing ${commands.length} application (/) commands`)
            const data = await rest.put(
                Routes.applicationGuildCommands(discord.client_id,discord.guild_id),
                { body: commands },
            )
            console.log(`Succesfully reloaded ${data.length} application (/) commands`)
        } catch(error) {
            console.error(error)
        }
    })();
}

function setCommandHandler(client){
    commands = importSlashCommands(client)
    registerSlashCommands(commands)
}

module.exports = setCommandHandler;