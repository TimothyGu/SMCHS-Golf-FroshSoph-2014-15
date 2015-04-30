var fs = require('fs')
  , ejs = require('ejs-tj')

fs.writeFileSync('table.js',
  'module.exports = ' + ejs.compile(
    fs.readFileSync('table.ejs').toString()
  , { client: true }
  ).toString())
