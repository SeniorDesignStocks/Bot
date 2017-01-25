const githubhook = require('githubhook')
    , { GITHUB_API_KEY } = require('../keys')
    , github = githubhook({ secret: GITHUB_API_KEY, host: '0.0.0.0' });

github.listen();
github.on('event', function (event, repo, ref, data) {
  console.log(event);
});


module.exports = github;
