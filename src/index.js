const core = require('@actions/core');
const github = require('@actions/github');
const sendMessage = require('./sendMessage');
const convertMarkdown = require('./convertMarkdown');

try {
  const convertedBody = convertMarkdown(github.context.payload.release.body)
  sendMessage({
    name: github.context.payload.release.name,
    tag: github.context.payload.release.tag_name,
    repo: github.context.payload.repository.name,
    body: convertedBody,
    authorName: github.context.payload.release.author.login,
    authorUrl: github.context.payload.release.author.html_url,
    authorImage: github.context.payload.release.author.avatar_url,
    webhook: process.env.RELEASE_SLACK_WEBHOOK,
  });
} catch (error) {
  console.error(error);
  core.setFailed(error.message);
}
