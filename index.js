const Discord = require(`discord.js`);
const client = new Discord.Client();

const privateMessage = require(`./private-message`)
var config = require(`./config.json`);

client.on('ready', () => {
  if (config.maintenance === false) {
    console.log('起動しました')
    client.user.setActivity({
      name: '動いています。'
    });
    privateMessage(client, 'ヘルプ', '初めまして。\nログインの手順を説明します。(入った時の、おしゃべり…のやつを完了させ、10分待ったことを前提にします。(下の写真のやつです))\n:one: !uuid {自分のMCID} を打ち込みます。(MCIDとは、自分のMinecraftのID。https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q12172744327 を見てください) 注: Bedrockの方は、!mcid BE_{自分のMCID} になります\n:two:<#976020375391588392>にて、上のほうにあるメッセージにリアクションしてください。\n完了！このサーバーをお楽しみください！');
  } else {
    console.log('メンテナンス中')
    client.user.setActivity({
      name: 'データ管理中です。お待ちください'
    });
  }
});
client.login(config.token);
