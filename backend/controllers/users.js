const passport = require('../config/passport');

exports.signup = (req, res) => {
  res.status(200).render('users/signup', { message: req.flash('You have sucessfully signed up!') })
}

exports.create = (req, res) => {
  
}

exports.login = (req, res) => {
  res.status(200).render('users/login', { message: req.flash('You have sucessfully logged in!')})
}

exports.completeLogin = (req, res, next) => {
  passport.authenticate("local", function(err, user, info){
    if (err) {
      return res.status(400).json({ errors: err });
    }

    if  (!user) {
      return res.status(400).json({ errors: "No user found" });
    }
    return res.status(200).json({ success: `logged in ${user.id}`});
  })(req, res, next);
}