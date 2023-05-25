const db = require('../db/connection')

async function getCarsData(id = null) {
  let carsData, transmissionsData, imagesData

  if (id) {
    query = {
      where: {
        id_mobil: id,
      },
    }
    carsData = await db.cars.findAll(query)
    transmissionsData = await db.transmissions.findAll(query)
    imagesData = await db.images.findAll(query)
  } else {
    carsData = await db.cars.findAll()
    transmissionsData = await db.transmissions.findAll()
    imagesData = await db.images.findAll()
  }

  const finalData = carsData.map((car) => {
    let transmissions = transmissionsData
      .filter((t) => t.id_mobil === car.id_mobil)
      .flatMap((transmission) => ({
        transmission_type: transmission.transmission_type,
        speed: transmission.speed,
      }))
    let images = imagesData
      .filter((t) => t.id_mobil === car.id_mobil)
      .flatMap((img) => `${img.img_name}.${img.img_ext}`)
    return {
      ...car.toJSON(),
      transmissions,
      images,
    }
  })

  return finalData
}

module.exports = getCarsData
