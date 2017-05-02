const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const sql = require('sqlite');
sql.open('./score.sqlite');
let prefix = "A!";
const urban = require('relevant-urban');
 

const config = require("./config.json");

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});


client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});
client.on("message", message =>{
                                         if (message.content.startsWith(prefix)) {
client.channels.get("300801142944956426").sendEmbed({ color: 7867546,
description: message.author.tag + " ID: (" +message.author.id+ ") used: " + message.content + " in " + message.guild.name});
              }
              if (message.content.startsWith(prefix + "largeemoji ")) {
        let search = message.content.replace(prefix+"largeemoji ","");
        let emoji = null;
        client.guilds.find((g) => {
            emoji = g.emojis.find("name", search);
            return emoji !== null;
        });
        try {
            message.channel.sendMessage("",{embed: new Discord.RichEmbed().setThumbnail(emoji.url)});
        } catch(e) {
            message.channel.sendMessage("couldn't find that emoji");
        }
    }
const Cleverbot = require('cleverbot-node');
const clbot = new Cleverbot;
    clbot.configure({botapi: "CCCzvZw_IjvA0ocpaEYg8922Usw"});
    if (message.channel.type == "dm" && message.content.startsWith('Alpha')){
    Cleverbot.prepare(() => {
      clbot.write(message.content, (response) => {
        message.channel.startTyping();
        setTimeout(() => {
          message.channel.sendMessage(response.message).catch(console.error);
          message.channel.stopTyping();
        }, Math.random() * (1 - 3) + 1 * 1000);
      });
    });
  }
      sql.get(`SELECT * FROM scores WHERE userId ='${message.author.id}'`).then(row => {
        if (!row) {
            sql.run('INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)', [message.author.id, 1, 1]);
        } else {
            let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 1));
            if (curLevel > row.level) {
                row.level = curLevel;
                sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);
            }
            sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
        }
        if (message.content === (prefix + "slots")) {
            let answ = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3]
            if (answ[Math.floor(Math.random() * answ.length)] == 1) {
                sql.run(`UPDATE scores SET points = ${row.points + 100} WHERE userId = ${message.author.id}`);
                message.channel.send(`You got your money back at least.. New balance: ${row.points}`)
            } else {
                if (answ[Math.floor(Math.random() * answ.length)] == 2) {
                    sql.run(`UPDATE scores SET points = ${row.points + 500} WHERE userId = ${message.author.id}`);
                    message.channel.send(`Big win! New balance: ${row.points + 500}`)
                } else {
                    if (answ[Math.floor(Math.random() * answ.length)] == 3) {
                        sql.run(`UPDATE scores SET points = ${row.points * row.level} WHERE userId = ${message.author.id}`);
                        message.channel.send(`JACKPOT! New balance: ${row.points *row.level}`)
                    } else {
                        if (answ[Math.floor(Math.random() * answ.length)] == 0) {
                            sql.run(`UPDATE scores SET points = ${row.points - 100} WHERE userId = ${message.author.id}`);
                            message.channel.send(`Sorry m8 you didn't win.... New balance: ${row.points - 100}`)
                        }
                    }
                }
            }
        }


        if (message.content === (shopPrefix + '2')) {
            sql.run(`UPDATE scores SET points = ${row.points - 1000} WHERE userId = ${message.author.id} && WHERE points > 999`);
            setTimeout(() => {
                message.channel.send("You just wasted 1000 credits on something that does absolutely nothing. Smart.")
            }, 1000);
        }


        var whatisaid = message.content.replace(prefix + "punish ", "");
        if (message.content.startsWith(prefix + 'punish ')) {
            if (message.author.id === ('233366720062947330')) {
                sql.run(`UPDATE scores SET points = ${row.points - 9999999999999999999999} WHERE userId = ${whatisaid}`);
                sql.run(`UPDATE scores SET level = ${row.level - 9999999999999999999999} WHERE userId = ${whatisaid}`);
                message.channel.send('Punished: <@' + whatisaid + '>');
            }
        }

        var whatiisaid = message.content.replace(prefix + "reset ", "");
        if (message.content.startsWith(prefix + 'reset ')) {
            if (message.author.id === ('233366720062947330')) {
                sql.run(`UPDATE scores SET points = ${row.points * 0} WHERE userId = ${whatiisaid}`);
                sql.run(`UPDATE scores SET level = ${row.level * 0} WHERE userId = ${whatiisaid}`);
                message.channel.send('Reset: <@' + whatiisaid + '>');
            }
        }

        var whatiiisaid = message.content.replace(prefix + "reward ", "");
        if (message.content.startsWith(prefix + 'reward ')) {
            if (message.author.id === ('233366720062947330')) {
                sql.run(`UPDATE scores SET points = ${row.points + 250} WHERE userId = ${whatiiisaid}`);
                sql.run(`UPDATE scores SET level = ${row.level + 1} WHERE userId = ${whatiiisaid}`);
                message.channel.send('Gave: <@' + whatiiisaid + '>\n250 points!\n1 level!\n10 Common fish!\n10 Uncommon fish!\n1 Rare fish!\n3 Toy Awards!\n2 Shiny Awards!\n1 Awesome Award');
            }
        }
    }).catch (() => {
        console.error;
        sql.run('CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER, common INTEGER, uncommon INTEGER, rare INTEGER)').then(() => {
            sql.run('INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)', [message.author.id, 1, 1]);
        });
    });

    if (message.content === (prefix + 'level') || message.content === (prefix + 'Level')) {
        sql.get(`SELECT * FROM scores WHERE userId ='${message.author.id}'`).then(xrow => {
            if (!xrow)
                return message.channel.send('Your current level is 0... Nub');
            message.channel.send(`${message.author.username}, Your current level is ${xrow.level}`);
        });
    } else if (message.content === (prefix + 'balance') || message.content === (prefix + 'Balance')) {
        sql.get(`SELECT * FROM scores WHERE userId ='${message.author.id}'`).then(xrow => {
            if (!xrow)
                return message.reply("Nub you don't have any money yet!");
            message.channel.send(`${message.author.username}, your current balance is: ${xrow.points} credits, keep up activity to earn more!\n(WARNING: IF THIS GOES NEGATIVE YOUR FISH, BALANCE, AND LEVEL WILL GET RESET!)`);
        });
    }
if (message.content ===  ('Ayy')) {
          setTimeout(() => { message.channel.send(':regional_indicator_l: :regional_indicator_m: :regional_indicator_a: :regional_indicator_o:') }, 1000);
}
       var aftercmd = message.content.replace(prefix+"urban ","")
 if (message.content.startsWith(prefix + "urban ")) {
urban(aftercmd).then(urBan => message.channel.send("Word: " + urBan.word + "\n\nDefinition:" +urBan.definition + "\n\nExample use: "+ urBan.example))
 }
 else if (message.content === prefix + 'urban') {
urban.random().then(urBan => message.channel.send("Word: " + urBan.word + "\n\nDefinition:" +urBan.definition + "\n\nExample use: "+ urBan.example))
 } 
});

client.login("Mjk2NzU4NzY0ODAyMDE1MjQy.C-NCxA.oQEJ085cmco2_xZM_AJiAEj7ZEI")