const LinksSocialMedia = {
  github: 'wesolive',
  youtube: 'channel/UC9aJYWUnHRn2bnkaJFvNSrA',
  facebook: 'profile.php?id=100000844667774',
  instagram: 'wesley_ngi',
  twitter: 'maykbrito'
}
function changeSocialMediaLink() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `http://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLink()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      descriptionUser.textContent = data.bio
      userLink.href = data.html_url
      userAvatar.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
