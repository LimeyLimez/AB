exports.run = (client, guild) => {
          client.user.setGame("in " + client.guilds.size + " servers | A!help")
  client.channels.get('302132211874922497').sendMessage(`New server added!\nName: ${guild.name}\nID: ${guild.id}\nIcon: ${guild.iconURL}\nMade: ${guild.createdAt}\nOwner: ${guild.owner.user.username} (ID: ${guild.ownerID})\nRegion: ${guild.region}\nRoles: ${guild.roles.size}\nVerification Level: ${guild.verificationLevel}\nMembers: ${guild.members.size}`)
}