const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const views = require('koa-views');
const json = require('koa-json');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const session = require('koa-session');

const app = new Koa();
const router = new Router();
const userLogin = require('./src/user_login');
const dataHandler = require('./src/data_handler');

// cookie_session
app.keys = ['this is my secret set'];
app.use(
  session(
    {
      key: 'koa:sess',
      maxAge: 86400000, //过期时间
      autoCommit: true,
      overwrite: true,
      httpOnly: true,
      signed: true,
      rolling: false,
      renew: false,
      secure: false
    },
    app
  )
);

// middlewares
app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text'],
  })
);
app.use(json());
app.use(logger());
app.use(static(__dirname + '/static/'));

app.use(
  views(__dirname + '/public', {
    map: { html: 'ejs' },
  })
);

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

module.exports = app;
