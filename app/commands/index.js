const createCommandList = require('./createCommandList')
    , commands = createCommandList()
    , filter = require('./filter')
    , trello = require('./trello');

commands.add(trello);
commands.add((message) => console.log('4'));

module.exports = function (message) {
  commands.run(message);
}
