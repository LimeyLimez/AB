exports.run = (client, message, args) => {
message.guild.pruneMembers(30)
  .then(pruned => message.channel.send(`This will kick: ${pruned} people!`))
}