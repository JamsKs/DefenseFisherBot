const Warframe = require("warframe.js");

module.exports.run = async (Client, message, args) => {
    let options = { platform: "pc" };

    const WF = new Warframe(options);
    WF.voidTrader.then(voidTrader => {
        message.channel.send(voidTrader.name)
        message.channel.send(voidTrader.relay)
        message.channel.send(voidTrader.fromString)
        message.channel.send(voidTrader.untilString)
    });
}

module.exports.help = {
    name: "void"
}