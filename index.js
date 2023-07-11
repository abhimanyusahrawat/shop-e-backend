const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');
const route = require('./routes/routes');
const sequelize = require('./connection');

app.use(cors());
app.use(bodyParser.json());

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
testConnection();

app.use('/v1', route);

app.listen(3000, () => {
  console.log('Server is running on p 3000');
});
