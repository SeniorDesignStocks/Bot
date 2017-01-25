const githubhook = require('githubhook')
    , github = githubhook({
  host: '0.0.0.0',
  port: 3420,
  path: '/gitback',
  secret: 'c82410e2ef812790e9ad91b7880c761d8f8bcd8b',
  logger: console,
});

github.listen();
github.on('*', (event, type, data) => {
  console.log(data);
});

module.exports = github;
