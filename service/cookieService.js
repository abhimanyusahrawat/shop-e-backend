const { Device, Products, Category } = require('../models');

class Service {
  static async getDevice(deviceToken) {
    try {
      const result = await Device.findOne({
        where: { session_id: deviceToken },
        raw: true,
      });
      console.log(result);
      if (result) {
        return result;
      }
      return `Device Token not found with tokenId ${deviceToken}`;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  static async getCategories() {
    try {
      const categories = await Category.findAll({ raw: true });

      if (categories.length > 0) {
        return categories;
      } else {
        return 'Categories not found';
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  static async getProduct(productId) {
    try {
      const result = await Products.findOne({
        where: { product_id: productId },
        raw: true,
      });
      if (result) {
        return result;
      } else {
        return `Product not found with productId ${productId}`;
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}

module.exports = Service;
