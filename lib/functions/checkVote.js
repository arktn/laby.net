const fetch = require("node-fetch");

module.exports.checkVote = async function (server_args, user_args, agnt) {
    if (typeof server_args !== 'string') throw new TypeError('Error: The first parameter has to be a string.');
    if (typeof user_args !== 'string') throw new TypeError('Error: The first parameter has to be a string.');
    var user_agent = agnt;
    if (user_agent === undefined) {
      user_agent = 'https://www.npmjs.com/package/laby.net';
    }
    if (user_args.length > 16) {
      const request = await fetch(`https://laby.net/api/server/${server_args}/rates/${user_args}`, {
        headers: {
          'User-Agent': user_agent
        }
      })
      .then(res => res.text());
      let data = JSON.parse( request );
      if (data.rated === true) {
        return data.rated_at;
      } else {
        return `This user did not vote for: ${server_args}`;
      }
    } else {
      const mojang = await fetch(`https://api.mojang.com/users/profiles/minecraft/${user_args}`)
      const res = await mojang.json()
      const og_uuid = res.id;
      const uuid = `${og_uuid.substring(0, 8)}-${og_uuid.substring(8, 12)}-${og_uuid.substring(12, 16)}-${og_uuid.substring(16, 20)}-${og_uuid.substring(20)}`;
      const request = await fetch(`https://laby.net/api/server/${server_args}/rates/${uuid}`, {
        headers: {
          'User-Agent': user_agent
        }
      })
      .then(res => res.text());
      let data = JSON.parse( request );
      if (data.rated === true) {
        return data.rated_at;
      } else {
        return `This user did not vote for: ${server_args}`;
      }
    }
  }