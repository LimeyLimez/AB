exports.run = (client, message, args) => {
            if (message.channel.name === 'nsfw'){
      let answ = ["http://tse1.mm.bing.net/th?id=OIP.58jU8dN5vhUBJ5JsrquysgDIEs&pid=15.1", "http://images.fuskator.com/large/jhB9lU4ow~T/boys+and+girl_brittanys_dress_purple_pussy+exam_teenport_9.jpg", "http://a2.img.mobypicture.com/525e6086ed06d1d5271843a1c44b7c14_view.jpg", "http://www.rateherpussy.com/getimage.php?tag=4e318d9f2c3d1", "http://i18.fastpic.ru/thumb/2011/0318/e4/dbd5e136e8e65af3faeb5c4745e98ae4.jpeg", "https://www.pornhub.com/photo/17332601", "https://www.pornhub.com/photo/72646801"]

message.channel.send(answ[Math.floor(Math.random() * answ.length)])
    } else {
message.channel.send('Not here, go to #nsfw')}}