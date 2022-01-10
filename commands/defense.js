const Warframe = require("warframe.js");

module.exports.run = async (Client, message, args, Discord) => {
    let options = { platform: "pc" };
    var check = false;

    const WF = new Warframe(options);
    WF.fissures.then(fissures => {
        for (const element of fissures)
            if (element.type == "Defense") {
                check = true;
                const temb = new Discord.MessageEmbed()
                    .setColor(0x6509ed)
                    .setTitle(element.node)
                    .setDescription(element.type)
                    .addField(element.tierClass, element.countdown)
                    .setTimestamp()

                message.channel.send({ embeds: [temb]})
            }
        if (check == false)
            message.channel.send("There's no defense missions currently")
    });
}

module.exports.help = {
    name: "defense"
}
