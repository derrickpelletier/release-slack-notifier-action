const mappedNames = (process.env.HANDLE_MAP || '').split(',').reduce((acc, i) => {
  const [originalName, newName] = i.split('->')
  acc[originalName] = newName
  return acc
}, {})

module.exports = (message) => {
  let processed = message
  // bullets are not possible

  // Titles
  processed = processed.replace(/^[#]{1,3}(.*)/gm, '*_$1_*')

  // Urls
  processed = processed.replace(/\[(.*)\]\((.*)\)/gm, '<$2|$1>')

  // Usernames
  // if we have a name map, use it, otherwise leave github name sans-@
  processed = processed.replace(/@(\S+)/gm, (a, b) => {
    const mapped = mappedNames[b]
    return mappedNames[b] ? `@${mapped}` : b
  })
  
  return processed
}
