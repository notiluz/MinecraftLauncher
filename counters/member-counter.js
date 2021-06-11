module.exports = async(client) =>{
    const guild = client.guilds.cache.get('844537507281371188');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('852901709579157574');
        channel.setName(`Members: ${memberCount.toLocaleString()}`);
        //console.log('MemberCount up to date!');
    }, 5000);
}