const fs = require('fs');
const path = require('path');
const Router = require('koa-router');
const router = new Router();
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
		
	}
};

router.prefix('/api/stu');
router.post('/create', dataHandler.createStudent);
router.post('/delete');
router.post('/update');

module.exports = router;
