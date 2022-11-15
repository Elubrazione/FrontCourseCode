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
	if (!ctx.session.user) {
		ctx.body = {
			code: -1,
			message: "请先登录！"
		}
	} else {
		ctx.body = {
			code: 0,
			message: "已经登陆！"
		}
	}
}

async function getStuInfos (ctx, next) {
	console.log('begin!');
	if (ctx.session.user) {
		ctx.body = {
			code: 0,
			total: stuInfos.length,
			list: stuInfos
		};
	} else {
		ctx.body = {
			code: -1,
			total: 0,
			list: []
		}
	}
};

async function createStudent (ctx, next) {
	stuInfos.push(ctx.request.body);
	fs.writeFile('./static/students.json', JSON.stringify(stuInfos), (err) => {
		if (err) throw err;
		console.log();
	});
	ctx.body = {code: 0, message: "添加学生成功！"};
};

async function deleteStudent (ctx, next) {
	const { index } = ctx.request.body;
	stuInfos = stuInfos.splice(index, 1);
	fs.writeFile('./static/students.json', JSON.stringify(stuInfos), (err) => {
		if (err) throw err;
		console.log();
	});
	ctx.body = {code: 0, message: "删除学生成功！"};
};

async function updateStudent (ctx, next) {
	const { stu, index } = ctx.request.body;
	stuInfos[index] = stu;
	fs.writeFile('./static/students.json', JSON.stringify(stuInfos), (err) => {
		if (err) throw err;
		console.log();
	});
	ctx.body = {code: 0, message: "信息修改！"};
};

infoRouter.prefix('/api/stu');
infoRouter.get('/info', loginStatus);
infoRouter.get('/list', getStuInfos);
infoRouter.post('/create', createStudent);
infoRouter.post('/delete', deleteStudent);
infoRouter.post('/update', updateStudent);

module.exports = infoRouter;