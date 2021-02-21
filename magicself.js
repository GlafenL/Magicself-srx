var prefix = ("//");
var token = ("ODA5MDk3MzAzNDExNTIzNjE1.YCQiWA.7xYRcGyxVOhD6efppsNWoUt9wR0") //Votre token
var premium = ("J2d9qc9ZJf5"); //Code premium (pas obliger)

const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.clear();
    console.log('Aucune clef prenium trouver !');
    console.log('');
    console.log('');
    console.log(' by Fontesie');
    console.log('');
    console.log('VERSION NON-PRENIUM');
    console.log('');
    console.log('Pseudo : ' + client.user.username + ' ( ' + client.user.id + ' )');
    console.log('Votre prefix : ' + prefix);
});
client.on('ready', () => {
    if (premium == 'J2d9qc9ZJf5') {
        console.clear();
        console.log('Clef prenium trouver !');
        console.log('');
        console.log('MagicSelf by Fontesie');
        console.log('');
        console.log('VERSION PRENIUM');
        console.log('');
        console.log('Pseudo : ' + client.user.username + ' ( ' + client.user.id + ' )');
        console.log('Votre prefix : ' + prefix);
    }
});
client.on('message', message => {
    if (message.author.id !== client.user.id) return;
    if (message.content === prefix + 'help') {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setTitle('**:zap: MagicSelf - Outils  :zap:**')
        .addField(prefix + 'raid', '**Outils pour détruire des serveurs**')
        .addField(prefix + 'outils', '**Des choses utiles**')
        .addField(prefix + 'fun', '**Des commandes fun**')
        .addField(prefix + 'gen', '**Generateur**')
        .setColor('BLACK')
        .setFooter('MagicSelf | By Fontesie', 'https://cdn.discordapp.com/attachments/412190473772597258/665684756008140843/giphy.gif')
        .setImage('https://cdn.discordapp.com/attachments/412190473772597258/665684756008140843/giphy.gif');
        message.channel.send(embed);
    };
});
client.on('message', message => {
    if (message.author.id !== client.user.id) return;
    if (message.content === prefix + 'outils') {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setTitle('**:zap: MagicSelf - Outils  :zap:**')
        .addField(prefix + 'rouge', '**rouge [texte]**')
        .addField(prefix + 'noir', '**noir [texte]**')
        .addField(prefix + 'purge', '**Supprime des messages**')
        .addField(prefix + 'presence', '**presence [texte]**')
        .addField(prefix + 'ping', '**Affiche ton ping (dans la console)**')
        .addField(prefix + 'avatar', '**Affiche ton avatar**')
        .addField(prefix + 'info', '**Affiche tes informations (ID,pseudo....)**')
        .addField(prefix + 'serveri', '**Affiche les informations d\'un serveur**')
        .addField(prefix + 'gserveri', '**Affiche les  informations d\'un server (dans la console)**')
        .addField(prefix + 'consolec', '**Clear la console**')
        .addField(prefix + 'serverlist', '**Affiche tous les serveurs que ta rejoins**')
        .addField(prefix + 'ghostping', '**Envoye x10 everyone et ensuite efface rapidement**')
        .setColor('BLACK')
        .setFooter('MagicSelf | By Fontesie', 'https://cdn.discordapp.com/attachments/412190473772597258/665684756008140843/giphy.gif')
        .setImage('https://cdn.discordapp.com/attachments/412190473772597258/665684756008140843/giphy.gif');
        message.channel.send(embed);
    };
});
client.on('message', message => {
    if (message.content.startsWith(prefix + 'noir')) {
        if (message.author.id !== client.user.id) return;
        let args = message.content.slice(6);
        message.delete();
        if (!args) return message.channel.send('>>> ' + prefix + ('noir **[texte]**'));
        var embed = new Discord.RichEmbed()
        .setColor('BLACK')
        .setDescription(args)
        .setFooter('MagicSelf | By Fontesie', 'https://cdn.discordapp.com/attachments/412190473772597258/665684756008140843/giphy.gif');
        message.channel.sendMessage(embed);
    }
});
client.on('message', message => {
    if (message.author.id !== client.user.id) return;
    if (message.content === prefix + 'purge') {
        message.delete();
        message.channelfetchMessages().then(message => message.forEach(message => message.delete()));
    };
});
client.on('message', message => {
    if (message.author.id !== client.user.id) return;
    if (message.content.startsWith(prefix + 'presence')) {
        let args = message.content.slice(10);
        message.delete();
        if (!args) return message.channel.send('>>> ' + prefix + ('presence **[texte]**'));
        client.user.setPresence({
            'game': {
                'name': args,
                'type': 'streaming',
                'url': 'https://www.twitch.tv/magicself'
            }
        });
        message.channel.send('Ta presence : **' + args + '** !');
    };
});
client.on('message', message => {
    if (message.author.id !== client.user.id) return;
    if (message.content === prefix + 'raid') {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setTitle('**:zap: MagicSelf - Raid :zap:**')
        .addField(prefix + 'dc', '**Supprime tous les channels [PREMIUM]**')
        .addField(prefix + 'dcs', '**Supprime le channel ou vous avez fait la commande [PREMIUM]**')
        .addField(prefix + 'dra', '**Supprime tous les rôles [PREMIUM]**')
        .addField(prefix + 'cc', '**Crée beaucoup de channel [PREMIUM]**')
        .addField(prefix + 'cn', '**Change le nom du serveur (rapidement) [PREMIUM]**')
        .addField(prefix + 'spam', '**Spam le message que tu veut [PREMIUM]**')
        .setColor('BLACK')
        .setFooter('MagicSelf | By Fontesie', 'https://cdn.discordapp.com/attachments/412190473772597258/665684756008140843/giphy.gif')
        .setImage('https://cdn.discordapp.com/attachments/412190473772597258/665684756008140843/giphy.gif');
        message.channel.send(embed);
    }
});
client.on('message', message => {
    if (message.author.id !== client.user.id) return;
    if (message.content === prefix + 'dc') {
        if (premium == 'J2d9qc9ZJf5') {
            message.delete();
            if (!message.guild.member(message.author).hasPermission('MANAGE_CHANNELS')) return console.log('Tu n\'as pas la permission !');
            message.guild.channels.forEach(channel => channel.delete());
        }
    };
});
client.on('message', message => {
    if (message.author.id !== client.user.id) return;
    if (message.content === prefix + 'dcs') {
        if (premium == 'J2d9qc9ZJf5') {
            message.delete();
            if (!message.guild.member(message.author).hasPermission('MANAGE_CHANNELS')) return console.log('Tu n\'as pas la permission !');
            message.channel.delete();
        }
    };
});
client.on('message', message => {
    if (message.content === prefix + 'dra') {
        if (premium == 'J2d9qc9ZJf5') {
            message.delete();
            if (!message.guild.member(message.author).hasPermission('MANAGE_ROLES')) return console.log('Tu n\'as pas la permission !');
            message.guild.roles.map(roles => {
                if (roles.editable) {
                    if (roles.name === '@everyone') return;
                    roles.delete();
                }
            });
        }
    };
});
client.on('message', message => {
    if (message.author.id !== client.user.id) return;
    if (message.content === prefix + 'cc') {
        if (premium == 'J2d9qc9ZJf5') {
            message.delete();
            if (!message.guild.member(message.author).hasPermission('MANAGE_CHANNELS')) return console.log('Tu n\'as pas la permission !');
            message.guild.channels.forEach(channel => channel.delete());
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
            message.guild.createChannel('fucked by MagicSelf', 'text');
            message.guild.createChannel('fucked by MagicSelf', 'voice');
        };
    }
});
client.on('message', _0x5a4321 => {
    if (_0x5a4321.author.id !== client.user.id) return;
    if (_0x5a4321.content === prefix + 'fun') {
        _0x5a4321.delete();
        let embed = new Discord.RichEmbed()
        .setTitle('**:zap: MagicSelf - Fun :zap:**')
        .addField(prefix + 'ddos', '**Lançe une fausse attaque DDOS**')
        .addField(prefix + 'pavet', '**Envoie un énorme message**')
        .addField(prefix + 'chargement', '**Débite textuellement**')
        .addField(prefix + 'gif', '**Des images qui bouge**')
        .setColor('BLACK')
        .setFooter('MagicSelf | By Fontesie', 'https://cdn.discordapp.com/attachments/412190473772597258/665684756008140843/giphy.gif')
        .setImage('https://cdn.discordapp.com/attachments/412190473772597258/665684756008140843/giphy.gif');
        _0x5a4321.channel.send(embed);
    };
});
client.on('message', message => {
    if (message.author.id !== client.user.id) return;
    if (message.content === prefix + 'cn') {
        if (premium == 'J2d9qc9ZJf5') {
            message.delete();
            if (!message.guild.member(message.author)['hasPermission']('MANAGE_GUILD')) return console.log('Tu n\'as pas la permission !');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
            message.guild.setName('FUCKED BY ' + client.user.username);
            message.guild.setName('MagicSelf');
        };
    }
});
client.on('message', message => {
    if (message.author.id !== client.user.id) return;
    if (message.content === prefix + 'ddos') {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setTitle('**DDOS BY **' + client.user.username)
        .addField('ÉTAT DE L\'ATTAQUE', '``ATTAQUE ENVOYÉ !``')
        .addField('IP', '``92.195.27.88``')
        .addField('PAQUETS', '``800``')
        .addField('PORT', '``92``').addBlankField()
        .setColor('BLACK')
        .setFooter('MagicSelf | By Fontesie', 'https://cdn.discordapp.com/attachments/412190473772597258/665684756008140843/giphy.gif')
        .setImage('https://cdn.discordapp.com/attachments/412190473772597258/665684756008140843/giphy.gif');
        message.channel.send(embed);
    };
});
client.on('message', message => {
    if (message.author.id !== client.user.id) return;
    if (message.content === prefix + 'pavet') {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setTitle('**Pavet :)**').
        setDescription('**Débarrassée de l\'amulette se craqueler comme un oeuf, aplatis aux deux bouts de la terre ouverte et monta dans une nacelle et nous sourire du milieu des peuples. Quelque système que nous embrassions sur la cause, égaya son front sérieux. Charlatanisme des romans pour le voir. Privé de mes boyaux et de ma pensée que je suis avec lui. Déballée de sa couverture, à l\'étape. Ensemble ils chantaient, les autres bandits accoururent du corridor. Étonnés de cette fermeture, lorsqu\'on amena le quatorzième enfant, tout cela le câlinait en clignotant de l\'oeil, éclata en sanglots. Fréquemment il faisait appel à la raison et qu\'il portait le petit prince fut très malade, et mourut tout imprégné, d\'absinthe.Sorti d\'une des fenêtres. Sur-le-champ, à travers cette légère couche d\'emprunt. Ceux en agonie regardaient blanchir, mourir leurs mains étalées au long des années qui comptaient double. Agités par toute une foule applaudissait. Examinons les faits d\'avance, les deux sociétés finissaient par se résigner. Dernier chapitre, les combattants s\'avancèrent sur des sortes de persiennes. Sceptre de la science sous le nom badin de chair à demi cuite qu\'elle rongeait.Quelle était leur distribution initiale. Sentier peu fréquenté, et de pénétrer dans les petits domaines comme dans les annales du bac, et nous avons bébé à nous deux ? Sagement administrée, elle lui rendit la vie plus qu\'il était la comédie préludant au drame. Point besoin de reconnaître avec vous le long de quelques rues commerçantes, ces demeures affectent un air de grande honnêteté. Reconduit par les moines, impitoyables, répugnants, je les méprise autant que tes malhonnêtetés.**')
        .setColor('BLACK')
        .setFooter('MagicSelf | By Fontesie', 'https://cdn.discordapp.com/attachments/412190473772597258/665684756008140843/giphy.gif')
        .setImage('https://cdn.discordapp.com/attachments/412190473772597258/665684756008140843/giphy.gif');
        message.channel.send(embed);
    };
});
client.on('message', message => {
    if (message.author.id !== client.user.id) return;
    if (message.content === prefix + 'chargement') {
        message.edit('>>> **Chargement...** ▓▓▓▓▓');
        message.edit('>>> **Chargement..** ▓▓▓▓');
        message.edit('>>> **Chargement.** ▓▓▓');
        message.edit('>>> **Chargement** ▓▓');
        message.edit('>>> **Chargement...** ▓');
        message.edit('>>> **Chargement..** ▓▓▓▓▓');
        message.edit('>>> **Chargement..** ▓▓▓▓');
        message.edit('>>> **Chargement.** ▓▓▓');
        message.edit('>>> **Chargement** ▓▓');
        message.edit('>>> **Chargement...** ▓');
        message.edit('>>> **Chargement..** ▓▓▓▓▓');
        message.edit('>>> **Chargement..** ▓▓▓▓');
        message.edit('>>> **Chargement.** ▓▓▓');
        message.edit('>>> **Chargement** ▓▓');
        message.edit('>>> **Chargement...** ▓');
        message.edit('>>> **Chargement..** ▓▓▓▓▓');
        message.edit('>>> **Chargement..** ▓▓▓▓');
        message.edit('>>> **Chargement.** ▓▓▓');
        message.edit('>>> **Chargement** ▓▓');
        message.edit('>>> **Chargement...** ▓');
        message.edit('>>> **Chargement..** ▓▓▓▓▓');
        message.edit('>>> **Chargement..** ▓▓▓▓');
        message.edit('>>> **Chargement.** ▓▓▓');
        message.edit('>>> **Chargement** ▓▓');
    };
});
client.on('message', message => {
    if (message.author.id !== client.user.id) return;
    if (message.content === prefix + 'avatar') {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setTitle('**Voici ton avatar**')
        .setColor('BLACK')
        .setFooter('MagicSelf | By Fontesie', 'https://cdn.discordapp.com/attachments/412190473772597258/665684756008140843/giphy.gif')
        .setImage(client.user.avatarURL);
        message.channel.send(embed);
    };
});
client.on('message', message => {
    if (message.author.id !== client.user.id) return;
    if (message.content === prefix + 'info') {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setTitle('**Voici tes informations**')
        .setColor('BLACK')
        .addField('ID : **' + client.user.id + '**', '** **')
        .addField('Prefix : **' + prefix + '**', '** **')
        .addField('Pseudo : **' + client.user.tag + '**', '** **')
        .addField('Lien de ton avatar : ' + client.user.avatarURL, '** **')
        .addField('Date de création du compte : **' + client.user.createdAt + '**', '** **')
        .setFooter('MagicSelf | By Fontesie', 'https://cdn.discordapp.com/attachments/412190473772597258/665684756008140843/giphy.gif')
        .setImage('https://cdn.discordapp.com/attachments/412190473772597258/665684756008140843/giphy.gif');
        message.channel.send(embed);
    };
});
client.on('message', message => {
    if (message.author.id !== client.user.id) return;
    if (message.content === prefix + 'gif') {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setTitle('**Menu des gifs**')
        .setDescription('**' + prefix + 'gif issou  ' + prefix + 'gif fib  ' + prefix + 'gif party  ' + prefix + 'gif tg  ' + prefix + 'gif rage  ' + prefix + 'gif genie  ' + prefix + 'gif vegeta  ' + prefix + 'gif anime**')
        .setColor('BLACK')
        .setFooter('MagicSelf | By Fontesie', 'https://cdn.discordapp.com/attachments/412190473772597258/665684756008140843/giphy.gif')
        .setImage('https://cdn.discordapp.com/attachments/412190473772597258/665684756008140843/giphy.gif');
        message.channel.send(embed);
    };
});
client.on('message', message => {
    if (message.author.id !== client.user.id) return;
    if (message.content === prefix + 'gif issou') {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setImage('https://media1.tenor.com/images/f86c3a13ddb998631efa393d1c289567/tenor.gif')
        .setColor('BLACK')
        .setFooter('MagicSelf | By Fontesie', 'https://cdn.discordapp.com/attachments/412190473772597258/665684756008140843/giphy.gif');
        message.channel.send(embed);
    };
});
client.on('message', message => {
    if (message.author.id !== client.user.id) return;
    if (message.content === prefix + 'gif fib') {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setImage('https://thumbs.gfycat.com/DizzyClearcutKookaburra-max-1mb.gif')
        .setColor('BLACK')
        .setFooter('MagicSelf | By Fontesie', 'https://cdn.discordapp.com/attachments/412190473772597258/665684756008140843/giphy.gif');
        message.channel.send(embed);
    };
});
client.on('message', message => {
    if (message.author.id !== client.user.id) return;
    if (message.content === prefix + 'gif party') {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setImage('https://media1.tenor.com/images/9bf8ef57e41298134471103362475365/tenor.gif')
        .setColor('BLACK')
        .setFooter('MagicSelf | By Fontesie', 'https://cdn.discordapp.com/attachments/412190473772597258/665684756008140843/giphy.gif');
        message.channel.send(embed);
    };
});
client.on('message', message => {
    if (message.author.id !== client.user.id) return;
    if (message.content === prefix + 'gif tg') {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setImage('https://media.tenor.com/images/abec253a3a9d6701101bb0d786a2a697/tenor.gif')
        .setColor('BLACK')
        .setFooter('MagicSelf | By Fontesie', 'https://cdn.discordapp.com/attachments/412190473772597258/665684756008140843/giphy.gif');
        message.channel.send(embed);
    };
});
client.on('message', message => {
    if (message.author.id !== client.user.id) return;
    if (message.content === prefix + 'gif rage') {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setImage('https://media.tenor.com/images/5abb05d6e857e0e660b2258bc450ca12/tenor.gif')
        .setColor('BLACK')
        .setFooter('MagicSelf | By Fontesie', 'https://cdn.discordapp.com/attachments/412190473772597258/665684756008140843/giphy.gif');
        message.channel.send(embed);
    };
});
client.on('message', message => {
    if (message.author.id !== client.user.id) return;
    if (message.content === prefix + 'gif genie') {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setImage('https://media.tenor.com/images/d50d6b06878bc263c7ce7563fbf156b4/tenor.gif')
        .setColor('BLACK')
        .setFooter('MagicSelf | By Fontesie', 'https://cdn.discordapp.com/attachments/412190473772597258/665684756008140843/giphy.gif');
        message.channel.send(embed);
    };
});
client.on('message', message => {
    if (message.author.id !== client.user.id) return;
    if (message.content === prefix + 'gif vegeta') {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setImage('https://media.giphy.com/media/fRFNQ4YC5xWPS/giphy.gif')
        .setColor('BLACK')
        .setFooter('MagicSelf | By Fontesie', 'https://cdn.discordapp.com/attachments/412190473772597258/665684756008140843/giphy.gif');
        message.channel.send(embed);
    };
});
client.on('message', message => {
    if (message.author.id !== client.user.id) return;
    if (message.content === prefix + 'gif anime') {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setImage('https://cdn.discordapp.com/attachments/660558462882807810/660560710388023301/aa.gif')
        .setColor('BLACK')
        .setFooter('MagicSelf | By Fontesie', 'https://cdn.discordapp.com/attachments/412190473772597258/665684756008140843/giphy.gif');
        message.channel.send(embed);
    };
});
client.on('message', message => {
    if (message.author.id !== client.user.id) return;
    if (message.content === prefix + 'serveri') {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setTitle('Information du serveur ' + message.guild.name)
        .setImage('https://cdn.discordapp.com/attachments/412190473772597258/665684756008140843/giphy.gif')
        .addField('Créateur su serveur : **' + message.guild.owner.user.tag + '**', '** **')
        .addField('Nombre de membre : **' + message.guild.memberCount + '**', '** **')
        .addField('Région : **' + message.guild.region + '**', '** **')
        .addField('Date de création : **' + message.guild.createdAt + '**', '** **')
        .setColor('BLACK')
        .setFooter('MagicSelf | By Fontesie', 'https://cdn.discordapp.com/attachments/412190473772597258/665684756008140843/giphy.gif');
        message.channel.send(embed);
    };
});
client.on('message', message => {
    if (message.author.id !== client.user.id) return;
    if (message.content === prefix + 'gserveri') {
        message.delete();
        console.log('');
        console.log('');
        console.log('Nom du serveur : ' + message.guild.name);
        console.log('Nombre de membre : ' + message.guild.memberCount);
        console.log('Région : ' + message.guild.region);
        console.log('Date de création : ' + message.guild.createdAt);
        console.log('');
    };
});
client.on('message', message => {
    if (message.author.id !== client.user.id) return;
    if (message.content === prefix + 'consolec') {
        message.delete();
        console.clear();
        console.log('');
        console.log('');
        console.log('MagicSelf by Fontesie');
        console.log('');
        console.log('Pseudo : ' + client.user.username);
        console.log('Votre prefix : ' + prefix);
    };
});
client.on('message', message => {
    if (message.author.id !== client.user.id) return;
    if (message.content === prefix + 'serverlist') {
        message.delete();
        message.channel.send(client.guilds.map(guild => guild.name + (' | **' + guild.memberCount + ('** membres \n'))));
    };
});
client.on('message', message => {
    if (message.author.id !== client.user.id) return;
    if (message.content === prefix + 'premium') {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setTitle('**:zap: MagicSelf - Premium  :zap:**')
        .setURL('https://discord.gg/Jc9y5Xt')
        .addField('Le premium rajoute la cmd raid', '** **')
        .addField('Un AutoMP (donné à part)', '** **')
        .addField('** **', '** **').addField('Pour plus d\'information cliquer sur => :zap: MagicSelf - Premium :zap:', '** **')
        .setColor('BLACK')
        .setFooter('MagicSelf | By Fontesie', 'https://cdn.discordapp.com/attachments/412190473772597258/665684756008140843/giphy.gif')
        .setImage('https://cdn.discordapp.com/attachments/412190473772597258/665684756008140843/giphy.gif');
        message.channel.send(embed);
    };
});
if (premium = 'J2d9qc9ZJf5') {
    client.on('message', message => {
        if (message.content.startsWith(prefix + 'spam')) {
            if (message.author.id !== client.user.id) return;
            let args = message.content.slice(7);
            message.delete();
            if (!args) return message.channel.send('>>> ' + prefix + ('spam **[texte]**')).then(message => message.delete(1000));
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
            message.channel.send(args);
        };
    });
}
client.on('message', message => {
    if (message.author.id !== client.user.id) return;
    if (message.content === prefix + 'ghostping') {
        message.delete();
        message.channel.send('@everyone').then(message => message.delete());
        message.channel.send('@everyone').then(message => message.delete());
        message.channel.send('@everyone').then(message => message.delete());
        message.channel.send('@everyone').then(message => message.delete());
        message.channel.send('@everyone').then(message => message.delete());
        message.channel.send('@everyone').then(message => message.delete());
        message.channel.send('@everyone').then(message => message.delete());
        message.channel.send('@everyone').then(message => message.delete());
        message.channel.send('@everyone').then(message => message.delete());
        message.channel.send('@everyone').then(message => message.delete());
        message.channel.send('@everyone').then(message => message.delete());
        message.channel.send('@everyone').then(message => message.delete());
        message.channel.send('@everyone').then(message => message.delete());
        message.channel.send('@everyone').then(message => message.delete());
        message.channel.send('@everyone').then(message => message.delete());
    };
});
client.on('message', message => {
    if (message.author.id !== client.user.id) return;
    if (message.content === prefix + 'uptime') {
        message.delete();
        let totalSeconds = client.uptime / 1000;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        let phrase = '**Sa fait ' + hours + 'h' + minutes + 'min et ' + seconds + ' sec que tu utulise le selfbot !**';
        let embed = new Discord.RichEmbed()
        .addField(phrase, '** **')
        .setColor('BLACK').setFooter('MagicSelf | By Fontesie', 'https://cdn.discordapp.com/attachments/412190473772597258/665684756008140843/giphy.gif')
        .setImage('https://cdn.discordapp.com/attachments/412190473772597258/665684756008140843/giphy.gif');
        message.channel.send(embed);
    };
});
client.on('message', message => {
    if (message.author.id !== client.user.id) return;
    if (message.content === prefix + 'gen') {
        message.delete();
        let embed = new Discord.RichEmbed()
        .setTitle('**:zap: MagicSelf - GEN :zap:**')
        .addField(prefix + ('gen nordvpn'), '**Gen des comptes nordvpns ! [PREMIUM]**')
        .addField(prefix + 'gen steam', '**Gen des comptes steams [PREMIUM]**')
        .addField(prefix + 'gen token', '**Gen des tokens discord [PREMIUM]**')
        .setColor('BLACK')
        .setFooter('MagicSelf | By Fontesie', 'https://cdn.discordapp.com/attachments/412190473772597258/665684756008140843/giphy.gif')
        .setImage('https://cdn.discordapp.com/attachments/412190473772597258/665684756008140843/giphy.gif');
        message.channel.send(embed);
    };
});
if (premium == 'J2d9qc9ZJf5') {
    client.on('message', message => {
        if (message.author.id !== client.user.id) return;
        if (message.content === prefix + ('gen nordvpn')) {
            message.delete();
            var nordvpns = ['yeagertrystan@aol.com:Ledzep12', 'hug_4u2@hotmail.com:aaa123456aaa', 'ryantupa20@gmail.com:punx1977', 'xallan21@live.fr:Sltallan21', 'stylerider25@yahoo.com:ducati1098', 'iney44@hotmail.com:49rhino44', 'jdosman9@hotmail.com:alexander9', 'rbcasselberry@yahoo.com:Tanner85', 'kungun_99@hotmail.com:1234poom', 'nnlebrun@gmail.com:Lolwut22', 'mikel_colby@yahoo.com:Mscolby1', 'joshuahharvey95@gmail.com:Asshole01', 'samuelpfeiffer2@gmail.com:samuel28', 'ryanjuarez12990@yahoo.com:Ipod9081'];
            let nordvpn = nordvpns[Math.floor(Math.random() * nordvpns.length)];
            message.channel.send(nordvpn);
        }
    });
}
if (premium == 'J2d9qc9ZJf5') {
    client.on('message', message => {
        if (message.author.id !== client.user.id) return;
        if (message.content === prefix + 'gen steam') {
            message.delete();
            var steams = ['ctgloglu28:bjkfbbjk123456', 'REEVO8923:baby8923', 'kuldude678:csbdad3601', 'andikaex:opopop', 'nuka_quantumz:sk8everydamnday', 'vikass02:pyramiderna1', 'brunofagunsar:bruno0509', 'Fomi96:50849760o', 'powershoot555:161211kz', 'rdkrdo:Aiv505050', 'Cloudbuster274:z0mgwtfbbq', 'creeper_gaming12:davey2001', 'SunnyPlays123:1597Thomas', 'bigbuck710:ethang710', 'TotalJungle745:firepohu17', 'patrickhansell:Lebsoccer38', 'hoanguyen16011994:hoanguyen', 'abdulshamin:shamin26', 'Mrbattle14:adrien14100', 'rsgoldazzyy:80230214Hao'];
            let steam = steams[Math.floor(Math.random() * steams.length)];
            message.channel.send(steam);
        }
    });
}
if (premium == 'J2d9qc9ZJf5') {
    client.on('message', message => {
        if (message.author.id !== client.user.id) return;
        if (message.content === prefix + 'gen token') {
            message.delete();
            var tokens = ['NTM5OTczNTA5NjI4MDM1MDcy.DzKJBg.M2EdQ7dco0ou1eBWrCf7zMz4bPM', 'NTgwMDgyMzc2MzU3NDQ1NjQy.XOLiXA.0d9FcirnGCIUxPDwd2VoSuQ-0p4', 'NTgwMDgyMTU1NzU4Mjg4ODk3.XOLhvw.AYpLxIPNrTrqxqW35DL03eQ-vgQ', 'NTgwMDc4OTc3MDkyMjg4NTEy.XOLe3A.DdlJN52mEHcMZXmLL1F2sjT_QZs', 'NTgwMDc3MzE3NjI4NDkzODQ1.XOLdgg.DK-Hi5phBRxrXsaD7bfSCU0QBn4'];
            let token = tokens[Math.floor(Math.random() * tokens.length)];
            message.channel.send(token);
        }
    });
}
client.on('message', message => {
    if (message.content.startsWith(prefix + '8ball')) {
        if (message.author.id !== client.user.id) return;
        let args = message.content.slice(7);
        var reponses = ['Oui', 'Non', 'Peut-être', 'Pas dutout'];
        let reponse = reponses[Math.floor(Math.random() * reponses.length)];
        message.delete();
        if (!args) return message.channel.send('>>> ' + prefix + ('8ball **[texte]**'));
        var embed = new Discord.RichEmbed()
        .setColor('BLACK')
        .setTitle('**8BALL**')
        .setDescription('Question : ' + args)
        .addField('Reponse :', reponse)
        .setFooter('MagicSelf | By Fontesie', 'https://cdn.discordapp.com/attachments/412190473772597258/665684756008140843/giphy.gif');
        message.channel.send(embed);
    }
});
client.login(token);