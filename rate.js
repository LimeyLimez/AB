exports.run = (client, message, args) => {
             message.channel.send("I rate " + (message.content.replace("A!rate ", "") + ":\n" + ((Math.floor(Math.random() * (500 - 1 + 1))) + 1) + "." + ((Math.floor(Math.random() * (99 - 0 + 1))) + 0) + "/500"))
             }