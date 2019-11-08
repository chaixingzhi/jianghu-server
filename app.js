const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
var cors = require('koa2-cors');
require('./sequelize/db');
// 注意require('koa-router')返回的是函数:
const controller = require('./controller');

const app = new Koa();

app.use(cors());
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// parse request body:
app.use(bodyParser());
// add controllers:
app.use(controller());

app.listen(3000);
console.log('app started at port localhost:3000');
