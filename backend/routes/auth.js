const usersController = require('../controllers/users')
const db = require('../config/database');


module.exports = function(app) {

  app.get('/login', usersController.login)
  app.post('/login', usersController.completeLogin)
  app.get('/signup', usersController.signup)
  app.post('/signup', usersController.create)
}
