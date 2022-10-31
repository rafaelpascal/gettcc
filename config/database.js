const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
module.exports = new Sequelize('statetcc', 'root', '', {
    host: 'localhost',
    dialect: "mysql"
  });