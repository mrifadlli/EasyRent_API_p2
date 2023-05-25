const db = require('../../../db/connection')

const getTransmissions = async (req, res) => {
  const transmissionsData = await db.transmissions.findAll()
  const msg = 'success get and return all data.'
  return res.json({
    status: 200,
    message: msg,
    data: transmissionsData,
  })
}

const getTransmission = async (req, res) => {
  const carId = req.params.id
  const transmissionsData = await db.transmissions.findAll({
    where: { id_mobil: carId },
  })
  const partialMsg = ' get and return all data.'
  return res.json(
    transmissionsData.length > 0
      ? {
          status: 200,
          message: 'success' + partialMsg,
          data: transmissionsData,
        }
      : { status: 404, message: 'failed' + partialMsg, data: {} }
  )
}

module.exports = {
  getTransmissions,
  getTransmission,
}
