const getHi = (req, res) => {
  res.json('hi')
}

const repeatHi = (req, res) => {
  const body = req.body
  console.log(body)
  res.json({ got: 'it', ...body })
}

module.exports = {
  getHi,
  repeatHi,
}
