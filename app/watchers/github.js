const githubhook = require('githubhook')
    , { GITHUB_API_KEY } = require('../keys')
    , github = githubhook({ secret: GITHUB_API_KEY, host: '127.0.0.1' });

github.listen();
github.on('event', function (event, repo, ref, data) {
  console.log(event);
});


module.exports = github;
