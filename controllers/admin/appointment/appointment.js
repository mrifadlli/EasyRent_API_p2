const db = require('../../../db/connection')

const getAppointments = async (req, res) => {
  const appointmentsData = await db.appointments.findAll()
  const msg = 'success get and return all data.'
  return res.json({
    status: 200,
    message: msg,
    data: appointmentsData,
  })
}

const getAppointment = async (req, res) => {
  const appointmentId = req.params.id
  const appointmentsData = await db.appointments.findAll({
    where: { id_appointment: appointmentId },
  })
  const partialMsg = ' get and return all data.'
  return res.json(
    appointmentsData.length === 1
      ? {
          status: 200,
          message: 'success' + partialMsg,
          data: appointmentsData[0],
        }
      : { status: 404, message: 'failed' + partialMsg, data: {} }
  )
}

const editAppointment = async (req, res) => {
  try {
    const appointmentId = req.params.id
    const { appointment } = req.body

    // console.log(req.body)

    await db.appointments.update(appointment, {
      where: { id_appointment: appointmentId },
    })

    res.json({ message: 'Appointment updated successfully' })
  } catch (error) {
    console.error('Error editing appointment:', error)
    res.status(500).json({ error: 'Failed to edit appointment' })
  }
}

const addAppointment = async (req, res) => {
  try {
    const { appointment } = req.body

    const newAppointment = await db.appointments.create(appointment)

    res.json({
      appointment: newAppointment,
    })
  } catch (error) {
    console.error('Error adding appointment:', error)
    res.status(500).json({ error: 'Failed to add appointment' })
  }
}

const deleteAppointment = async (req, res) => {
  const appointmentId = req.params.id
  db.appointments
    .destroy({
      where: { id_appointment: appointmentId },
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
  getAppointments,
  getAppointment,
  editAppointment,
  addAppointment,
  deleteAppointment,
}
