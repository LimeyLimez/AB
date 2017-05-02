    const search = require('youtube-search');
    let prefix = "A!";
    var opts = {
        maxResults: 1,
        key: 'AIzaSyAC-ASneCbsgi1eoNoCQvEFvbrRQtbl4fw'}
exports.run = (client, message, args) => {
        search(message.content.replace(prefix+"yt ", ""), opts, function(err, results) {
            message.channel.sendMessage(results[0].link)
        });
    }