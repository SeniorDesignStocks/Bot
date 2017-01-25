const discord = require('./lib/discord')
    , commands = require('./commands');

require('dotenv').config();

discord.on('message', commands);

const github = require('./watchers/github');
