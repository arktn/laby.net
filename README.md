# laby.net [![npm](https://img.shields.io/npm/dt/laby.net.svg?maxAge=3600)](https://www.npmjs.com/package/laby.net) [![npm](https://img.shields.io/npm/v/laby.net.svg)](https://www.npmjs.com/package/laby.net) [![install size](https://packagephobia.com/badge?p=laby.net)](https://packagephobia.com/result?p=laby.net)

## Installation
```
npm i -s laby.net
```
### The unofficial JavaScript API wrapper for laby.net.

**Please keep in mind:** This version is not nearly finished and has many bugs, problems etc. Since the API is not intended to be a public API schemas can change at any time making this package or some functions of it useless. I will also not work that actively on this package since I mainly created it for my own private usage.

### User

| Function | Description | Returns |
| -------- | ----------- | ------- |
| `badges` | Get Badges | Array |
| `friends` | Get Friends | Array |
| `role` | Get Role | String |
| `background` | Get Background | String |
| `head` | Get Head | String |
| `skin` | Get Skin | String |

### Server

| Function | Description | Returns |
| -------- | ----------- | ------- |
| `votes` | Get Server-Votes | Number |
| `checkVote` | Get Server-User-Votes | String |

### Search

| Function | Description | Returns |
| -------- | ----------- | ------- |
| `search` | Search Name | Array |

## User-Examples

### The argument can either be a username or the users UUID (dashes required).

**Array example**
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

**String example**
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

## Server-Examples

**Number example**
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

**Date example**
```js
const laby = require('laby.net');

async function test() {
  console.log(await laby.checkVote('gommehd.net', 'Niklas'));
}

test();
```
Returns: 
```js
2021-08-23T20:15:55
```

## Search-Examples

**Name example**
```js
const laby = require('laby.net');

async function test() {
  console.log(await laby.search('Niklas', 'name'));
}

test();
```
Returns: 
```js
[ 'Niklas', 'niklas_', 'Niklas__', 'niklas___', 'niklas____' ]
```

**UUID example**
```js
const laby = require('laby.net');

async function test() {
  console.log(await laby.search('Niklas', 'uuid'));
}

test();
```
Returns: 
```js
[
  'e0276ad9-1cd6-4c8d-b8f7-ff97e75c5982',
  '1418ddff-41b5-46fa-94d6-3b30dfd89158',
  '932f1d36-dc7e-42f5-88f5-0b4238e0486f',
  '262229d3-8b08-4899-931f-a386a0431118',
  '9b4d916c-c2a8-4a6f-ab8b-698d171a6a5a'
]
```

## Still to be fixed

| Bug / Problem | Urgency |
| ------------- | ------- |
| Error handeling | ⚠️ High |
| ~Accepting UUIDs without dashes~ | ✅ Added |
| ~Custom user agent argument~ | ✅ Added |
| ~Adding search endpoint~ | ✅ Added |
| ~[Adding fixed endpoint](https://github.com/LabyMod/og-names/issues/63)~ | ✅ Added |

## Acknowledgements

* [Niklas](https://laby.net/@Niklas) & [Dinnerbone](https://laby.net/@Dinnerbone): User-Data
* [GommeHD.net](https://laby.net/server/gommehd): Server-Data

## LICENSE
MIT © 2022 [schnappi21](https://github.com/schnappi21)
