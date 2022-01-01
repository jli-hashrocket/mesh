exports.signup = (req, res) => {
  res.status(200).render('users/signup', { message: req.flash('You have sucessfully signed up!') })
}

exports.login = (req, res) => {
  res.status(200).render('users/login', { message: req.flash('You have sucessfully logged in!')})
}