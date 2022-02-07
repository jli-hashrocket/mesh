const usersController = require('../controllers/users')
const LocalStrategy = require('passport-local');
const crypto = require('crypto');
const db = require('../config/database');


module.exports = function(app, passport) {

  passport.use(new LocalStrategy(function verify(username, password, cb) {
    db.get('SELECT rowid AS id, * FROM users WHERE username = ?', [ username ], function(err, row) {
      if (err) { return cb(err); }
      if (!row) { return cb(null, false, { message: 'Incorrect username or password.' }); }

      crypto.pbkdf2(password, row.salt, 310000, 32, 'sha256', function(err, hashedPassword) {
        if (err) { return cb(err); }
        if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
          return cb(null, false, { message: 'Incorrect username or password.' });
        }
        return cb(null, row);
      });
    });
  }));
  
  app.get('/login', usersController.login)
  app.get('/signup', usersController.signup)
  app.post('/signup', usersController.create)
}
