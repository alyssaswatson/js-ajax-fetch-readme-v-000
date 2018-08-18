const token = 'bf756d8c42edbaa0d27e4c0c3a13dfb58ca1b1fe'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));