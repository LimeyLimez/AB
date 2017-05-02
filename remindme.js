exports.run = (client, message, args) => {
            var paramss = message.content.substring(11,message.content.length).split(" in ");
    var firstword = paramss[0];
    var secondword = paramss[1];
    var thirdword = paramss[2];
    setTimeout(() => { message.author.send(firstword) }, secondword)
}