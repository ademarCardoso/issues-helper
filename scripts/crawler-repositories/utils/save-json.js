const fs = require('fs-extra')

const saveJson = async (filePath, data) => {
  try {
    const _data = await fs.outputJson(filePath, data)

    return Promise.resolve(_data)
  } catch (err) {
    console.error(err)

    return Promise.reject(err)
  }
}

module.exports = saveJson
