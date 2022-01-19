const Warframe = require("warframe.js");

module.exports.run = async (Client, message, args, Discord) => {
    let options = { platform: "pc" };

    const WF = new Warframe(options);
    WF.cycleCetus.then(cycleCetus => {
        const temb = new Discord.MessageEmbed()
            .setColor(0x6509ed)
            .setTitle(cycleCetus.state)
            .setDescription(cycleCetus.string)
            .setTimestamp()

        message.channel.send({ embeds: [temb]})
    });
}

module.exports.help = {
    name: "cetus"
}
