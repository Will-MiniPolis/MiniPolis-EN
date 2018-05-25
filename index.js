const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`-----||-----||-----||----- \n BOT ATIVADO COM SUCESSO! \n-----||-----||-----||-----`);
  bot.user.setActivity(`!commands`);
});

bot.on("message", async message => {
	

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  

if (cmd === `!info`){
  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "BOT information:",
    url: "https://www.facebook.com/Will.MiniPolis",
    fields: [{
        name: "Developer:                                                                                                                   Version:",
        value: "Will Ajudante-MP                                                 1.0.0"
      },
      {
        name: "Update:                                                                                                                                        Name of BOT:",
        value: "25/05/2018                                                           Moderator"
      },
      {
        name: "Language:                                                                                                                      Owner:",
        value: "English                                                                              [www.MiniPolis.com.br](https://www.minipolis.com.br/)"
      },
    ],
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© MiniPólis - All rights reserved. | 2018"
    }
  }})
}


});

bot.login(process.env.TOKEN);
