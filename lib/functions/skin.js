const fetch = require("node-fetch");

module.exports.skin = async function (args) {
  if (args.length > 16) {
    if (!args.includes('-')) {
      const new_uuid = `${args.substring(0, 8)}-${args.substring(8, 12)}-${args.substring(12, 16)}-${args.substring(16, 20)}-${args.substring(20)}`;
      return `https://laby.net/texture/profile/skin/${new_uuid}.png`;
    } else {
      return `https://laby.net/texture/profile/skin/${args}.png`;
    }
  } else {
    const mojang = await fetch(`https://api.mojang.com/users/profiles/minecraft/${args}`)
    const res = await mojang.json()
    const og_uuid = res.id;
    const uuid = `${og_uuid.substring(0, 8)}-${og_uuid.substring(8, 12)}-${og_uuid.substring(12, 16)}-${og_uuid.substring(16, 20)}-${og_uuid.substring(20)}`;
    return `https://laby.net/texture/profile/skin/${uuid}.png`;
  }
}