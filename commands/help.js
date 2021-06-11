module.exports = {
    name: 'help',
    aliases: ['h'],
    description: 'Embeds',
    execute(client, message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#c29313')
        .setTitle('Help')
        .setDescription('These are my commands:')
        .addFields(
            {name: '.play', value: 'The bot plays the video you are giving | aliases: p'},
            {name: '.leave', value: 'The bot leaves the voice channel | aliases: disconnect, dc, l'}
        )
        .setImage('https://cdn.discordapp.com/attachments/844537507806969878/852634716263678003/bois_club.jpg');

        message.channel.send(newEmbed);
    }
}