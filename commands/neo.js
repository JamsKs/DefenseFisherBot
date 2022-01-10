const Warframe = require("warframe.js");

module.exports.run = async (Client, message, args, Discord) => {
    let options = { platform: "pc" };

    const WF = new Warframe(options);
    WF.fissures.then(fissures => {
        for (const element of fissures)
            if (element.tierClass == "Neo") {
                const temb = new Discord.MessageEmbed()
                    .setColor(0x6509ed)
                    .setTitle(element.node)
                    .setDescription(element.type)
                    .addField(element.tierClass, element.countdown)
                    .setTimestamp()

                message.channel.send({ embeds: [temb]})
            }
    });
}

module.exports.help = {
    name: "neo"
}