const Discord = require('discord.js')
    , client = new Discord.Client();

client.on('ready', () => {
  console.log('> Connected to Discord server!\n');
});

client.login('MjMyNTEwODM4NDU4Njc5MzA2.CtP_Wg.VUhn8EZbqRl2aB6SmA3QhF1lH50');

module.exports = client;
