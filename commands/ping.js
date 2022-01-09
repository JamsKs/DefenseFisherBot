module.exports.run = async (Client, message, args) => {
    message.channel.send("Pong!")
}

module.exports.help = {
    name: "ping"
}
