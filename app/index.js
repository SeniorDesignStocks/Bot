const discord = require('./lib/discord')
    , commands = require('./commands');

discord.on('message', commands);

const github = require('./watchers/github');
