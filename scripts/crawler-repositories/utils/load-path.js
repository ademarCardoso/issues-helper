const path = require('path')

const loadPath = file => path.join(process.cwd(), './data', file)

module.exports = loadPath
