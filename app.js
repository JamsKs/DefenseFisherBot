const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const fs = require('fs')
const Warframe = require("warframe.js");
const { forEach } = require('lodash');
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ],
    allowedMentions: { parse: ['users', 'roles'], repliedUser: true}
})

Client.commands = new Discord.Collection();

fs.readdirSync('./commands/').forEach(dir => {
    fs.readdir('./commands/', (err,files) => {
        if(err) throw err;

        var jsFiles = files.filter(f => f.split(".").pop() === "js");

        if(jsFiles.length <= 0) {
            console.log("Cant find any commands :/")
            return;
        }

        jsFiles.forEach(file => {
            var fileGet = require(`./commands/${file}`);
            console.log(`File ${file} was loaded!`)

            try {
                Client.commands.set(fileGet.help.name, fileGet);
            } catch (err) {
                return console.log(err);
            }
        })
    })
})
// ready event
Client.on('ready', () => {
    console.log('Ready!')
    Client.user.setPresence({ activities: [{name: "The Ultimate Defense fissures guide!", type: "WATCHING"}]})
})

Client.on('messageCreate', async message => {
    if(message.author.bot || message.channel.type == "DM") return

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0]
    let args = messageArray.slice(1)

    let commands = Client.commands.get(cmd.slice(prefix.length))

    if(commands) {
        if(!message.content.startsWith(prefix)) return;
        commands.run(Client, message, args, Discord)
    }
})

Client.login(token);

