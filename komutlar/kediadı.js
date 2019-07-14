const Discord = require('discord.js');
const client = new Discord.Client();
var catNames = require('cat-names');

exports.run = (client, message) => {
            if (!message.guild) {
                const ozelmesajuyari = new Discord.RichEmbed()
                    .setColor(0xFF0000)
                    .setTimestamp()
                    .setAuthor(message.author.username, message.author.avatarURL)
                    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
                return message.author.sendEmbed(ozelmesajuyari);
            }
            if (message.channel.type !== 'dm') {
                const sunucubilgi = new Discord.RichEmbed()
                    .setAuthor(message.author.username + '  dolaşırken ayağına bir kedi takıldı!!')
                    .setColor(3447003)
                    .setTimestamp()
                    .setDescription('')
                    .setImage(`https://i.imgyukle.com/2019/07/01/kvIM0h.md.png`)
                return message.channel.sendEmbed(sunucubilgi);
            }
            };
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['p'],
    permLevel: 0
};

exports.help = {
    name: 'kediadi',
    description: 'Kedi adı.',
    usage: 'kediadı'
};