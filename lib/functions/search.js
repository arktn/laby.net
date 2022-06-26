const fetch = require("node-fetch");

module.exports.search = async function (args, type, agnt) {
    if (typeof args !== 'string') throw new TypeError('Error: The first parameter has to be a string.');
    if (typeof type !== 'string') throw new TypeError('Error: The second parameter has to be a string.');
    if (type === '') {
        var user_agent = agnt;
        if (user_agent === undefined) {
            user_agent = 'https://www.npmjs.com/package/laby.net';
        }
        if (args.length > 16) {
            return 'Argument has to be a valid username.';
        } else {
            const request = await fetch(`https://laby.net/api/search/names/${args}`, {
                headers: {
                    'User-Agent': user_agent
                }
            })
            .then(res => res.text());
            let data = JSON.parse( request );
            var response = []
            for (let i = 0;i < data.results.length ;i++) {
                response.push(data.results[i].user_name)
            }
            return response;
        }
    }
    if (type.toLowerCase() === 'name') {
        var user_agent = agnt;
        if (user_agent === undefined) {
            user_agent = 'https://www.npmjs.com/package/laby.net';
        }
        if (args.length > 16) {
            return 'Argument has to be a valid username.';
        } else {
            const request = await fetch(`https://laby.net/api/search/names/${args}`, {
                headers: {
                    'User-Agent': user_agent
                }
            })
            .then(res => res.text());
            let data = JSON.parse( request );
            var response = []
            for (let i = 0;i < data.results.length ;i++) {
                response.push(data.results[i].user_name)
            }
            return response;
        }
    }
    if (type.toLowerCase() === 'uuid') {
        var user_agent = agnt;
        if (user_agent === undefined) {
            user_agent = 'https://www.npmjs.com/package/laby.net';
        }
        if (args.length > 16) {
            return 'Argument has to be a valid username.';
        } else {
            const request = await fetch(`https://laby.net/api/search/names/${args}`, {
                headers: {
                    'User-Agent': user_agent
                }
            })
            .then(res => res.text());
            let data = JSON.parse( request );
            var response = []
            for (let i = 0;i < data.results.length ;i++) {
                response.push(data.results[i].uuid)
            }
            return response;
        }
    } else {
        var user_agent = agnt;
        if (user_agent === undefined) {
            user_agent = 'https://www.npmjs.com/package/laby.net';
        }
        if (args.length > 16) {
            return 'Argument has to be a valid username.';
        } else {
            const request = await fetch(`https://laby.net/api/search/names/${args}`, {
                headers: {
                    'User-Agent': user_agent
                }
            })
            .then(res => res.text());
            let data = JSON.parse( request );
            var response = []
            for (let i = 0;i < data.results.length ;i++) {
                response.push(data.results[i].user_name)
            }
            return response;
        }
    }
}
