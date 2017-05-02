exports.run = (client, message, args) => {
client.channels.get("300730494906007552").sendMessage(message.author.username + "#" + message.author.discriminator + " ID: (" +message.author.id+ ") has suggested: \n" + message.content.replace("A!suggest ", ""));
              }