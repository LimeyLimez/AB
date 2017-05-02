exports.run = (client, message, args) => {
    const botAdmin = message.author.id == '233366720062947330' || message.author.id == '209765088196821012' || message.author.id == '277608955855896576' || message.author.id == '246766026052730880'
    var changed = message.content.replace("A!sp ", "")
        if (message.author.id == '215509157837537280' || message.author.id == '233366720062947330' || message.author.id == '209765088196821012' || message.author.id == '277608955855896576' || message.author.id == '246766026052730880' || message.author.id == '271443182066204673') {
            client.user.setGame("A!help | " + changed)
            message.channel.send('Changed playing to: `' + changed + '`')
            setTimeout(() => {
                client.user.setGame("A!help | in " + client.guilds.size + " servers!")
            }, 300000);
        } else {
            message.channel.send('This is above your pay grade. (Patron Pros only)')
        }
    }