module.exports = (sequelize, DataTypes) => {
  const Transmission = sequelize.define(
    'transmissions',
    {
      id_transmission: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
      id_mobil: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      transmission_type: {
        type: DataTypes.ENUM('AT', 'MT'),
        allowNull: false,
      },
      speed: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  )

  // Define the association
  const Car = sequelize.models.cars
  Transmission.belongsTo(Car, {
    foreignKey: 'id_mobil',
    targetKey: 'id_mobil',
    onDelete: 'CASCADE',
  })
  // Car.hasMany(Transmission, {
  //   onDelete: 'CASCADE',
  // })

  return Transmission
}
