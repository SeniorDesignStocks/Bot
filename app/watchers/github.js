const githubhook = require('githubhook')
    , { GITHUB_API_KEY } = require('../keys')
    , github = githubhook({ secret: GITHUB_API_KEY, logger: console });

github.listen();
github.on('*', function (event, repo, ref, data) {
  console.log(event);
});


module.exports = github;
