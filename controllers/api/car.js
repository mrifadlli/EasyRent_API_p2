const GetCarsData = require('../../features/getCarsData')
const Sortby = require('../../features/sortby')

const getCars = async (req, res) => {
  let carsData = await GetCarsData()
  let msg = 'success get and return all data.'

  if (carsData.length < 1) {
    return res.json({
      status: 404,
      message: 'no car found. smh.',
      data: {},
    })
  }

  if (req.query.sortby) {
    sorted = theyWantSort(req, carsData)
    carsData = sorted.e ? carsData : sorted.data
    msg = !sorted.e
      ? 'success get, sort, and return all data.'
      : 'success get and return all data.'
    msg += sorted.e
      ? ` But got ${
          sorted.e.length > 1 ? 'minor errors' : 'a minor error'
        }: ${sorted.e.join(', ')}.`
      : ''
  }

  return res.json({
    status: 200,
    message: msg,
    data: carsData,
  })
}

function theyWantSort(req, data) {
  data = [...data]
  let sortby, order
  let e = []

  const sorbyProps = ['id', 'popularity', 'release', 'price', 'hp', 'trq']
  const sortbyRaw = req.query.sortby
  if (!sorbyProps.includes(sortbyRaw)) {
    e.push(`invalid sortby prop ('${sortbyRaw}')`)
  }
  sortby = sortbyRaw

  const sorbyOrders = ['asc', 'desc']
  const orderRaw = req.query.order
  if (req.query.order) {
    if (!sorbyOrders.includes(orderRaw)) {
      e.push(`invalid sortby order ('${orderRaw}')`)
    }
    order = orderRaw
  } else {
    order = 'asc'
  }

  if (e.length > 0) {
    return { e: e, data: data }
  }

  data = Sortby(sortby, order, data)

  return { e: false, data: data }
}

const getCar = async (req, res) => {
  let carsData
  const carID = req.params.id
  carsData = await GetCarsData(carID)

  // console.log(carsData)

  return res.json(
    carsData.length === 1
      ? {
          status: 200,
          message: 'success get and return all data.',
          data: carsData[0],
        }
      : { status: 404, msg: 'car not found.', data: {} }
  )
}

module.exports = {
  getCars,
  getCar,
}
