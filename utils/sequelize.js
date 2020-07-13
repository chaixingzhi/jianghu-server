var uuid = require('node-uuid');
const {formatParam} = require('./tools')

const createTable = (table) => {
  table.sync({ force: true });
}

const createTableData = (table, data) => {
  return table.create(data)
}

const findAll = (table, findData) => {
  console.log('findData: ', findData)
  return table.findAll({
    ...formatParam(findData)
  })
}

const findOne = (table, findData) => {
  return table.findOne({
    where: findData
  })
}

const editTableData = (table, data) => {
  return table.update(data, {
    where: {
      id: data.id
    }
  })
}


const deleteTableData = (table, data) => {
  return table.destroy({
    where: {
      id: data
    }
  })
}

module.exports = {
  deleteTableData,
  editTableData,
  findOne,
  findAll,
  createTableData,
  createTable
}