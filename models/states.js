const Sequelize = require('sequelize');
const db = require("../config/database")

const StateSchema = db.define("State", {
  state: {
    type: Sequelize.STRING,
  },
  website: {
    type: Sequelize.STRING,
  },
  idd: {
    type: Sequelize.STRING,
  },
  instOne: {
    type: Sequelize.STRING,
  },
  instTwo: {
    type: Sequelize.STRING,
  },
  instThree: {
    type: Sequelize.STRING,
  },
  tccLink: {
    type: Sequelize.STRING,
  },
});

module.exports = StateSchema