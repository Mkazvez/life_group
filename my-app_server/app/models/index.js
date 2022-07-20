const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.mail = require("./mail.model.js")(sequelize, Sequelize);
db.object = require("./object.model.js")(sequelize, Sequelize);
db.news = require("./news.model.js")(sequelize, Sequelize);
// db.employee = require("./employee.model.js")(sequelize, Sequelize);
// db.user = require("./user.model.js")(sequelize, Sequelize);
// db.reportgeneral = require("./reportgeneral.model.js")(sequelize, Sequelize);
// db.order = require("./order.model.js")(sequelize, Sequelize);
// db.result = require("./result.model.js")(sequelize, Sequelize);
// db.department = require("./department.model.js")(sequelize, Sequelize);

module.exports = db;