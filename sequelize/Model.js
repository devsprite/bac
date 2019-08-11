var Sequelize = require("sequelize");
var sequelize = new Sequelize("test", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: console.log()
});

var exports = (module.exports = {});
exports.sequelize = sequelize;

/**
 * Role
 */

const Role = sequelize.define(
  "role",
  {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING(255), allowNull: false }
  } //{tableName: 'role', timestamps: false}
);
exports.Role = Role;

const User = sequelize.define(
  "user",
  {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING(255), allowNull: false },
    email: { type: Sequelize.STRING(255), allowNull: false, unique: false }
  },
  {
    //tableName: 'user', timestamps: false,
    underscored: true
  }
);
exports.User = User;

User.belongsTo(Role);

//sequelize.sync({ force: true, logging: console.log });

