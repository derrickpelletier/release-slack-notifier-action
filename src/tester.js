const sendMessage = require('./sendMessage');
const convertMarkdown = require('./convertMarkdown');
const complexBody = `
## What’s Changed

- [Some PR title - (#123)](https://github.com/derrickpelletier/node-status/pull/123) @derrickpelletier
- [Foobar title - (#122)](https://github.com/derrickpelletier/node-status/pull/122) @derrickpelletier

`

async function run () {
  try {
    const convertedBody = await convertMarkdown(complexBody)
    sendMessage({
      name: 'v0.5.11 🤝',
      tag: 'v0.5.11',
      repo: 'release-slack-notifier-action',
      body: convertedBody,
      authorName: 'derrickpelletier',
      authorUrl: 'https://github.com/derrickpelletier',
      authorImage: 'https://avatars0.githubusercontent.com/u/833426?s=32',
      webhook: 'https://hooks.slack.com/services/...',
    });
  } catch (error) {
    console.error(error);
  }
}

run()
