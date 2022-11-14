const Router = require('koa-router');
const router = new Router();

const userLogin = {
  checkLogin: async (ctx, next) => {
    let { name, password } = ctx.request.body;
    if (name === 'root') {
      if (password === '123456') {
        ctx.session.user = name;
        // ctx.response.redirect('/');
      } else {
				ctx.body = { code: -1, message: '密码错误，登陆失败！' };
			}
    } else {
			ctx.body = { code: -1, message: '账号错误，登陆失败！' };
		}
  },

  logOut: async (ctx, next) => {
    ctx.session.user = null;
  }
};

router.prefix('/api/user');
router.post('/login', userLogin.checkLogin);
router.post('/logout', userLogin.logOut);

module.exports = router;
