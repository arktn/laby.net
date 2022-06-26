const fetch = require("node-fetch");

module.exports.votes = async function (args, agnt) {
    if (typeof args !== 'string') throw new TypeError('Error: The first parameter has to be a string.');
    var user_agent = agnt;
    if (user_agent === undefined) {
      user_agent = 'https://www.npmjs.com/package/laby.net';
    }
    const request = await fetch(`https://laby.net/api/server/${args}/rates`, {
      headers: {
        'User-Agent': user_agent
      }
    })
    .then(res => res.text());
    let data = JSON.parse( request );
    return data.vote_count;
  }