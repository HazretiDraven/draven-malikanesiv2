const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setImage("https://www.uniocraft.com/styles/unio/logo.png")
	.setDescription('Bot sürümü: **v2** Editleyen: UnioCraft **HazretiDraven**\n\n_**BOTU EKLEMEK İÇİN LİNK:**_\n\ YAKINDA! \n_**Linkler:**_\n\n**UnioCraft** Discord sunucusunun davet linki: https://discord.gg/6G87S9 \n\n**UnioCraft** MineCraft sunucusunun IP adresi: PLAY.UNIOCRAFT.COM\n\n**:copyright: 2019 [UnioCraft] Yazılım**');
    return message.author.sendEmbed(pingozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
