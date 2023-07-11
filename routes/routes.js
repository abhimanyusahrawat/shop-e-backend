const {
  fetchDevice,
  fetchCategories,
  fetchProduct,
} = require('../controller/deviceController');
const express = require('express');

const route = express.Router();

route.post('/device', fetchDevice);
route.get('/categories', fetchCategories);
route.get('/product/:productId', fetchProduct);
//post
module.exports = route;
