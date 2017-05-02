exports.run = (client, guild) => {
          client.user.setGame("in " + client.guilds.size + " servers | A!help")
  client.channels.get('302132211874922497').sendMessage(`Kicked from: ${guild.name}\nOwner: ${guild.owner.user.username} (ID: ${guild.owner.id})`)
}