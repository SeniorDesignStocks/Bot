const githubhook = require('githubhook')
    , { GITHUB_API_KEY } = require('../keys')
    , github = githubhook({ secret: GITHUB_API_KEY, logger: console });

github.listen();
github.on('*', (event, type, data) => {
  console.log(data);
});

module.exports = github;
