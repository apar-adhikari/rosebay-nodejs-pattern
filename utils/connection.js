const Sequelize = require('sequelize');
const { db } = require('../config/config');

const sequelize = new Sequelize(db.name, db.userName, db.pass, {
    dialect: 'mysql',
    operatorsAliases: false,
    host: db.server,
    dialectOptions: {
        encrypt: true
    },
    logging: false
});

DataTypes.DATE.prototype._stringify = function _stringify(date, options) {
    date = this._applyTimezone(date, options);
    return date.format('YYYY-MM-DD HH:mm:ss.SSS')
};

sequelize.authenticate().then((err) => {
    if (process.env.NODE_ENV !== 'TEST') console.log('Connection successful');
}).catch((err) => {
    console.error('Unable to connect to database', err);
});

module.exports = sequelize;