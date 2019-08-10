const Sequelize = require('sequelize');


// **************************************************************
// Connexion
// **************************************************************
const sequelize = new Sequelize('test', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


// **************************************************************
// Model
// **************************************************************
const User = sequelize.define('user', {
    // attributes
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING
        // allowNull defaults to true
    }
}, {
        // options
    });


// **************************************************************
// Create user
// **************************************************************

// Note: using `force: true` will drop the table if it already exists
User.sync({ force: false }).then(() => {
    // Now the `users` table in the database corresponds to the model definition
    return User.create({
        firstName: 'John',
        lastName: 'Hancock'
    });
});



// **************************************************************
// Find user
// **************************************************************
User.findAll().then(users => {
    console.log("All users:", JSON.stringify(users, null, 4));
});



// **************************************************************
// Update user
// **************************************************************
User.update({
    firstName: 'Dominique'
}, {
        where: {
            id: 8
        }
    }).then(() => {
        User.findAll().then(users => {
            console.log("Users updated:", JSON.stringify(users, null, 4));
        });
    })

// **************************************************************
// Destroy User
// **************************************************************

User.destroy({
    where: {
        firstName: 'Dominique'
    }
}).then(() => {
    console.log("Users deleted: ");

})