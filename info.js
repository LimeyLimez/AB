exports.run = (client, message, args) => {
    let botVersion = "v0.9.6"
          message.channel.sendEmbed({ color: (Math.floor(Math.random() * (10000000 - 1 + 1))) + 1,
          description: "Language: JavaScript\nVersion: " + botVersion + "\nPlanned features:\n**N/A**" })
    }