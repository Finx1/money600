const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("57961656945016834")
setInterval(function() {
channel.send(`بنصير مليونرات ولكم مليون`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
