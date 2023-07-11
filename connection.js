const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('shop_e', 'ShopE', '12345678', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
