const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!"
const fs = require("fs"); 
const moment = require("moment");  
const ms = require("ms");
const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
var x = client.channels.get("576859129310609420");
if (x) x.join();
});

client.on("ready", () => {
client.user.setStatus('dnd');
//client.user.setGame("System", "https://www.twitch.tv/idk");
  console.log("Rank | Logged in! Server count: ${client.guilds.size}");
  client.user.setActivity("Ranks.",{type: 'PLAYING'});
});


client.on("message", message => {
    const Tr = client.emojis.find(load => load.name === "trn");
    const trs = client.emojis.find(load => load.name === "trn");
    const P = client.emojis.find(load => load.name === "plus");
    if(message.content.startsWith(prefix + "trial")) {
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`\`-\` **You don't have permissions,** ${trs}`);
    if (!message.content.split(" ").slice(1)[0]) return message.channel.send(`${Tr} **Mention any member.**`);

    let target = message.mentions.members.first();
    if (!target) return message.channel.send(`${Tr} **Invalid mention**`);
      
      message.channel.send(`${P} **Give a role for** ${target}`);

    let role = message.guild.roles.find(role => role.name === "- Trial Admin ♪");
    target.addRole(role);
  }
});

client.on("message", message => {
    const Tr = client.emojis.find(load => load.name === "trn");
    const trs = client.emojis.find(load => load.name === "trn");
    const P = client.emojis.find(load => load.name === "plus");
    if(message.content.startsWith(prefix + "exp")) {
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`\`-\` **You don't have permissions,** ${trs}`);
    if (!message.content.split(" ").slice(1)[0]) return message.channel.send(`${Tr} **Mention any member.**`);

    let target = message.mentions.members.first();
    if (!target) return message.channel.send(`${Tr} **Invalid mention**`);
      
      message.channel.send(`${P} **Give a role for** ${target}`);

    let role = message.guild.roles.find(role => role.name === "- Expert.");
    target.addRole(role);
  }
});

client.on("message", message => {
    const Tr = client.emojis.find(load => load.name === "trn");
    const trs = client.emojis.find(load => load.name === "trn");
    const P = client.emojis.find(load => load.name === "plus");
    if(message.content.startsWith(prefix + "not ver")) {
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`\`-\` **You don't have permissions,** ${trs}`);
    if (!message.content.split(" ").slice(1)[0]) return message.channel.send(`${Tr} **Mention any member.**`);

    let target = message.mentions.members.first();
    if (!target) return message.channel.send(`${Tr} **Invalid mention**`);
      
      message.channel.send(`${P} **Give a role for** ${target}`);

    let role = message.guild.roles.find(role => role.name === "- Not Verified.");
    target.addRole(role);
  }
});

client.on("message", message => {
    const Tr = client.emojis.find(load => load.name === "trn");
    const trs = client.emojis.find(load => load.name === "trn");
    const P = client.emojis.find(load => load.name === "plus");
    if(message.content.startsWith(prefix + "active")) {
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`\`-\` **You don't have permissions,** ${trs}`);
    if (!message.content.split(" ").slice(1)[0]) return message.channel.send(`${Tr} **Mention any member.**`);

    let target = message.mentions.members.first();
    if (!target) return message.channel.send(`${Tr} **Invalid mention**`);
      
      message.channel.send(`${P} **Give a role for** ${target}`);

    let role = message.guild.roles.find(role => role.name === "- Professional Active.");
    target.addRole(role);
  }
});

client.on("message", message => {
    const Tr = client.emojis.find(load => load.name === "trn");
    const trs = client.emojis.find(load => load.name === "trn");
    const P = client.emojis.find(load => load.name === "plus");
    if(message.content.startsWith(prefix + "fami")) {
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`\`-\` **You don't have permissions,** ${trs}`);
    if (!message.content.split(" ").slice(1)[0]) return message.channel.send(`${Tr} **Mention any member.**`);

    let target = message.mentions.members.first();
    if (!target) return message.channel.send(`${Tr} **Invalid mention**`);
      
      message.channel.send(`${P} **Give a role for** ${target}`);

    let role = message.guild.roles.find(role => role.name === "- Professional Family.");
    target.addRole(role);
  }
});

client.on("message", message => {
    const Tr = client.emojis.find(load => load.name === "trn");
    const trs = client.emojis.find(load => load.name === "trn");
    const P = client.emojis.find(load => load.name === "plus");
    if(message.content.startsWith(prefix + "deny")) {
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`\`-\` **You don't have permissions,** ${trs}`);
    if (!message.content.split(" ").slice(1)[0]) return message.channel.send(`${Tr} **Mention any member.**`);

    let target = message.mentions.members.first();
    if (!target) return message.channel.send(`${Tr} **Invalid mention**`);
      
      message.channel.send(`${P} **Give a role for** ${target}`);

    let role = message.guild.roles.find(role => role.name === "Clan denied.");
    target.addRole(role);
  }
});

client.on("message", message => {
    const Tr = client.emojis.find(load => load.name === "trn");
    const trs = client.emojis.find(load => load.name === "trn");
    const P = client.emojis.find(load => load.name === "plus");
    if(message.content.startsWith(prefix + "ment")) {
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`\`-\` **You don't have permissions,** ${trs}`);
    if (!message.content.split(" ").slice(1)[0]) return message.channel.send(`${Tr} **Mention any member.**`);

    let target = message.mentions.members.first();
    if (!target) return message.channel.send(`${Tr} **Invalid mention**`);
      
      message.channel.send(`${P} **Give a role for** ${target}`);

    let role = message.guild.roles.find(role => role.name === "Mention.");
    target.addRole(role);
  }
});

client.login(process.env.BOT_TOKEN);
