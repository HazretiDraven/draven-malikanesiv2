const Discord = require('discord.js');

exports.run = async (client, message, params) => {
  var channel = client.channels.find('id', '599902348168527892')
    const asdf = await client.channels.get(message.channel.id).createInvite()
  message.delete();
  const embed = new Discord.RichEmbed()
  .setTitle("» DravenMalikânesi | Canlı Destek")
  .setDescription("**Canlı destek hattını kullandığınız için teşekkür ederiz. En kısa sürede yetkililerimiz sizinle ilgilenecektir.**")
  .setFooter("Kısa süre içerisinde geri dönüş olmaz ise UnioCraft discordundan bize ulaşın. https://discord.gg/sdjd5S6")
 message.channel.send(embed)
      const invite = new Discord.RichEmbed()
  .setAuthor("» Canlı Destek | Talep")
  .addField('**» Kullanıcı Adı: **', message.author.username + '#' + message.author.discriminator)
  .addField('**» Sunucu Adı: **', message.guild.name)
  .setDescription(asdf.url)
      channel.send(599902348168527892)
};
 
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'canlıdestek',
  description: 'Canlı Destek Tablebi Oluşturur.',
  usage: '!canlıdestek'
};