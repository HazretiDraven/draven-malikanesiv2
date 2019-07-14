const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (bot, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor('**Ey mavi gökIerin beyaz ve kızıI süsü. Kız kardeşimin geIinIiği, şehidimin son örtüsü. Işık ışık, daIga daIga bayrağım! Senin destanını okudum, senin destanını yazacağım. -Arif Nihat Asya**')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
        .setImage(`https://66.media.tumblr.com/5aff9fffa010964a8c83a99feaf260af/tumblr_oichi4zyrn1uh0fwuo1_500.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bayrak',
  description: 'Ne oluğunu deneyerek görebilirsin.',
  usage: 'bayrak'
};