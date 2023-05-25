// const rawJsonData = require('./sample_data.json')
const rawJsonData = require('./test_data.json')

const carsData = rawJsonData.map(({ transmissions, images, ...car }) => car)

const transmissionsData = rawJsonData.flatMap(({ id_mobil, transmissions }) =>
  transmissions.map((transmission) => ({
    id_mobil,
    ...transmission,
  }))
)

const gambarData = rawJsonData.flatMap(({ id_mobil, images }) =>
  images.map((gambar) => ({
    id_mobil,
    ...gambar,
  }))
)

async function main(db) {
  try {
    await db.cars.bulkCreate(carsData)
    await db.transmissions.bulkCreate(transmissionsData)
    await db.images.bulkCreate(gambarData)
    console.log('Data migrated successfully!')
  } catch (err) {
    console.error('Error while migrating data:', err)
  }
}

module.exports = main
