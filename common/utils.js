const slugify = require('slugify')

// module.exports = {}
module.exports.slugify = function (text) {
  return slugify(text, {
    replacement: '-',
    remove: undefined,
    lower: true,
    strict: true,
    locale: 'vi'
  })
}