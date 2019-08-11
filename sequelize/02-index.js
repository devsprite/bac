var Model = require("./Model");

/**
 * Create user with role
 */
Model.User.create(
  {
    name: "test",
    email: "test7@gmail.com",
    role: { name: "test" }
  },
  {
    include: [Model.Role]
  }
)
  .then(user => {
    console.log("User created: ");
  })
  .catch(error => {
    console.log(error);
  });

/**
 * Find all users
 */
// Model.User.findAll()
//   .then(users => {
//     console.log('Users: ', users);
//   })
//   .catch(function(error) {
//     console.log('Errors: ', error);
//   });

/**
 * Find user by idF
 */
// let id = 1;
// Model.User.findByPk(id, {
//     include: [{model: Model.Role}]
// }).then(user => {
//     console.log('user role name: ', user.role.name)
// })
