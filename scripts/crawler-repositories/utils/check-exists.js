const fs = require('fs-extra')

const checkExists = async (file) => {
  if (!file) {
    return Promise.reject(new Error('The file is missing'))
  }

  const exists = await fs.pathExists(file)

  return exists
}

module.exports = checkExists
