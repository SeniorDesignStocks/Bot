const trello = require('../../lib/trello')
    , findCommand = require('../../utils/findCommand');

module.exports = (message) => {
  const content = findCommand(message.content, 'trello');

  if (typeof content === 'undefined') {
    return;
  }

  console.log('got it');
  console.log(content);
  return true;
}
