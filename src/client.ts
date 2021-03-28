import discord from "discord.js"

const client = new discord.Client

client
  .on('ready', () => console.log('ready'))
  .on('message', msg => {
    console.log(`${msg.author.tag}: ${msg.content}`)

    if (msg.content === '!TEST') {
      msg.reply('REPLY!')
    }
  })
  .login(process.env.TOKEN)
