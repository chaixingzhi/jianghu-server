var uuid = require('node-uuid');

const createTable = (table) => {
  table.sync({ force: true });
}

exports.createTable = createTable;

const createTableData = (table, data) => {
  return table.create(data)
}

exports.createTableData = createTableData;


const findAll = (table, findData) => {
  return table.findAll({
    where: findData
  })
}

exports.findAll = findAll;


const findOne = (table, findData) => {
  return table.findOne({
    where: findData
  })
}

exports.findOne = findOne;