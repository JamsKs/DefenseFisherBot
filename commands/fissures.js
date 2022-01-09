const Warframe = require("warframe.js");

module.exports.run = async (Client, message, args) => {
    let options = { platform: "pc" };

    const WF = new Warframe(options);
    WF.fissures.then(fissures => {
        for (const element of fissures)
            if (element.type == "Defense") {
                message.channel.send(element.node)
                message.channel.send(element.type)
                message.channel.send(element.countdown)
                message.channel.send(element.tierClass)
            }
    });
}

module.exports.help = {
    name: "fissures"
}