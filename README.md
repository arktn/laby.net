# laby.net

## Installation
```
npm i -s laby.net
```
### The unofficial JavaScript API wrapper for laby.net.

**Please keep in mind:** This version is not nearly finished and has many bugs, problems etc. Since the API is not intended to be a public API schemas can change at any time making this package or some functionss of it useless. I will also not work that actively on this package since I mainly created it for my own private usage.

### User

| Function | Description | Returns |
| -------- | ----------- | ------- |
| `badges` | Get a list of the users badges | Array |
| `friends` | Get a list of the users friends | Array |
| `role` | Get the users role | String |
| `background` | Get the users profile background | String |
| `head` | Get the users head | String |
| `skin` | Get the users skin | String |

### Server

| Function | Description | Returns |
| -------- | ----------- | ------- |
| `votes` | Get the servers votes | Number |

## User-Examples

### The argument can either be a username or the users UUID (dashes required).

Array example
```js
const laby = require('laby.net');

async function test() {
  console.log(await laby.badges('Niklas'));
}

test();
```
Returns: 
```js
[
  'OG Name',
  'LabyMod Staff',
  'Translator',
  'All LabyMod Cosmetics',
  'Tag Contributor'
]
```

String example
```js
const laby = require('laby.net');

async function test() {
  console.log(await laby.role('Niklas'));
}

test();
```
Returns: 
```js
Administrator
```

Server example
```js
const laby = require('laby.net');

async function test() {
  console.log(await laby.votes('gommehd.net'));
}

test();
```
Returns: 
```js
92
```

## Still to be fixed

| Bug / Problem | Urgency |
| ------------- | ------- |
| Error handeling | ⚠️ High |
| Accepting UUIDs without dashes | ❔ Medium |
| Custom user agent argument | ⚠️ High |
| Adding search endpoint | ❌ Low |
| [Adding fixed endpoint](https://github.com/LabyMod/og-names/issues/63) | ❔ Medium |

## Acknowledgements

* [Niklas](https://laby.net/@Niklas): Test-User
* [GommeHD.net](https://laby.net/server/gommehd): Test-Server

## LICENSE
MIT © 2022 [fez6](https://github.com/fez6)
