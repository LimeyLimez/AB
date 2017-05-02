exports.run = (client, message, args) => {
var moment = require('moment')
require('moment-duration-format')
            message.channel.send('Up for: ' + moment.duration(client.uptime, "milliseconds").format("d [Days], h [Hours], m [Minutes], s [Seconds]"));
        }