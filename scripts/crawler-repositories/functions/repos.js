const { checkExists, loadPath, loadFile, saveJson } = require('../utils')
const constants = require('../utils/constants')

const getRepos = async (client, options = {}) => {
  const { force, organization } = options

  console.log('- GET REPOSITORIES')
  console.log(' 1. Check if the file exists')
  const filePath = loadPath(constants.FILE_PATHS.REPOSITORIES)
  const isFileExists = await checkExists(filePath)

  if (isFileExists && !force) {
    console.log(' <== Getting the JSON from file system')
    return loadFile(filePath)
  }

  console.log(' 2. File not exists, getting data from Github API')
  try {
    console.log(' 3. Getting data from Github API')

    const repositories = await client.paginate('GET /orgs/{org}/repos', {
      org: organization
    })

    console.log(' 4. Saving data')
    await saveJson(filePath, repositories)

    console.log(' 5. Data saved')

    return Promise.resolve(repositories)
  } catch (e) {
    console.error(e)

    return Promise.reject(e)
  }
}

module.exports = getRepos
