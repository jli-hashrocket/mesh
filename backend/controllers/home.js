exports.index = (req, res) => {
  console.log(req)
  res.status(200).render('home/index')
}