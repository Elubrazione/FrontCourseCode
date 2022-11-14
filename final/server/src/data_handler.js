const fs = require('fs');
const path = require('path');
const Router = require('koa-router');
const infoRouter = new Router();
const file = path.join(__dirname, '/static/students.json');

let stuInfos = [];
fs.readFile('./static/students.json', 'utf-8', (err, data) => {
	if (err) throw err;
	console.log('origin_type: ', typeof(data));
	stuInfos = JSON.parse(data);
});

async function loginStatus (ctx, next) {
	console.log('user: ', ctx.session.user);
	if (!ctx.session.user) {
		ctx.body = { code: -1, message: '请先登录！'};
	} else {
		ctx.body = { code: 0, message: '登陆成功' };
	}
};

async function getStuInfos (ctx, next) {
	console.log('begin!');
	ctx.body = {
		code: 0,
		total: stuInfos.length,
		list: stuInfos
	};
};

async function createStudent (ctx, next) {
	const newStudent = ctx.request.body;
	console.log(newStudent);
	fs.writeFile(newStudent, file, (err) => {
		if (err) throw err;
		console.log();
	});

	ctx.body = {code: 0, message: "添加学生成功！"};
};

async function deleteStudent (ctx, next) {

};

async function updateStudent (ctx, next) {

};

infoRouter.prefix('/api/stu');
infoRouter.get('/info', loginStatus);
infoRouter.get('/list', getStuInfos);
infoRouter.post('/create', createStudent);
infoRouter.post('/delete', deleteStudent);
infoRouter.post('/update', updateStudent);

module.exports = infoRouter;