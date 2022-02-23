const getConfig = require('./getConfig');

module.exports = async (message) => {
  const config = await getConfig()
  
  let processed = message
  // bullets are not possible

  // Titles
  processed = processed.replace(/^[#]{1,3}(.*)/gm, '*_$1_*')

  // Urls
  processed = processed.replace(/\[(.*)\]\((.*)\)/gm, '<$2|$1>')

  // Usernames
  // if we have a name map, use it, otherwise leave github name sans-@
  processed = processed.replace(/@(\S+)/gm, (a, b) => {
    const mapped = config.mappedNames[b]
    return mapped ? `@${mapped}` : b
  })
  
  return processed
}
