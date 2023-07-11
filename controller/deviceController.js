const Service = require('../service/cookieService');

class Controller {
  static async fetchDevice(req, res) {
    const { deviceToken } = req.body;
    if (!deviceToken || deviceToken.trim === '' || deviceToken === 'null') {
      return res.status(400).json({ message: 'Invalid or empty device token' });
    }
    const device = await Service.getDevice(parseInt(deviceToken));
    res.status(200).json(device);
  }

  static async fetchCategories(req, res) {
    const categories = await Service.getCategories();
    console.log('controller');
    console.log(categories);
    res.status(200).json(categories);
  }

  static async fetchProduct(req, res) {
    const product_id = req.params.productId;

    if (!product_id || product_id.trim === '' || product_id === 'null') {
      return res.status(400).json({ message: 'Invalid or empty product Id' });
    }

    try {
      const product = await Service.getProduct(parseInt(product_id));

      res.status(200).json(product);
    } catch (err) {
      if (err.message.includes('product not found ')) {
        res.status(404).json({ error: err.message });
      } else {
        res.status(500).json({ error: 'Internal server error' });
      }
    }
  }
}
module.exports = Controller;
