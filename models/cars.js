module.exports = (sequelize, DataTypes) => {
  const cars = sequelize.define(
    'cars',
    {
      id_mobil: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        type: DataTypes.INTEGER,
      },
      popularity_idx: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      release_year: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true,
          min: 1900,
          max: new Date().getFullYear(),
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true,
          min: 0,
        },
      },
      engine: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      HP: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true,
          min: 0,
        },
      },
      TRQ: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: true,
          min: 0,
        },
      },
    },
    {
      timestamps: false,
    }
  )

  // const fs = require('fs')

  // const rawJsonData = JSON.parse(fs.readFileSync('sample_data.json'))
  // const carJsonData = () => {
  //   var r = []
  //   rawJsonData.forEach((el) => {
  //     r.push({
  //       id_mobil: el.id_mobil,
  //       popularity_idx: popularity_idx,
  //       model: el.model,
  //       brand: el.brand,
  //       release_year: el.release_year,
  //       price: el.price,
  //       engine: el.engine,
  //       HP: el.HP,
  //       TRQ: el.TRQ,
  //     })
  //   })
  //   return r
  // }

  // cars
  //   .bulkCreate(carJsonData)
  //   .then(() => {
  //     console.log('Data migrated successfully!')
  //   })
  //   .catch((err) => {
  //     console.error('Error while migrating data:', err)
  //   })

  return cars
}
