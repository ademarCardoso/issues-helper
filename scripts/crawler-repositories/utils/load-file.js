const fs = require('fs-extra')

const loadFile = async (filePath) => {
  try {
    const fileData = await fs.readJson(filePath)

    return Promise.resolve(fileData)
  } catch (err) {
    console.error(err)

    return Promise.reject(new Error(err))
  }
}

module.exports = loadFile
