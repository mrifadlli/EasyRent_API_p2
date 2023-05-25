module.exports = (sequelize, DataTypes) => {
  const Appointments = sequelize.define(
    'appointment',
    {
      id_appointment: {
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
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user_phone: {
        type: DataTypes.STRING(15),
        allowNull: true,
      },
      pickup_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      return_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      is_done: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      timestamps: true,
    }
  )

  Appointments.belongsTo(sequelize.models.users, {
    foreignKey: 'id_user',
    targetKey: 'id_user',
  })
  Appointments.belongsTo(sequelize.models.cars, {
    foreignKey: 'id_mobil',
    targetKey: 'id_mobil',
  })

  return Appointments
}
