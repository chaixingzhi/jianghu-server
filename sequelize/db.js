const Sequelize = require('sequelize');

const uuid = require('node-uuid');

const config = require('./config/config-default');

console.log('init sequelize...');

function generateId() {
    let uid = uuid.v4();
    return uid.replace(/\-/g,'');
}

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

const ID_TYPE = Sequelize.STRING(50);

function defineModel(name, attributes) {
    var attrs = {};
    for (let key in attributes) {
        let value = attributes[key];
        if (typeof value === 'object' && value['type']) {
            value.allowNull = value.allowNull || false;
            attrs[key] = value;
        } else {
            attrs[key] = {
                type: value,
                allowNull: false
            };
        }
    }
    attrs.id = {
        type: ID_TYPE,
        primaryKey: true
    };
    attrs.createdAt = {
        type: Sequelize.BIGINT,
        allowNull: false
    };
    attrs.updatedAt = {
        type: Sequelize.BIGINT,
        allowNull: false
    };
    attrs.version = {
        type: Sequelize.BIGINT,
        allowNull: false
    };
    return sequelize.define(name, attrs, {
        tableName: name,
        timestamps: false,
        hooks: {
            beforeValidate: function (obj) {
                let now = Date.now();
                if (obj.isNewRecord) {
                    console.log('will create entity...1' + obj);
                    if (!obj.id) {
                        obj.id = generateId();
                    }
                    obj.createdAt = now;
                    obj.updatedAt = now;
                    obj.version = 0;
                } else {
                    console.log('will update entity...');
                    obj.updatedAt = now;
                    obj.version++;
                }
            }
        }
    });
}

const TYPES = ['STRING', 'INTEGER', 'BIGINT', 'TEXT', 'DOUBLE', 'DATEONLY', 'BOOLEAN'];

var exp = {
    defineModel: defineModel,
    sync: () => {
        sequelize.sync({ force: true }).then(res => {
            // console.log('同步模型：', res)
        }).catch(err => {
            // console.log('错误日志', err)
        })
        // if (process.env.NODE_ENV !== 'production') {
        //     console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)
        //     sequelize.sync({ force: true }).then(res => {
        //       console.log('同步模型：', res)
        //     }).catch(err => {
        //       console.log('错误日志', err)
        //     });
        //     console.log('执行啊: ', process.env.NODE_ENV)
        // } else {
        //     throw new Error('Cannot sync() when NODE_ENV is set to \'production\'.');
        // }
    }
};

for (let type of TYPES) {
    exp[type] = Sequelize[type];
}

exp.ID = ID_TYPE;
exp.generateId = generateId;

module.exports = exp;