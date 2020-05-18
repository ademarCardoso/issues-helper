import axios from 'axios'
const url = 'https://api.github.com/users/storyblok/repos?per_page=1000'

export const getAllReposFromGitHub = async () => {
  await axios.get(url)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error)
    })
}
