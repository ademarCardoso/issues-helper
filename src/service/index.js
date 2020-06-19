import axios from 'axios'
const url = 'https://api.github.com/users/storyblok/repos?per_page=200'

export const getAllReposFromGitHub = async () => {
  return await axios.get(url)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error)
    })
}

export const getAllIssuesFromRepo = async (repo) => {
  let urlToGetIssues = `https://api.github.com/repos/storyblok/${repo}/issues`
  return await axios.get(urlToGetIssues)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error)
    })
}
