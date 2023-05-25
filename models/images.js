module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    'images',
    {
      id_gambar: {
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
      img_name: {
        type: DataTypes.STRING(5),
        allowNull: false,
      },
      img_ext: {
        type: DataTypes.STRING(5),
        allowNull: false,
      },
      blob: {
        type: DataTypes.BLOB,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  )

  // Define the associations
  const Car = sequelize.models.cars
  Image.belongsTo(Car, {
    foreignKey: 'id_mobil',
    targetKey: 'id_mobil',
    onDelete: 'CASCADE',
  })
  // Car.hasMany(Image, {
  //   onDelete: 'CASCADE',
  // })

  return Image
}
