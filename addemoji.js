exports.run = (client, message, args) => {
            var paramss = message.content.substring(10,message.content.length).split(" ");
    var firstword = paramss[0];
    var secondword = paramss[1];
    var thirdword = paramss[2];
message.guild.createEmoji(firstword, secondword)
 .then(emoji => console.log(`Created new emoji with name ${emoji.name}!`))
 .catch(console.error);
}
