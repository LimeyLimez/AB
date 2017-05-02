exports.run = (client, message, args) => {
    var paramss = message.content.substring(11,message.content.length).split("/");
    var firstword = paramss[0];
    var secondword = paramss[1];
message.guild.createChannel(firstword, secondword)
 .then(channel => message.channel.send(`Created new channel: ${channel}`))
}