exports.run = (client, message, args) => {
  let guild = message.member.guild;
  let updatRole = (guild.roles.find("name", "Updates"));
    let updateMember = message.author.id
    message.member.removeRole(updateRole.id).then(member => {
        message.channel.send(`Removed the updates role from: ${member.user.username}!`)
    })
}