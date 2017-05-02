exports.run = (client, message, args) => {
message.guild.pruneMembers(30, true)
  .then(pruned => message.channel.send(`There are ${pruned} people that haven't said anything in the past month.`))
}