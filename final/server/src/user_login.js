const Router = require('koa-router');
const loginRouter = new Router();

async function checkLogin (ctx, next) {
  await next();
  const { username, password, remember } = ctx.request.body;
  console.log(ctx.request.body);
  if (username === 'root') {
    if (password === '123456') {
      ctx.session.user = username;
      ctx.body = { code: 0, message: '登陆成功' };
    } else {
      ctx.body = { code: -1, message: '密码错误，登陆失败！' };
    }
  } else {
    ctx.body = { code: -1, message: '账号错误，登陆失败！' };
  }
}

async function logOut (ctx, next) {
  await next();
  ctx.session.user = null;
  ctx.body = { code: 0, message: '退出成功！' };
}

loginRouter.prefix('/api/user');
loginRouter.post('/login', checkLogin);
loginRouter.post('/logout', logOut);

module.exports = loginRouter;

// app.use(loginRouter.routes()).use(loginRouter.allowedMethods());
// app.listen(3001);