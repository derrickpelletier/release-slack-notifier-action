const sendMessage = require('./sendMessage');

try {
  sendMessage({
    name: 'v0.5.11 🤝',
    tag: 'v0.5.11',
    repo: 'release-slack-notifier-action',
    body: 'github.context.payload.release.body',
    authorName: 'derrickpelletier',
    authorUrl: 'https://github.com/derrickpelletier',
    authorImage: 'https://avatars0.githubusercontent.com/u/833426?s=32',
    webhook: '',
  });
} catch (error) {
  console.error(error);
}
