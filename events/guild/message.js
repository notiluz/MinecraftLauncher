require('dotenv').config();
module.exports = (Discord, client, message) =>{
    const prefix = process.env.PREFIX;
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if(command) command.execute(client, message, args, Discord);

    try {
        command.execute(message, args, cmd, client, Discord);
    } catch (err) {
        message.reply("This command does not exist or there was an error!");
        console.log(err);
    }
}