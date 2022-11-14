const Koa = require('koa');
const Router = require('koa-router')
const onerror = require('koa-onerror');
const static = require('koa-static');
const views = require('koa-views');
const session = require('koa-session');
const json = require('koa-json');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');

const app = new Koa();
const loginRouter = require('./src/user_login');
const infoRouter = require('./src/data_handler');

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

app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text'],
  })
);
app.use(json());
app.use(logger());

app.use(static(__dirname + '/dist/'));

app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

app.use(loginRouter.routes()).use(loginRouter.allowedMethods());
app.use(infoRouter.routes()).use(infoRouter.allowedMethods());

app.listen(3001);
