const yaml = require('js-yaml');
const { promises: fs } = require('fs')
const core = require('@actions/core')

const DEFAULT_CONFIG_NAME = 'github-to-slack-usernames.yml'

module.exports = async function (configName) {
  const compiledConfig = {
    mappedNames: {}
  }
  try {
    const path = `.github/${configName || DEFAULT_CONFIG_NAME}`
    const config = yaml.load(await fs.readFile(path, 'utf8'))
    compiledConfig.mappedNames = config.mappings
  } catch (error) {}
  return compiledConfig
}
