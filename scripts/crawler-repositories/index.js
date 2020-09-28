const { Octokit } = require("@octokit/rest")

const getRepos = require('./functions/repos')
const getIssues = require('./functions/issues')

const constants = require('./utils/constants')
const { saveJson, loadPath, checkExists } = require('./utils')

const ORGANIZATION = ''
const OAUTH_TOKEN = ''
const FORCE = process.env.FORCE_EXECUTION || false

const checks = () => {
  if (!ORGANIZATION || !OAUTH_TOKEN) {
    console.error('ORGANIZATION and OAUTH_TOKEN are missing')
    return false
  }

  return true
}

const main = async (options = {}) => {
  const { force } = options

  if (!checks()) {
    return
  }

  const octokit = new Octokit({
    auth: OAUTH_TOKEN
  })

  try {
    const filePath = loadPath(constants.FILE_PATHS.ISSUES)
    const isIssuesFileExists = await checkExists(filePath)

    if (isIssuesFileExists && !force) {
      console.warn('Issues file already exists. To re-execute the script, use the force option')
      return
    }

    const repos = await getRepos(octokit, {
      organization: ORGANIZATION,
      force
    })

    let issues = []

    for (const repository of repos) {
      console.log(`Getting issues from ${repository.full_name}`)
      const repoIssues = await getIssues(octokit, {
        organization: ORGANIZATION,
        repository: repository.name,
        force
      })

      issues = [
        ...issues,
        ...repoIssues
      ]
    }

    await saveJson(filePath, issues)

    console.log('Finished getting repos')
  } catch (e) {
    console.error(e)
  }
}

main({
  force: FORCE
})
