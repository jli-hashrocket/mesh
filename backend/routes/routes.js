const homeController = require('../controllers/home');
const usersController = require('../controllers/users')

module.exports = function(app, passport) {
  app.get('/', homeController.index);
  app.get('/login', usersController.login)
  app.get('/signup', usersController.signup)
}