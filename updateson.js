exports.run = (client, message, args) => {
  let guild = message.member.guild;
  let updateRole = (guild.roles.find("name", "Updates"));
    message.member.addRole(updateRole.id).then(member => {
        message.channel.send(`Gave: ${member.user.username} the updates role!`)
    })
}