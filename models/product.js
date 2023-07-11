'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {}
  Products.init(
    {
      product_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      image_url: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      base_price: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      print_price: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      discount_price: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      has_discount: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      in_stock: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      color_id_list: {
        allowNull: false,
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      has_color: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      size_id_list: {
        allowNull: true,
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      has_size: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      phone_model_list: {
        allowNull: false,
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      has_model: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      description: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'Products',
      timestamps: false,
      underscored: true,
      tableName: 'Products',
    },
  );
  return Products;
};
