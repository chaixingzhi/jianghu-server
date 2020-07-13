const {createTableData, findAll,findOne} = require('../utils/sequelize');
const model = require('../sequelize/model');
const {User} = model

var fn_signin = async (ctx, next) => {
  ctx.response.type = 'application/json';
  let result = await findAll(User, {
    ...ctx.request.body
  })
  if(result) {
    ctx.response.body = {
      code: 200,
      message: 'login success',
      data: result[0].dataValues
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
   let result = await createTableData(User, {
    ...ctx.request.body,
  })
  ctx.response.body = {
    code: 200,
    message: result,
  };
};

module.exports = {
  'POST /signin': fn_signin,
  'POST /register': register_signin,
};