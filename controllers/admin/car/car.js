const db = require('../../../db/connection')

const getCars = async (req, res) => {
  const carsData = await db.cars.findAll()
  const msg = 'success get and return all data.'
  return res.json({
    status: 200,
    message: msg,
    data: carsData,
  })
}

const getCar = async (req, res) => {
  const carId = req.params.id
  const carsData = await db.cars.findAll({ where: { id_mobil: carId } })
  const partialMsg = ' get and return all data.'
  return res.json(
    carsData.length === 1
      ? {
          status: 200,
          message: 'success' + partialMsg,
          data: carsData[0],
        }
      : { status: 404, message: 'failed' + partialMsg, data: {} }
  )
}

const editCar = async (req, res) => {
  try {
    const carId = req.params.id
    const { car, transmissions, images } = req.body

    await db.cars.update(car, {
      where: { id_mobil: carId },
    })

    await db.transmissions.destroy({ where: { id_mobil: carId } })
    await db.transmissions.bulkCreate(
      transmissions.map((transmission) => ({
        ...transmission,
        id_mobil: carId,
      }))
    )

    await db.images.destroy({ where: { id_mobil: carId } })
    await db.images.bulkCreate(
      images.map((image) => ({
        ...image,
        id_mobil: carId,
      }))
    )

    res.json({ message: 'Car updated successfully' })
  } catch (error) {
    console.error('Error editing car:', error)
    res.status(500).json({ error: 'Failed to edit car' })
  }
}

const addCar = async (req, res) => {
  try {
    const { car, transmissions, images } = req.body

    const newCar = await db.cars.create(car)
    await Promise.all(
      transmissions.map((transmission) =>
        db.transmissions.create({
          ...transmission,
          id_mobil: newCar.id_mobil,
        })
      )
    )
    await Promise.all(
      images.map((image) =>
        db.images.create({
          ...image,
          id_mobil: newCar.id_mobil,
        })
      )
    )
    return res.json({
      status: 200,
      message: 'success added a new data.',
    })
    // res.status(500).json({
    //   status: 200,
    //   message: 'failed added a new data.',
    // })
  } catch (error) {
    console.error('Error adding car:', error)
    res.status(500).json({
      status: 200,
      message: 'failed added a new data.',
    })
  }
}

const deleteCar = async (req, res) => {
  const carId = parseInt(req.params.id)
  db.cars
    .destroy({
      where: { id_mobil: carId },
    })
    .then(() => {
      console.log('Parent and associated Child records deleted successfully.')
    })
    .catch((error) => {
      console.error('Error deleting Parent:', error)
    })
  res.sendStatus(204)
}

module.exports = {
  getCars,
  getCar,
  editCar,
  addCar,
  deleteCar,
}
