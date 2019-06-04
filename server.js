'use strict';
import * as utils from './utils'

const koa = require('koa')
const app = new koa()
const cors = require('koa2-cors')
const koaRouter = require('koa-router')

const mongoose = require('mongoose')

mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise
mongoose.connect(`mongodb://ilanben:zaq12wsxZ!@ds231537.mlab.com:31537/active_trail`);
// mongoose.connect(`mongodb://ilanben:xsw23edc@ds131721.mlab.com:31721/trippo`)


app.use(cors({
    origin: '*',
    allowedHeaders: ['*'],
    allowMethods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
}))
const router = new koaRouter()

router.get('koala', '/testConnection', async (ctx) => {
  ctx.status = 433;
  ctx.body = {
    message: 'popo was here!',
    desc:'and I can\'t tell why...'
  };
})
router.get('koala', '/fetch-words', async (ctx) => {
    ctx.body = await utils.fetchTweetsFromApi()
})
router.get('koala', '/fetchWordsFromMongo', async (ctx) => {
    ctx.body = await utils.fetchWordsFromMongo()
})
router.get('koala', '/tweet-report', async (ctx) => {
    ctx.body = await utils.tweetReport()
})
router.get('koala', '/deleteAll', async (ctx) => {
    ctx.body = await utils.deleteAll()
})
// const modules1 = require('../src/modules/v1')
// modules1(app)



app.use(router.routes())
    .use(router.allowedMethods())

app.listen(3333, () => console.log('running on port 3333'))
