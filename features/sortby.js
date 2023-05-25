const GetCarsData = require('./getCarsData')

function sortby(sortby, order, data = null) {
  if (!data) {
    data = GetCarsData()
  }
  data = [...data]
  sorbyProps = {
    id: 'id_mobil',
    popularity: 'popularity_idx',
    release: 'release_year',
    price: 'price',
    hp: 'HP',
    trq: 'TRQ',
  }

  data = simplSortData(order, sorbyProps[sortby], data)

  return data
}

function simplSortData(order, property, data) {
  const properties = property.split('.')
  const compare = (a, b, i) => {
    const prop = properties[i]
    if (a[prop] < b[prop]) return order === 'asc' ? -1 : order === 'desc' && 1
    if (a[prop] > b[prop]) return order === 'asc' ? 1 : order === 'desc' && -1
    if (i < properties.length - 1) return compare(a[prop], b[prop], i + 1)
    return 0
  }
  return data.sort((a, b) => compare(a, b, 0))
}

module.exports = sortby
