const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`-----||-----||-----||----- \n BOT ATIVADO COM SUCESSO! \n-----||-----||-----||-----`);
  bot.user.setActivity(`!COMMANDS - MiniPólis`);
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `!commands`){
    message.channel.send("```md\n# BOT Commands: \n\n• !play (Use this command to play MiniPólis) \n• Command 2 (Coming soon) \n• Command 3 (Coming soon) \n```");
  }

  if (cmd === `!play`){
    message.channel.send("```md\n# Play MiniPólis: \n\n To test the version ALPHA of MiniPólis just go to our website: \n• https://ALPHA.MiniPolis.com.br/ \n```");
  }
});

bot.login(process.env.TOKEN);
