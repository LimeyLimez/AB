exports.run = (client, message, args) => {
        let search = message.content.split(" ")[1];
        let emoji = null;
        client.guilds.find((g) => {
            emoji = g.emojis.find("name", search);
            return emoji !== null;
        });
        try {
            message.channel.sendMessage("",{embed: new Discord.RichEmbed().setThumbnail(emoji.url)});
        } catch(e) {
            message.channel.sendMessage("couldn't find that emoji");
        }
    }