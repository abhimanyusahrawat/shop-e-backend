/* eslint-disable no-unused-vars */
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      product_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      image_url: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      base_price: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      print_price: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      discount_price: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      has_discount: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      in_stock: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      color_id_list: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      has_color: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      size_id_list: {
        allowNull: true,
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      has_size: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      phone_model_list: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      has_model: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      description: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  },
};
