exports.run = (client, message, args) => {
      let answ = ["Yes", "No"]

message.channel.send("Hmmm.... :thinking:.... I think I choose " + answ[Math.floor(Math.random() * answ.length)])
    }