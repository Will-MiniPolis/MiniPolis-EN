const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`-----||-----||-----||----- \n BOT ATIVADO COM SUCESSO! \n-----||-----||-----||-----`);
  bot.user.setActivity(`MiniPólis  -  !Commands`);
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `!commands`){
    message.channel.send("```md\n# BOT commands: \n\n• !play (Use this command to play MiniPólis) \n• !info (BOT information) \n• Command 3 (Coming soon) \n```");
  }

  if (cmd === `!play`){
    message.channel.send("```md\n# Play MiniPólis: \n\nTo test the ALPHA version of the MiniPólis just go to our website: \n• ALPHA.MiniPolis.com.br \n```");
  }

  if (cmd === `!info`){
    message.channel.send("```md\n# BOT - MiniPólis: \n\n• Developer: Will Ajudante-MP \n• Version: 1.0.0 \n• Update: 25/05/2018 \n• Name of BOT: Moderator \n• Language: English \n• Owner: MiniPolis.com.br \n```");
  }
});

bot.login(process.env.TOKEN);
