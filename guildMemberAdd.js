exports.run = (client, member) => {
      let guild = member.guild;
  if (guild.id == 286773892389797888){
  guild.defaultChannel.sendMessage('Welcome to da traaaaaash');
  if (member.user.bot) return;
  } else if (guild.id != 286773892389797888 && guild.id != '110373943822540800') {
  guild.defaultChannel.sendMessage(`Welcome, ${member.user.username} to the server!`);
  let mbrRole = (guild.roles.find("name", "Members"));
  member.addRole(mbrRole.id)}
}