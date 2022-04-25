import express, { json } from "express";
import chalk from "chalk";
import cors from 'cors'

const app = express()
app.use(cors())
app.use(json())

let userList = []
let tweetsList = [{ username: 'User0', avatar: 'https://pbs.twimg.com/profile_images/1445508865584361472/mVpsNhX2_400x400.jpg', tweet: `Mandando mensagem 0` },
{ username: 'User1', avatar: 'https://pbs.twimg.com/profile_images/1445508865584361472/mVpsNhX2_400x400.jpg', tweet: `Mandando mensagem 1` },
{ username: 'User2', avatar: 'https://pbs.twimg.com/profile_images/1445508865584361472/mVpsNhX2_400x400.jpg', tweet: `Mandando mensagem 2` },
{ username: 'User3', avatar: 'https://pbs.twimg.com/profile_images/1445508865584361472/mVpsNhX2_400x400.jpg', tweet: `Mandando mensagem 3` },
{ username: 'User4', avatar: 'https://pbs.twimg.com/profile_images/1445508865584361472/mVpsNhX2_400x400.jpg', tweet: `Mandando mensagem 4` },
{ username: 'User5', avatar: 'https://pbs.twimg.com/profile_images/1445508865584361472/mVpsNhX2_400x400.jpg', tweet: `Mandando mensagem 5` },
{ username: 'User6', avatar: 'https://pbs.twimg.com/profile_images/1445508865584361472/mVpsNhX2_400x400.jpg', tweet: `Mandando mensagem 6` },
{ username: 'User7', avatar: 'https://pbs.twimg.com/profile_images/1445508865584361472/mVpsNhX2_400x400.jpg', tweet: `Mandando mensagem 7` },
{ username: 'User8', avatar: 'https://pbs.twimg.com/profile_images/1445508865584361472/mVpsNhX2_400x400.jpg', tweet: `Mandando mensagem 8` },
{ username: 'User9', avatar: 'https://pbs.twimg.com/profile_images/1445508865584361472/mVpsNhX2_400x400.jpg', tweet: `Mandando mensagem 9` },
{ username: 'User10', avatar: 'https://pbs.twimg.com/profile_images/1445508865584361472/mVpsNhX2_400x400.jpg', tweet: `Mandando mensagem 10` },
{ username: 'User11', avatar: 'https://pbs.twimg.com/profile_images/1445508865584361472/mVpsNhX2_400x400.jpg', tweet: `Mandando mensagem 11` },
{ username: 'User12', avatar: 'https://pbs.twimg.com/profile_images/1445508865584361472/mVpsNhX2_400x400.jpg', tweet: `Mandando mensagem 12` }]

app.post('/sign-up', (req, res) => {
    const body = req.body
    const loginUser = {
        username : body.username,
        avatar : body.avatar
    }
    userList.push(loginUser)
    console.log('Esta entrando: ', loginUser)
    res.send(`OK`)
} )

app.get('/tweets', (req, res) => {
    let LastIndex = tweetsList.length
    let listTweetsToSend = tweetsList.slice( LastIndex - 10, LastIndex )
    res.send(listTweetsToSend)
} )

app.post('/tweets', (req, res) => {
    const body = req.body
    const username = req.body.username
    const avatar = tweetsList.find( twet => twet.username === username )
    const toTweet = {
        username : body.username,
        avatar : avatar.avatar,
        tweet : body.tweet
    }
    tweetsList.push(toTweet)
    res.send('OK')
} )

app.listen(5000, () => {
    console.log(chalk.bold.green('Iniciando Projetao'))
})