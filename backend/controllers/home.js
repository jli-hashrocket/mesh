exports.index = (req, res) => {
  console.log('home')
  res.status(200).render('home/index')
}