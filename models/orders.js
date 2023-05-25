module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    'orders',
    {
      id_order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
      id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_mobil: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      timestamp: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      pickup_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      return_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  )

  Order.belongsTo(sequelize.models.users, {
    foreignKey: 'id_user',
    targetKey: 'id_user',
  })
  Order.belongsTo(sequelize.models.cars, {
    foreignKey: 'id_mobil',
    targetKey: 'id_mobil',
  })

  // const Car = sequelize.models.cars
  // Order.belongsTo(Car, {
  //   foreignKey: 'id_mobil',
  //   targetKey: 'id_mobil',
  // })

  return Order
}
