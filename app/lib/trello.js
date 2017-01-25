const trello = require('trello')
    , APIKey = 'ae490c28e26a5394a13773e5e4583836'
    , UserToken = 'ef7a1c3001e6363070a69804a4e3b095';

module.exports = new trello(APIKey, UserToken);
