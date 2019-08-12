var Sequelize = require("sequelize");
var sequelize = new Sequelize("test", "root", "root", {
    host: "localhost",
    dialect: "mysql",
    logging: console.log()
});

var exports = (module.exports = {});
exports.sequelize = sequelize;

const Model = Sequelize.Model;


class User extends Model {}
User.init({
    name: Sequelize.STRING,
    email: Sequelize.STRING
}, {
    sequelize,
    modelName: 'user'
});

class Project extends Model {}
Project.init({
    name: Sequelize.STRING
}, {
    sequelize,
    modelName: 'project'
});

// HasOne et BelongsTo insère la clé d'association dans différents modèles les uns des autres. 
// HasOne insère la clé d'association dans le modèle cible, 
// tandis que BelongsTo insère la clé d'association dans le modèle source .

User.hasOne(Project);
User.belongsTo(Project);


sequelize.sync({
    force: true,
    logging: console.log
});