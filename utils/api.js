const Model = require('../sequelize/model');
const {createTableData} = require('./sequelize'); 

exports.Api = {
  create: async function(ctx, tableName) {
    ctx.response.type = 'application/json';
    return createTableData(Model[tableName], {
      ...ctx.request.body,
    })
  },
  getOne: async function(ctx, tableName) {
    ctx.response.type = 'application/json';
    return createTableData(Model[tableName], {
      ...ctx.request.body,
    })
  }
}