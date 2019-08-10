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

