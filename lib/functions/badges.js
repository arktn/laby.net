const fetch = require("node-fetch");

module.exports.badges = async function (args, agnt) {
    if (typeof args !== 'string') throw new TypeError('Error: The first parameter has to be a string.');
    var user_agent = agnt;
    if (user_agent === undefined) {
      user_agent = 'https://www.npmjs.com/package/laby.net';
    }
    if (args.length > 16) {
      const request = await fetch(`https://laby.net/api/user/${args}/get-badges`, {
        headers: {
          'User-Agent': user_agent
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
          'User-Agent': user_agent
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