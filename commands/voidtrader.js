const Warframe = require("warframe.js");

module.exports.run = async (Client, message, args, Discord) => {
    let options = { platform: "pc" };

    const WF = new Warframe(options);
    WF.voidTrader.then(voidTrader => {
        const temb = new Discord.MessageEmbed()
            .setColor(0x6509ed)
            .setTitle(voidTrader.name)
            .setDescription(voidTrader.relay)
            .addField(voidTrader.fromString, voidTrader.untilString)
            .setTimestamp()

        message.channel.send({ embeds: [temb]})
    });
}

module.exports.help = {
    name: "void"
}