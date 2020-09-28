const { checkExists, loadPath, loadFile } = require('../utils')
const constants = require('../utils/constants')

const getIssues = async (client, options = {}) => {
  const { force, organization, repository } = options

  console.log('- GET ISSUES')
  console.log(' 1. Check if the file exists')
  const filePath = loadPath(constants.FILE_PATHS.ISSUES)
  const isFileExists = await checkExists(filePath)

  if (isFileExists && !force) {
    console.log(' <== Getting the JSON from file system')
    return loadFile(filePath)
  }

  console.log(' 2. File not exists, getting data from Github API')
  try {
    console.log(' 3. Getting data from Github API')

    const issues = await client.paginate('GET /repos/{owner}/{repo}/issues', {
      owner: organization,
      repo: repository,
      state: 'open'
    })

    return Promise.resolve(issues)
  } catch (e) {
    console.error(e)

    return Promise.reject(e)
  }
}

module.exports = getIssues
