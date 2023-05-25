const db = require('../../../db/connection')

const getImages = async (req, res) => {
  const imagesData = await db.images.findAll()
  const msg = 'success get and return all data.'
  return res.json({
    status: 200,
    message: msg,
    data: imagesData,
  })
}

const getImage = async (req, res) => {
  const carId = req.params.id
  const imagesData = await db.images.findAll({
    where: { id_mobil: carId },
  })
  const partialMsg = ' get and return all data.'
  return res.json(
    imagesData.length > 0
      ? {
          status: 200,
          message: 'success' + partialMsg,
          data: imagesData,
        }
      : { status: 404, message: 'failed' + partialMsg, data: {} }
  )
}

module.exports = {
  getImages,
  getImage,
}
