const fs = require('fs');
const path = require('path');
const Router = require('koa-router');
const infoRouter = new Router();
const file = path.resolve(__dirname, '/static/students.json');

const dataHandler = {
	loginStatus: async (ctx, next) => {
		if (!ctx.session.user) {
			ctx.body = { code: -2, message: '请先登录！'};
			return;
		} else {
			await next();
		}
	},

  getStuInfos: async (ctx, next) => {
    // console.log('query: ', ctx.query);
		const stuInfos = fs.readFile(file, 'utf-8', (err, data) => {
			if (err) throw err;
			console.log(data);
		});

    ctx.body = {
      code: 0,
      total: stuInfos.length,
      list: stuInfos
    };
  },

	createStudent: async (ctx, next) => {
		const newStudent = {};
		fs.writeFile(newStudent, file, (err) => {
			if (err) throw err;
			console.log('The file has been saved!');
		});

		ctx.body = {code: 0, message: "添加学生成功！"};
	},

	deleteStudent: async (ctx, next) => {

	},

	updateStudent: async (ctx, next) => {

	},


};

infoRouter.prefix('/api/stu');
infoRouter.get('/info', dataHandler.loginStatus);
infoRouter.get('/list', dataHandler.getStuInfos);
infoRouter.post('/create', dataHandler.createStudent);
infoRouter.post('/delete', dataHandler.deleteStudent);
infoRouter.post('/update', dataHandler.updateStudent);

module.exports = infoRouter;