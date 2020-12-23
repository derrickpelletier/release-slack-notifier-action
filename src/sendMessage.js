const bent = require('bent');

module.exports = async ({ 
  name,
  tag,
  repo,
  body,
  authorName,
  authorUrl,
  authorImage,
  webhook,
}) => {
  const message = {
    text: `New release: ${repo}: ${name}`,
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: `${repo}: ${name}`,
          emoji: true,
        },
      },
      // {
      //   type: 'section',
      //   text: {
      //     type: 'mrkdwn',
      //     text: `*tag: \`${tag}\`*`,
      //   },
      // },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: body,
        },
      },
      {
        type: 'divider',
      },
      {
        type: 'context',
        elements: [
          {
            type: 'image',
            image_url: authorImage,
            alt_text: authorName,
          },
          {
            type: 'mrkdwn',
            text: `*<${authorUrl}|@${authorName}>*`,
          },
        ],
      },
    ],
  }
  const post = bent(webhook, 'POST', 200);
  await post('', message);
}
