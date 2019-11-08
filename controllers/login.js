const {createTableData, findAll} = require('../utils/sequelize');
const model = require('../sequelize/model');
const {User} = model

var fn_index = async (ctx, next) => {
  ctx.response.body = `<h1>Index</h1>
      <form action="/signin" method="post">
          <p>Name: <input name="name" value="koa"></p>
          <p>Password: <input name="password" type="password"></p>
          <p><input type="submit" value="Submit"></p>
      </form>`;
};

var fn_signin = async (ctx, next) => {
  ctx.response.type = 'application/json';
  // console.log('body: ', ctx.request.body)
  let result = await findAll(User, {
    ...ctx.request.body
  })
  
  if(result.length) {
    ctx.response.body = {
      code: 200,
      message: 'login success'
    };
  } else {
    ctx.response.body = {
      code: 200,
      message: 'login faild'
    };
  }
};

var register_signin = async (ctx, next) => {
  ctx.response.type = 'application/json';
  console.log('body: ', ctx.request.body)
   let result = await createTableData(User, {
    ...ctx.request.body,
  })
  ctx.response.body = {
    code: 200,
    message: result,
  };
};

module.exports = {
  'GET /': fn_index,
  'POST /signin': fn_signin,
  'POST /register': register_signin,
};