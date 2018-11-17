const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = "!";

bot.on('ready', () => {
  console.log(`Kitilen initilized.`);
});
bot.on('message', msg => {
 if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;

 let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  console.log(command);

  let args = msg.content.split(" ").slice(1);

 if (command === "ping") {
    msg.reply("Pong! (hold on, processing latency...)").then(m => m.edit(`Pong! (Current latency is ${m.createdTimestamp - msg.createdTimestamp}ms, while the API Latency is ${Math.round(bot.ping)}ms)`) );
  }
  if (command === "help") {
    msg.reply("***Hi and Hello my friend im xBot a funny bot and moderation bot  Here is My commands : !help , !ping , !serverinfo , !userinfo ,*** ```!kick , !ban , !warn , is only for moderators and Admins```")
  }
  if (command === "Help") {
    msg.reply("***Hi and Hello my friend im xBot a funny bot and moderation bot  Here is My commands : !help , !ping , !serverinfo , !userinfo ,*** ```!kick , !ban , !warn , is only for moderators and Admins```")
  }
  if (command === "HELP") {
    msg.reply("***Hi and Hello my friend im xBot a funny bot and moderation bot  Here is My commands : !help , !ping , !serverinfo , !userinfo ,*** ```!kick , !ban , !warn , is only for moderators and Admins```")
  }
  if(command === 'sendGREEN') {
    const embed = new Discord.RichEmbed()
    .setColor('GREEN')
    .setTitle('hey')
    .setDescription(`123 test hello`)
    
    msg.channel.send(`${msg.author}`, {embed});
    }
    if (command === "b") {
        msg.reply("Hi habboub Fuck Fuck Fuck you noob mohamed hates you").then(m => m.edit('im just joking nub') );
    }
    if (command === "") {
});

bot.login("BOT_TOKEN")
