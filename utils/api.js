const Model = require('../sequelize/model');
const {createTableData, findOne, findAll, editTableData, deleteTableData} = require('./sequelize');

exports.Api = {
  create: async function(ctx, tableName) {
    ctx.response.type = 'application/json';
    return createTableData(Model[tableName], {
      ...ctx.request.body,
    })
  },
  getOne: async function(ctx, tableName) {
    ctx.response.type = 'application/json';
    return findOne(Model[tableName], {
      id: ctx.params.id
    })
  },
  getAll: async function(ctx, tableName) {
    ctx.response.type = 'application/json';
    return findAll(Model[tableName], {
      ...ctx.request.body
    })
  },
  edit: async function(ctx, tableName) {
    ctx.response.type = 'application/json';
    return editTableData(Model[tableName], {
      ...ctx.request.body,
    })
  },
  deleteOne: async function(ctx, tableName) {
    return deleteTableData(Model[tableName], ctx.params.id)
  }
}