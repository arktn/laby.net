module.exports.badges = async function (args, agnt) {
  const badges = require('./functions/badges.js');
  return badges.badges(args, agnt);
}

module.exports.friends = async function (args, agnt) {
  const friends = require('./functions/friends.js');
  return friends.friends(args, agnt);
}

module.exports.role = async function (args, agnt) {
  const role = require('./functions/role.js');
  return role.role(args, agnt);
}

module.exports.background = async function (args, agnt) {
  const background = require('./functions/background.js');
  return background.background(args, agnt);
}

module.exports.votes = async function (args, agnt) {
  const votes = require('./functions/votes.js');
  return votes.votes(args, agnt);
}

module.exports.checkVote = async function (server_args, user_args, agnt) {
  const checkVote = require('./functions/checkVote.js');
  return checkVote.checkVote(server_args, user_args, agnt);
}

module.exports.head = async function (args) {
  const head = require('./functions/head.js');
  return head.head(args);
}

module.exports.skin = async function (args) {
  const skin = require('./functions/skin.js');
  return skin.skin(args);
}
