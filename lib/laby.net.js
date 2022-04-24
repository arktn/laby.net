const fetch = require("node-fetch");

module.exports.badges = async function (args) {
  if (args.length > 16) {
    const request = await fetch(`https://laby.net/api/user/${args}/get-badges`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (https://github.com/fez6)'
      }
    })
    .then(res => res.text());
    let data = JSON.parse( request );
    var response = []
    for (let i = 0;i < data.length ;i++) {
      response.push(data[i].name)
    }
    return response;
  } else {
    const mojang = await fetch(`https://api.mojang.com/users/profiles/minecraft/${args}`)
    const res = await mojang.json()
    const og_uuid = res.id;
    const uuid = `${og_uuid.substring(0, 8)}-${og_uuid.substring(8, 12)}-${og_uuid.substring(12, 16)}-${og_uuid.substring(16, 20)}-${og_uuid.substring(20)}`;
    const request = await fetch(`https://laby.net/api/user/${uuid}/get-badges`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (https://github.com/fez6)'
      }
    })
    .then(res => res.text());
    let data = JSON.parse( request );
    var response = []
    for (let i = 0;i < data.length ;i++) {
      response.push(data[i].name)
    }
    return response;
  }
}

module.exports.friends = async function (args) {
  if (args.length > 16) {
    const request = await fetch(`https://laby.net/api/user/${args}/get-friends`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (https://github.com/fez6)'
      }
    })
    .then(res => res.text());
    let data = JSON.parse( request );
    var response = []
    for (let i = 0;i < data.length ;i++) {
      response.push(data[i].user_name)
    }
    return response;
  } else {
    const mojang = await fetch(`https://api.mojang.com/users/profiles/minecraft/${args}`)
    const res = await mojang.json()
    const og_uuid = res.id;
    const uuid = `${og_uuid.substring(0, 8)}-${og_uuid.substring(8, 12)}-${og_uuid.substring(12, 16)}-${og_uuid.substring(16, 20)}-${og_uuid.substring(20)}`;
    const request = await fetch(`https://laby.net/api/user/${uuid}/get-friends`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (https://github.com/fez6)'
      }
    })
    .then(res => res.text());
    let data = JSON.parse( request );
    var response = []
    for (let i = 0;i < data.length ;i++) {
      response.push(data[i].user_name)
    }
    return response;
  }
}

module.exports.role = async function (args) {
  if (args.length > 16) {
    const request = await fetch(`https://laby.net/api/user/${args}/get-snippet`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (https://github.com/fez6)'
      }
    })
    .then(res => res.text());
    let data = JSON.parse( request );
    return data.role.nice_name;
  } else {
    const mojang = await fetch(`https://api.mojang.com/users/profiles/minecraft/${args}`)
    const res = await mojang.json()
    const og_uuid = res.id;
    const uuid = `${og_uuid.substring(0, 8)}-${og_uuid.substring(8, 12)}-${og_uuid.substring(12, 16)}-${og_uuid.substring(16, 20)}-${og_uuid.substring(20)}`;
    const request = await fetch(`https://laby.net/api/user/${uuid}/get-snippet`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (https://github.com/fez6)'
      }
    })
    .then(res => res.text());
    let data = JSON.parse( request );
    return data.role.nice_name;
  }
}

module.exports.background = async function (args) {
  if (args.length > 16) {
    const request = await fetch(`https://laby.net/api/user/${args}/get-snippet`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (https://github.com/fez6)'
      }
    })
    .then(res => res.text());
    let data = JSON.parse( request );
    return data.settings.background;
  } else {
    const mojang = await fetch(`https://api.mojang.com/users/profiles/minecraft/${args}`)
    const res = await mojang.json()
    const og_uuid = res.id;
    const uuid = `${og_uuid.substring(0, 8)}-${og_uuid.substring(8, 12)}-${og_uuid.substring(12, 16)}-${og_uuid.substring(16, 20)}-${og_uuid.substring(20)}`;
    const request = await fetch(`https://laby.net/api/user/${uuid}/get-snippet`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (https://github.com/fez6)'
      }
    })
    .then(res => res.text());
    let data = JSON.parse( request );
    return data.settings.background;
  }
}

module.exports.votes = async function (args) {
  const request = await fetch(`https://laby.net/api/server/${args}/rates`, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (https://github.com/fez6)'
    }
  })
  .then(res => res.text());
  let data = JSON.parse( request );
  return data.vote_count;
}

module.exports.head = async function (args) {
  if (args.length > 16) {
    return `https://laby.net/texture/profile/head/${args}.png`;
  } else {
    const mojang = await fetch(`https://api.mojang.com/users/profiles/minecraft/${args}`)
    const res = await mojang.json()
    const og_uuid = res.id;
    const uuid = `${og_uuid.substring(0, 8)}-${og_uuid.substring(8, 12)}-${og_uuid.substring(12, 16)}-${og_uuid.substring(16, 20)}-${og_uuid.substring(20)}`;
    return `https://laby.net/texture/profile/head/${uuid}.png`;
  }
}

module.exports.skin = async function (args) {
  if (args.length > 16) {
    return `https://laby.net/texture/profile/skin/${args}.png`;
  } else {
    const mojang = await fetch(`https://api.mojang.com/users/profiles/minecraft/${args}`)
    const res = await mojang.json()
    const og_uuid = res.id;
    const uuid = `${og_uuid.substring(0, 8)}-${og_uuid.substring(8, 12)}-${og_uuid.substring(12, 16)}-${og_uuid.substring(16, 20)}-${og_uuid.substring(20)}`;
    return `https://laby.net/texture/profile/skin/${uuid}.png`;
  }
}