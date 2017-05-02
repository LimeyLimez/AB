exports.run = (client, message, args) => {
    let modRole = message.guild.roles.find("name", "Mod");
  let guild = message.member.guild;
    var paramss = message.content.substring(9,message.content.length).split("/");
    var firstword = paramss[0];
    var secondword = paramss[1];
    var thirdword = paramss[2];
  let wantedRole = (guild.roles.find("name", firstword));
    if(!message.member.roles.has(modRole.id)) {
    return message.channel.send('You need the role `Mod` to use this command.');
    }
    let roledMember = message.guild.member(message.author);
    if (!roledMember) {
        return message.channel.send("That user doesn't seem to be around...");
    }
    roledMember.addRole(wantedRole.id).then(member => {
        message.channel.send(`Gave: ${member.user.username} ` + '`' + firstword + '`')
    })
}