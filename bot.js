const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!"
const fs = require("fs"); 
const moment = require("moment");  
const ms = require("ms");
const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
var x = client.channels.get("566244121551831070");
if (x) x.join();
});

client.on("ready", () => {
client.user.setStatus('online');
//client.user.setGame("System", "https://www.twitch.tv/idk");
  console.log("The 100. | Logged in! Server count: ${client.guilds.size}");
  client.user.setActivity("System Orders.",{type: 'PLAYING'});
});

//const bID = "572568650439983104";
//client.on("guildCreate", g => {
  //if(!g.id === bID) {
   // g.leave();
 // }});

client.on("message", msg=>{
if(!msg.content.startsWith(`${prefix}tax`)) return;
let tax = msg.content.split(" ")[1]
let Price = msg.content.split(" ")[2];
if(!tax || !Price) return msg.reply(`\`${prefix}tax 15% 100000\``).then(z=>z.delete(3000));
tax = tax.replace(/%/g,"");
let resulting = Math.floor(Price-(Price*(tax/100)));
if(!resulting || resulting < 0 ||  isNaN(resulting)) return msg.reply(`\`${prefix}tax 15% 100000\``).then(z=>z.delete(3000));
msg.reply(`\n**Resulting is** : \`${resulting}.\``)
})

client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('pong').then((msg) => {
var PinG = `${Date.now() - msg.createdTimestamp}`
var ApL = `${Math.round(client.ping)}`
      msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\nDiscord API: ${ApL} ms.\`\`\``);
 })
  }  
 });

  

client.on('message', async message => {
  let args = message.content.slice(3);
  if(message.content.startsWith(prefix + 'bc')) {
    if(!message.guild.members.get(message.author.id).hasPermission('ADMINISTRATOR')) return message.channel.send('Required Administrator Permission')
       message.guild.members.forEach(m => {
      
      m.send(args.replace('[user]', m).replace('[server]', m.guild.name).replace('[sender]', message.author.username))
    })
  }
});


client.on('message', message => {
  var prefix ="!"
        if(message.content.startsWith(prefix + 'namemc')) {
            let args = message.content.split(' ').slice(1).join(' ');
            if (!args) return message.channel.send("- **Please provide a Minecraft username.**");
            var link = (`https://namemc.com/${args}`);
            message.channel.send(link);
        }
    });



client.on('message', message => {
  var prefix = "!"
        if(message.content.startsWith(prefix + 'hypixel')) {
            let args = message.content.split(' ').slice(1).join(' ');
            if (!args) return message.channel.send("- **Please provide a Minecraft username.**");
            var link = (`https://hypixel.net/player/${args}`);
            message.channel.send(link);
        }
    });



client.on('typingStart', (ch, user) => {
    if(user.presence.status === 'offline') {
        
        ch.send(`${user}, **Typing with Your Stats is Offline (:**`)
        .then(msg => {
            msg.delete(10000)
        })
    }
});



//client.on("guildMemberAdd", function(member) {
  //  const wc = member.guild.channels.find("name", "chat")
    //    const embed = new Discord.RichEmbed()
      //  .setColor('RANDOM')
       // .setAuthor(member.user.tag, member.user.avatarURL)
      //  .setFooter("- Welcome to Warriors.")
     //   .setTimestamp()
       // return wc.sendEmbed(embed);
//});




client.on('message', message => {  
    if (message.author.bot) return;
if (message.content.startsWith(prefix + 'clear')) { //Codes
    if(!message.channel.guild) return message.reply('This Command For Servers Only!'); 
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('- **You dont have Permission.**');
        if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send('- **I dont have Permission.**');
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 99) return message.reply("- **Survey number must be less than 100 .**").then(messages => messages.delete(5000))
    if(!messagecount) args = '100';
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`- **The Survey Successfully** **\`${args}\`**.`).then(messages => messages.delete(3000));
  }
  });

//client.on('guildMemberAdd', member => {

   // const channel = member.guild.channels.find('name', 'welcome');
  
  //  const millis = new Date().getTime() - member.user.createdAt.getTime();
 //   const now = new Date();
 //   const createdAt = millis / 1000 / 60 / 60 / 24;




  
 //   const embed = new Discord.RichEmbed()
    
 //   .setColor("#36393e")
 //   .setDescription(`» Join Discord in __${createdAt.toFixed(0)}__ Day.`)
  //  .setAuthor(member.user.tag, member.user.avatarURL);
 //   channel.sendEmbed(embed);

  
//});





const devs = ["380307890235506698", "id number 2"]// ايدي الخاص بحسابك
 
const adminprefix = "!";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'pt')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
    if (message.content === (adminprefix + "Percie")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {// لجعل البوت في حاله الواتشنق
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'ls')) {// لجعل البوت في حاله الاستماع
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else     //Narox
    if (message.content.startsWith(adminprefix + 'setname')) {// لتغير اسم البوت
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : Done `)
  return message.reply("**Name Changed :white_check_mark:**");
  } else
    if (message.content.startsWith(adminprefix + 'setavatar')) {// لتغير صوره البوت
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
        } else    
  if (message.content.startsWith(adminprefix + 'st')) {// لعمل ستريمنق للبوت
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
});

//
//let rebel;
//client.on("ready", async  => {
//    let guild = client.guilds.get("566068076391694336");
//  let users = guild.members.map(member => member.user.id);
//  let i;
//  rebel=0;
//for (i=0 ; i < users.length ; i++) {
// let   check = guild.members.get(users[i]);
//if(!check.voiceChannelID){
   //     continue;
//}else{
//  rebel++;
//}
//}
//guild.channels.find('id', '548191375104147456').setName("Tactics Now "+rebel+".");
//  client.setInterval(() =>{
  //  let d = Date.now()
 // }, 5000);
//});
//client.on('voiceStateUpdate', (oldMember, newMember) => {
  //  let guild = client.guilds.get("548103774116380682");
//let newUserChannel = newMember.voiceChannel
//let oldUserChannel = oldMember.voiceChannel
// if(oldUserChannel === undefined && newUserChannel !== undefined) {
 //  rebel++;
//guild.channels.find('id', '548191375104147456').setName("Tactics Now "+rebel+".");
//} else if(newUserChannel === undefined){
  //rebel--;
//guild.channels.find('id', '548191375104147456').setName("Tactics Now "+rebel+".");
//}
//});
//client.on('message', Codes => {
  
 // if(Codes.content === "!voice") {
    //  Codes.channel.send("- **Tactics Voice Now : \`"+rebel+"\`.**");
//}
//});


client.on('guildMemberAdd', (member) => {
member.addRole(member.guild.roles.find('name', '• Not verified')); /// m غير اسم الربته اذا تبي
});
 
 
client.on('message', message => {                      
    if(!message.channel.guild) return;
       if(message.content.startsWith(prefix + 'verify')) {
        let modlog = client.channels.find('name', 'verify'); /// m غير اسم الروم اذا تبي
       if(!message.channel.guild) return message.channel.send('- **This is Command Only for Servers.**').then(m => m.delete(5000));
       message.channel.sendMessage(`- **Press to activate automatically.**`).then(msg => {
       
       
        msg.react('🔗')
       .then(() => msg.react('🔗'))
     
     
 
       let activeFilter = (reaction, user) => reaction.emoji.name === '🔗' && user.id === message.author.id;
     
       let active = msg.createReactionCollector(activeFilter, { time: 15000 });
     
                                                       
                               active.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "• Verified")); /// الربته التجي للشخص
                                   message.member.removeRole(message.guild.roles.find("name", "• Not verified"));
                                   msg.delete();
                                   message.channel.send(`\`#\` Your account has been verified. ✅`).then(m => m.delete(4000));
     
                                   })
                                   })
                                   }
                                   });




client.on("message", (message) => {
    if(message.content.startsWith(prefix+"c.gmail")) {
        message.channel.send(JSON.stringify({
            email: Math.random().toString(36).slice(4).trim()+"@gmail.com",
            password: Math.random().toString(36).slice(4).trim()
        }))
    }
});


//client.on('message', message => {
         //   let args = message.content.split(' ').slice(1);
        //    if(message.content.split(' ')[0] == `${prefix}coloeeeer`){
        //    const embedd = new Discord.RichEmbed()
        //    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
        //    .setDescription(`**لا يوجد لون بهذا الأسم ** ❌ `)
        //    .setColor(`ff0000`)
           
       //     if(!isNaN(args) && args.length > 0)
           
           
       //     if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);
           
           
       //     var a = message.guild.roles.find("name",`${args}`)
        //     if(!a)return;
     //       const embed = new Discord.RichEmbed()
           
    //        .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   //         .setDescription(`**Done , تم تغير لونك . ✅ **`)
           
       //     .setColor(`${a.hexColor}`)
       //     message.channel.sendEmbed(embed);
       //     if (!args)return;
      //      setInterval(function(){})
       //        let count = 0;
       //        let ecount = 0;
       //     for(let x = 1; x < 201; x++){
           
       //     message.member.removeRole(message.guild.roles.find("name",`${x}`))
           
       //     }
       //      message.member.addRole(message.guild.roles.find("name",`${args}`));
           
           
        //    }
        //    });


client.on('voiceStateUpdate', (oldM, newM) => {
  let rebel1 = oldM.serverMute;
  let rebel2 = newM.serverMute;
  let codes1 = oldM.serverDeaf;
  let codes2 = newM.serverDeaf;
  let ch = oldM.guild.channels.find('name', 'log')
  if(!ch) return;//ReBeL & Codes
    oldM.guild.fetchAuditLogs()
    .then(logs => {
      let user = logs.entries.first().executor.username
    if(rebel1 === false && rebel2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} Mute .`)
       .setFooter(`بوآسطهه : ${user}`)
        .setColor('#36393e')
       ch.send(embed)
    }
    if(rebel1 === true && rebel2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} UnMute . `)
       .setFooter(`بواسطه : ${user}`)
        .setColor('#36393e')
       .setTimestamp()
       ch.send(embed)
    }
    if(codes1 === false && codes2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} Deafen .`)
       .setFooter(`بوآسطه : ${user}`)
        .setColor('#36393e')
       .setTimestamp()
       ch.send(embed)
    }
    if(codes1 === true && codes2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} UnDeafen .`)
       .setFooter(`بوآسطه : ${user}`)
        .setColor('#36393e')
       .setTimestamp()
       ch.send(embed)
    }
  })
});


client.on('message',message =>{
        var command = message.content.toLowerCase().split(" ")[0];
          var args = message.content.toLowerCase().split(" ");
          var userM = message.mentions.users.first()
          if(command == prefix + 'unban') {
              if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('- **You don\'t have Permission**.');
              if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send('- **I dont have Permission**.');
              if(!args[1]) return  message.channel.send('-** Please type the ID of user.**');
              if(args[1].length < 16) return message.reply('-** This ID is not id user.**');
              message.guild.fetchBans().then(bans => {
                  var Found = bans.find(m => m.id === args[1]);
                  if(!Found) return message.channel.send(`-** <@${message.author.id}> This preson not have any ban from this server!**`);
                  message.guild.unban(args[1]);
                  message.channel.send(`:white_check_mark: **Successfully Unbanned <@${args[1]}> From the server!**`);
 
                  let banInfo = new Discord.RichEmbed()
                  .setTitle(' ')
                  .setThumbnail(message.author.avatarURL)
                  .setColor('#36393e')
                  .setDescription(`**\n:airplane: Successfully Unbanned <@${args[1]}> From the server!\n\n**User:** <@${args[1]}> (ID: ${args[1]})\n**By:** <@${message.author.id}> (ID: ${message.author.id})`)
                  .setTimestamp()
                  .setFooter(userM.user.tag, userM.user.avatarURL)
 
                  let incidentchannel = message.guild.channels.find(`name`, "log");
                  if(!incidentchannel) return message.channel.send("- **Can't find incidents channel**.");
                  incidentchannel.send(banEmbed);
                  }
 
              )}
            })


client.on("message", (message) => {
 
   if (message.content.startsWith("!problssssssssem")) {  
        const reason = message.content.split(" ").slice(1).join(" ");  
        if (!message.guild.roles.exists("name", "- Staff.")) return message.channel.send(`لازم تسوي رتبة اسمها \`Support Team\` وتنطي البوت ادمنيتر حتا يقدر يسوي الرومات ويعدل برمشنات`);
        if (message.guild.channels.exists("name", "{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "- Staff.");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });  
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: **The ticket has been Created, [ #${c.name} ].**`);
            const embed = new Discord.RichEmbed()
                .setColor('#36393e')
                .addField(`${message.author.username}!`, `**Please explain the problem in detail.**`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("!close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`- **Are u Sure Close the ticket?\nType: !confirm**.`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === '!confirm', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })  
                   .then((collected) => {
                       message.channel.delete();
                   })  
                   .catch(() => {
                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
});


client.on('message', message => {
 
if (message.content === prefix + "muted") {
//if (!message.guild.member(message.author).roles.has('538051773089447987')) return;
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('- **You don’t havepermissions**');
          message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
 
          }).then(() => {
              message.reply("**:white_check_mark: Channel has been muted !")
          });
}
 if (message.content === prefix + "unmuted") {
 //if (!message.guild.member(message.author).roles.has('538051773089447987')) return;
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('- **You don’t have permissions**');
          message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
 
          }).then(() => {
              message.reply("**:white_check_mark: Channel has been Unmuted !**")
          });
}
 
 
});



//client.on("guildMemberAdd", member => {
 // member.createDM().then(function (channel) {
//  return channel.send(`- **Welcome to Manzes :**

//\`#\` يجب آلتأدب بالأداب العآمة وعدم التطرق للموآضيع السيآسية والدينية
//\`#\` يجب عدم النشر بالخآص او آلمحآولة بأستدرآج الأعضاء الى محاولة النشر 
//\`#\` يجب عليك التفآعل كعضو بالفريق لتجنب الإنذار والطرد من الفريق 
//
// ${member} :four_leaf_clover:.`) 
//}).catch(console.error)
//});




client.on('message', message => {
    var prefix = "!";
    let em = client.emojis.find(e => e.name === "true");
    if(message.content.startsWith(prefix + 'move all')) {
   // if (!message.guild.member(message.author).roles.has('538054323662356502')) return;
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**:x: You Dont Have Perms `MOVE_MEMBERS`**');
       //if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**:x: I Dont Have Perms `MOVE_MEMBERS`**");
    if (message.member.voiceChannel == null) return message.channel.send(`- **You Have To Be In Room Voice**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**:white_check_mark: Success Moved All To Your Channel**`)


     }
       });


client.on('message', msg => {

    if (msg.content == '!join') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join();
     }
    }
}
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// -say
  if (command === "say") {
if (!message.member.hasPermission("ADMINISTRATOR"))  return;
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "emb") {
if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor("RANDOM")
    message.channel.sendEmbed(say);
    message.delete();
  }
  


});



client.on('message' , message => {
      var prefix = "!";
      if(message.author.bot) return;
     
      if(message.content.startsWith(prefix + "rolebc")) {
        if (!message.member.hasPermission("ADMINISTRATOR"))  return;
        let args = message.content.split(" ").slice(2);
     var codes = args.join(' ')
       
        if(!codes) {
          message.channel.send("`!rolebc @role <message>`")
            return;
        }
     
     
              var role = message.mentions.roles.first();
                if(!role) {
                  message.reply("- **There is no rank with this name**.")
                    return;
                }
            message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
              n.send(`${codes}`)
            })
            message.channel.send(`- **Done, this is messgae has been send __${message.guild.members.filter(m => m.roles.get(role.id)).size}__ Member.**`)
        }
    });




client.on('message', async message => {
    var command = message.content.toLowerCase().split(" ")[0];
    var prefix = '!';
    
    let em = client.emojis.find(e => e.name === "true");
    var name = '';
    var age = '';
    var fromwhere = '';
    var fa2dh = '';
    var filter = m => m.author.id === message.author.id;
    var subChannel = message.guild.channels.find(c => c.name === '・names');
  
  
    if(command == prefix + 'submit') {
        if(message.author.bot) return;
        if(message.channel.type === 'dm') return;
 
        var modRole = message.guild.roles.find(r => r.name === 'Registered!');
       
        if(message.guild.member(message.author).roles.has(modRole.id)) return message.channel.send('- **You\'r Already Submited!**');
        if(!subChannel) return message.channel.send('Must Create A Channel :: ・names');
       
        message.channel.send(':timer: | **Send, Original name**').then(msgS => {
            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                name = collected.first().content;
                collected.first().delete();
                msgS.edit(':timer: | **Write, Your age**').then(msgS => {
                    message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                        age = collected.first().content;
                        collected.first().delete();
                        msgS.edit(':timer: | **Write, The name of your country**').then(msgS => {
                            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                                fromwhere = collected.first().content;
                                collected.first().delete();
                                msgS.edit(':timer: | **Write, Your name of the game**').then(msgS => {
                                    message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                                        fa2dh = collected.first().content;
                                        collected.first().delete();
                                        let em = client.emojis.find(e => e.name === "true");
                                        let embedS = new Discord.RichEmbed()
                                        .setDescription('**\n Would you like to send this information to the administration?**')
                                        .setColor('#36393e')
                                        .addField('- The Name :', name, true)
                                        .addField('- The Age :', age, true)
                                        .addField('- The Country :', fromwhere, true)
                                        .addField('- The Name of the Game :', fa2dh, true)
                                        .setTimestamp()
                                        .setFooter(message.guild.name, message.guild.iconURL)
                                       
                                        msgS.delete();
                                        message.channel.send(embedS).then(msgS => {
                                            msgS.react('✅').then(() => msgS.react('❎'))
                                           
                                            let yesSure = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                                            let no = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                                           
                                            let yesSend = msgS.createReactionCollector(yesSure);
                                            let dontSend = msgS.createReactionCollector(no);
                                           
                                            yesSend.on('collect', r => {
                                                msgS.delete();
                                                message.channel.send('- **The request was sent to the administration\n\nPlease open your private messages to notify you of the result**.').then(msg => msg.delete(5000));
                                               
                                                let subMsg = new Discord.RichEmbed()
                                                .setColor('#36393e')
                                                .setThumbnail(message.author.avatarURL)
                                                .addField('`»` **The Name :**', name, true)
                                                .addField('`»` **The Age :**', age, true)
                                                .addField('`»` **The Country :**', fromwhere, true)
                                                .addField('`»` **The Name in Game :**', fa2dh, true)
                                                .addField('- Account :', message.author, true)
                                                .addField('- The ID :', message.author.id)
                                               
                                                subChannel.send(subMsg).then(msgS => {
                                                    msgS.react('✅').then(() => msgS.react('❎'))
                                                   
                                                    let accept = (reaction, user) => reaction.emoji.name === '✅'  && ["380307890235506698", "id", "id", "id"].includes(user.id);
                                                    let noAccept = (reaction, user) => reaction.emoji.name === '❎' && ["380307890235506698", "id", "id", "id"].includes(user.id);
                                                   
                                                    let acceptRe = msgS.createReactionCollector(accept);
                                                    let noAcceptRe = msgS.createReactionCollector(noAccept);
                                                   
                                                    acceptRe.on('collect', r => {
                                                        msgS.delete();
                                                        message.author.send(`Hello,

We have been considering submitting you to login
For the team and we __accepted you__ officially ..

**We wish you the best times and thank you**.`);
                                                        message.guild.member(message.author).addRole(modRole.id);
                                                        message.guild.channels.find(r => r.name === '・names').send(`<@${message.author.id}> :leaves: \n\n**This user has been accepted by admin**.`);
                                                    }).catch();
                                                    noAcceptRe.on('collect', r => {
                                                        msgS.delete();
                                                        message.author.send(`Hello,

Your request has been submitted to the team
But we apologize for __not accepting you__ ..

**For further details, please contact the Department.**`);
                                                        message.guild.channels.find(r => r.name === '・names').send(`<@${message.author.id}> :maple_leaf: \n\n**This member has been rejected by the administration
**.`);
                                                    }).catch();
                                                })
                                            });
                                            dontSend.on('collect', r => {
                                                msgS.delete();
                                                message.channel.send('**Your order has been canceled**.');
                                            });
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }
});

  client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  
  let em = client.emojis.find(e => e.name === "true");
  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
                // if (!message.guild.member(message.author).roles.has('⁎ Ban Access.')) return;
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.channel.send("**Mention any Members.**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**I Can't ..**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

}
});



client.on('message', message => {
const prefix = "!";
  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  let em = client.emojis.find(e => e.name === "true");
  if (command == "kick") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You don't have Permission").then(msg => msg.delete(5000));
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I don't have Permission");
  //  if (!message.guild.member(message.author).roles.has('538051772342599690')) return;
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.channel.send("**Mention Any Members.**");
  if(!reason) return message.channel.send("**Supply a Reason.**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**I Can't ..**");

  message.guild.member(user).kick(7, user);

 message.channel.send(`**:white_check_mark: ${user.tag} kicked from the server ! :airplane: **  `)

}
});

//client.on('message', message => {
//    if (message.content.startsWith("!avatar")) {
    //if (!message.guild.member(message.author).roles.has('⁎ Avatar.')) return;
 //       var mentionned = message.mentions.users.first();
//    var x5bzm;
//      if(mentionned){
 //         var x5bzm = mentionned;
 //     } else {
  //        var x5bzm = message.author;
          
 //     }
  //      const embed = new Discord.RichEmbed()
 //       .setColor("#36393e")
 //       .setImage(`${x5bzm.avatarURL}`)
//      message.channel.sendEmbed(embed);
//    }
//});


client.on("message", message => {
if(message.content.startsWith(prefix + "avatar")){
if(message.author.bot || message.channel.type == "dm") return;
var args = message.content.split(" ")[1];
var avt = args || message.author.id;
client.fetchUser(avt)
.then((user) => {
avt = user
let avtEmbed = new Discord.RichEmbed()
.setColor("#36393e")
.setAuthor(`${avt.username}'s Avatar`, message.author.avatarURL)
.setImage(avt.avatarURL)
.setFooter(`Ministers.`, message.client.user.avatarURL);
message.channel.send(avtEmbed);
})
.catch(() => message.channel.send(`Error`));
} 
});



client.on('message', async message =>{
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('').then(m => m.delete(5000));
let em = client.emojis.find(e => e.name === "true");
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I don't have permission** #1").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
   //   if (!message.guild.member(message.author).roles.has('538054323460898847')) return;
     if(!message.member.hasPermission('MUTE_MEMBERS')) return message.channel.send(':x: **You don\'t have permission.**');
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.channel.send("- **Mention Any Member.**") .then(m => m.delete(5000));
    let muterole = message.guild.roles.find(`name`, "Muted.");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted.",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
            SPEAK : false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.channel.send(":x: **Supply Time.**").then(m => m.delete(5000));
 
    await(tomute.addRole(muterole.id));
message.channel.send(`**<@${tomute.id}> has been muted ! :zipper_mouth:**`); //${ms(ms(mutetime))}
setTimeout(function(){
      tomute.removeRole(muterole.id);
    //  message.channel.send(`<@${tomute.id}> **Unmuted Timeout!**.`);
    }, ms(mutetime));
 
 
 
  }
  
  let esm = client.emojis.find(e => e.name === "true");
if(command === `unmute`) {
 // if (!message.guild.member(message.author).roles.has('538054323460898847')) return;
  if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**You don't have permission.").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I don't have permission**").then(msg => msg.delete(6000))
 
  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage(":x: **Mention Any Members.**").then(m => m.delete(5000));
 
  let role = message.guild.roles.find (r => r.name === "Muted.");
 
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("** Already UnMuted!**").then(m => m.delete(5000));
 
  await toMute.removeRole(role)
  message.channel.sendMessage(":white_check_mark: **Member has been unmute !**").then(m => m.delete(5000));
 
  return;
 
  }
 
});



//client.on('message', msg => {
  //  if(!msg.guild) return;
  //  if(msg.channel.id === 'id room ale e74f') {
 //   msg.delete().then
   //     var channel = msg.guild.channels.get("id room ale ejy feh.")
  //      channel.send(msg.member + `\n\n` +msg.content)
  //  }
//});

client.on("message", function(message) {
  if (message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
 
  if (command === "deleses") {
    message.channel.send("**قم بأختيار الروم المراد حذفه**")
      .then(() => {
        message.channel.awaitMessages(res => res.author.id == message.author.id , {
        max: 1,
        time: 30000,
        errors: ['time']
      })
        .then((collected) => {
          let mentionMessage = collected.first();
          let channel = mentionMessage.mentions.channels.first();
          mentionMessage.channel.send("**Select a time format/nwhere:**/n:one:  = second/n:two:  = minute/n:three:  = hour")
            .then(function(botMessage) {
              console.log(botMessage)
              botMessage.react("1⃣")
                .then(() => botMessage.react("2⃣") )
                .then(() => botMessage.react("3⃣") )
                .then(() => {
                  let filter = (reaction, user) => user.id === message.author.id
                  botMessage.awaitReactions(filter, {
                    max: 1,
                    time: 30000,
                    errors: ['time']
                  })
                    .then(collected => {
                      var reaction = collected.first();              
                      if (reaction._emoji.name == "1⃣") {
                        message.channel.send("**أكتب عدد الثواني**")
                          .then(() => {
                            message.channel.awaitMessages(res => res.author.id == message.author.id , {
                              max: 1,
                              time: 30000,
                              errors: ['time']
                            })
                              .then((collected1) => {
                                let content = collected1.first().content;
                                message.channel.send("**سوف يتم حذف الروم بعد إنتهاء الوقت**")
                                setTimeout(function() {
                                  channel.delete()
                                  message.channel.send(channel.name + "**تم حذف روم**")
                                }, (1000*parseInt(content)))
                              }).catch(console.error)
                            }).catch(console.error)
                        } else if (reaction._emoji.name == "2⃣") {
                          message.channel.send("**اكتب عدد الدقائق**")
                            .then(() => {
                              message.channel.awaitMessages(res => res.author.id == message.author.id , {
                                max: 1,
                                time: 30000,
                                errors: ['time']
                            })
                              .then((collected2) => {
                                let content = collected2.first().content;
                                message.channel.send("** سوف يتم حذف الروم بعد انتهاء الوقت**")
                                setTimeout(function() {
                                  channel.delete()
                                  message.channel.send(channel.name + " **تم حذف روم**")
                                }, (60000*parseInt(content)))
                              }).catch(console.error)
                          }).catch(console.error)
                        } else if(reaction._emoji.name == "3⃣") {
                          message.channel.send("**اكتب عدد الساعات**")
                            .then(() => {
                              message.channel.awaitMessages(res => res.author.id == message.author.id , {
                                max: 1,
                                time: 30000,
                                errors: ['time']
                              })
                                .then((collected3) => {
                                  let content = collected3.first().content;
                                  message.channel.send("** سوف يتم حذف الروم بعد انتهاء الوقت**")
                                  setTimeout(function() {
                                    channel.delete()
                                    message.channel.send(channel.name + " **تم حذف روم**")
                                  }, (3600000*parseInt(content)))
                                }).catch(console.error)
                            }).catch(console.error)
                        }
                      }).catch(console.error);
                  }).catch(console.error)
              }).catch(console.error);
          }).catch(console.error);
      });
  }
});




client.on("message",async msg => {
    var prefix = '!';
    if(msg.content.startsWith(prefix  + "submitssss")){
        var channel = msg.guild.channels.find("name", "submissions");
        if(!channel) return msg.reply("- **i find Channel `submissions`.**`")
    let em = client.emojis.find(e => e.name === "bot");
    let fltr = m => m.author.id === msg.author.id
    let name = '';
   await msg.channel.send('- :orange_book:**, Type Your Name?**.').then(e => {
msg.channel.awaitMessages(fltr, {
    time: 600000,
    max: 1
})
.then(co => {
    name = co.first().content
    co.first().delete()
    let age = '';
    e.edit(`- :green_book:**, Type Your Age?**`).then(e => {
     msg.channel.awaitMessages(fltr, {
         time: 600000,
         max: 1
     })  
     .then(co => {
     age = co.first().content
     co.first().delete();
     let from = '';
     e.edit(`- :closed_book:**, Type Name Of The Game?**`).then(e => {
     msg.channel.awaitMessages(fltr, {
         time: 600000,
         max: 1
     })
     .then(co => {
      from = co.first().content
      co.first().delete();
      e.edit("- **Are You Sure On Your Submit?**").then(o => {
          o.react("❌")
          .then(() => o.react('✅'))
            .then(() =>o.react('❌'))
            let react1 = (reacton, user) => reacton.emoji.name === '✅' && user.id === msg.author.id
            let react2 = (reacton, user) => reacton.emoji.name === '❌' && user.id === msg.author.id
            let cr1 = o.createReactionCollector(react1, { time: 12000 });
            let cr2 = o.createReactionCollector(react2, { time: 12000 });
            cr2.on("collect", r => {
                msg.reply("- **Done Your Submite Has Been Cancelled**").then(k => {
                    o.delete(2222);
                    k.delete(2222);
                 
                })
            })
            cr1.on("collect", r => {
                msg.reply("- **Done Your Submite Has Been Send**").then(b => {
                    o.delete(2222);
                    b.delete(2222);
                   let emb = new Discord.RichEmbed()
                   
                   .setThumbnail(msg.author.avatarURL)
                   .addField('» `الأسم`', name, true)
                   .addField('» `العمر`', age, true)
                   .addField('» `أسم المستخدم`', from, true)
                   //.setFooter('Account :', msg.author)
                   .setColor('#36393e')
                  // .setTimestamp()
                 //  .setFooter(msg.guild.name, msg.guild.iconURL)
                   .setFooter(msg.author)
                   channel.send(emb);
                })
               
            })
      })
     })
     })
     })
    })
})
   })
    }
});

 //client.on('message',async message => {
  //let mention = message.mentions.members.first();
  //let acRoom = client.channels.get('566276311652368414');
 // let em = client.emojis.find(e => e.name === "false");
 // if(message.content.startsWith(prefix + "unaccssss")) {
//  if(message.guild.id !== '566068076391694336') return;
//  if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
//  if(!mention) return message.reply("منشن آسم المراد رفضه.");
//  let embedreject = new Discord.RichEmbed()
//  .setColor('#36393e')
 // .setAuthor(user.username,user.avatarURL)
 // .addField(`** **`,`[ ${em} ] \`تم رفض العضو.\``, true)
//  .setThumbnail(message.author.avatarURL)
//  acRoom.sendEmbed(embedreject)
//  }
//});
 
 
//client.on('message',async message => {
//  let mention = message.mentions.members.first();
//  let role = message.content.split(" ").slice(2).join(" ");
//  let mySupport = message.guild.roles.find('name',role);
//  let acRoom = client.channels.get('512960783353643018');
//  let em = client.emojis.find(e => e.name === "true");
//  if(message.content.startsWith(prefix + "مsssقبول")) {
//    if(message.guild.id !== '488259622730203137') return;
 //   if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
  //  if(!mention) return message.reply('منشن آسم المراد قبوله');
  //  if(!role) return message.reply('ادخل اسم رتبة');
  //  if(!mySupport) return message.reply('هذه الرتبة غير موجودة');
//if(mention.roles.has(mySupport)) return message.reply('هذا الشخص معه الرتبة مسبقا');

   // mention.addRole(mySupport).then(() => {
     // acRoom.send(`**»** ${mention}\n**»** ${mySupport}\n\n**»** ${em}`);
  //  });
//  }
//});

client.on('message', message => {
    if (message.content.startsWith(prefix + 'refusal')) {
      let rank = message.guild.member(message.author).roles.find(j => j.name === '- Comman.');
      if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('- **You dont have Permission.**').then(m => m.delete(5000));
        if (message.author.bot) return;
        if (!message.guild) return;  
        if (!rank) return message.channel.send('- **You don\'t have Permissions**.').then(m => m.delete(5000));
        let em = client.emojis.find(e => e.name === "false");
        let Room = message.guild.channels.find(`name`, 'results');
        let user = message.mentions.users.first();
        let embedreject = new Discord.RichEmbed()
        .setColor('#36393e')
        .setAuthor(user.username,user.avatarURL)
        .addField(`** **`,`[ ${em} ] \`You have been rejected.\``, true)
        .setThumbnail(message.author.avatarURL)
        Room.sendEmbed(embedreject);
    }
});


client.on('message', message => {
    if (message.content.startsWith(prefix + 'accept')) {
     let rank = message.guild.member(message.author).roles.find(j => j.name === '- Comman.');
      if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('- **You dont have Permission.**').then(m => m.delete(5000));
        if (message.author.bot) return;
        if (!message.guild) return;  
        if (!rank) return message.channel.send('- **You don\'t have Permissions**.').then(m => m.delete(5000));
        let em = client.emojis.find(e => e.name === "true");
        let Room = message.guild.channels.find(`name`, 'results');
        let user = message.mentions.users.first();
        let embedreject = new Discord.RichEmbed()
        .setColor('#36393e')
        .setAuthor(user.username,user.avatarURL)
        .addField(`** **`,`[ ${em} ] \`You have been successfully accepted.\``, true)
        .setThumbnail(message.author.avatarURL)
        Room.sendEmbed(embedreject);
    }
});


client.on('message' , async (message) => {
    if (message.content.startsWith(prefix + 'bot')) {
     const args = message.content.substring(prefix.length).split(' ');
   
    message.delete();
   args.shift() 
   let msg = args.join(' ') 
   if(!msg)return message.reply(`❌ **\`${prefix}bot <message>\`**`);
   message.channel.createWebhook(message.author.username, message.author.avatarURL) 
       .then(wb => {
           const user = new Discord.WebhookClient(wb.id, wb.token) 
           user.send(msg.replace('@everyone', `❌ **لا يمكن القيام بمنشن في هذا البوت الخاص .**`).replace('@here', `**لا يمكن القيام بمنشن في هذا البوت الخاص .**`)).then(m => m.delete(5000));
           user.delete() 
       })
       .catch(console.error)
    }
   });

//client.on("message", message => {
 // var role = message.guild.roles.find(juliancodes => juliancodes.name === '- Support Requested.');
 // if(!role) return;
//  var fchannel = "573785601841561600";
//var schannel = message.guild.channels.find(j => j.name === "ns");
//if(!schannel) return;
//if(!fchannel) return;
//  if (message.channel.id === fchannel) { 
 //   message.delete(100);
 //  message.member.addRole(role);
  //  schannel.send("-\n\n:small_blue_diamond:**Name:** " + message.member + "\n:small_orange_diamond:**Need to:** `  " + message.content + "  \n`.");
 //   }
 // });

client.on("message", message => {
  var role = message.guild.roles.find(r => r.name == "- Support Requested.");
  if(!role) return;
  var fchannel = "573785601841561600";
var schannel = message.guild.channels.find(j => j.name === "ns");
if(!schannel) return;
if(!fchannel) return;
  if (message.channel.id === fchannel) { 
    message.delete(100);
   message.member.addRole(role);
    schannel.send("-\n\n:small_blue_diamond:**Name:** " + message.member + "\n:small_orange_diamond:**Need to:** `  " + message.content + "  \n`.");
    }
  });

client.on("message", message => {
  if (message.content.startsWith(prefix + 'send')) {
    if(!message.member.hasPermission("MANAGE_GUILD")) return;
    var user = message.mentions.members.first();
    var args = message.content.split(" ").slice(2).join(" ");
var role = message.guild.roles.find(r => r.name == "- Support Requested.");
if(!user) message.channel.send(`Mention someone`);
if(!args) message.channel.send(`Type the message!`);
user.send(args);
user.removeRole(role).catch(console.error);
  }});



client.on('message', message => {
    var p = message.mentions.members.first();
    var reason = message.content.split(" ").slice(2).join(' ');
    var log = message.guild.channels.find('name', 'log');
    if(message.content.startsWith(`${prefix}warn`)){
        if(!p) return message.reply(`**Mention the user!**`);
        if(!reason) return message.reply(`**Spofic a reason!**`);
        if(!p.bannable) return message.reply(`**I can't ban a staff member!**`);
        reason = reason.replace('1', "**محاولة النشر**");
        reason = reason.replace('2', "**عدم الاحترام**");
        reason = reason.replace('3', "**ذكر امور سياسية**");
        reason = reason.replace('4', "**ذكر امور دينية**");
        reason = reason.replace('5', "**السب والشتم**");
        reason = reason.replace('6', "**عدم الاحترام**");
        reason = reason.replace('7', "**طلب رتبة**");
        reason = reason.replace('8', "**طلب ترقية**");
        reason = reason.replace('9', "**ازعاج او تكرار الكلام**");
        reason = reason.replace('10', "**محاولة التعليق**");
        var embed = new Discord.RichEmbed()
       // .setAuthor(`User Warned!`)
        .setThumbnail(message.author.avatarURL)
        .addField(`Name :`, `<@${p.id}>`, true)
        .addField(`By :`, `<@${message.author.id}>`, true)
        .addField(`Reason :`, reason, true)
        .setTimestamp()
        .setColor("36393e")
        .setFooter(`The 100.`)
        message.channel.send(`\`#\` ${p} You have been warring, ( **${reason}** ).`)
            message.delete();
        log.send({embed});
    }
});



client.login(process.env.BOT_TOKEN);
