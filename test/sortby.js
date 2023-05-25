const GetCarsData = require('./getCarsData')

function sortby(sortby, data = null) {
  if (!data) {
    data = GetCarsData()
  }

  // data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]

  // data =
  //   sortby[0] === '+'
  //     ? sortData('asc', sortby.slice(1), data)
  //     : sortby[0] === '-' && sortData('desc', sortby.slice(1), data)

  sorbyProps = {
    id: 'EasyRentData.ID',
    popularity: 'EasyRentData.PopularityIndex',
    'release-year': 'CarData.ReleaseYear',
    'horse-power': 'CarData.Power.HP',
    torque: 'CarData.Power.TQ',
  }

  // sorbyProps = { id: 'id' }
  data =
    sortby[0] === '+'
      ? simplSortData('asc', sorbyProps[sortby.slice(1)], data)
      : sortby[0] === '-' &&
        simplSortData('desc', sorbyProps[sortby.slice(1)], data)

  // console.log(data)
  return data
}

function sortData(sortOrder, sortby, data = null) {
  console.log(sortby)
  const sortOrderMultiplier = sortOrder === 'asc' ? 1 : -1
  if (sortby === 'popularity') {
    data.sort(
      (a, b) =>
        sortOrderMultiplier *
        (a.EasyRentData.PopularityIndex - b.EasyRentData.PopularityIndex)
    )
  } else if (sortby === 'id') {
    data.sort(
      (a, b) => sortOrderMultiplier * (a.EasyRentData.ID - b.EasyRentData.ID)
    )
  } else if (sortby === 'release-year') {
    data.sort(
      (a, b) =>
        sortOrderMultiplier * (a.CarData.ReleaseYear - b.CarData.ReleaseYear)
    )
  } else if (sortby === 'horse-power') {
    data.sort(
      (a, b) => sortOrderMultiplier * (a.CarData.Power.HP - b.CarData.Power.HP)
    )
  } else if (sortby === 'torque') {
    data.sort(
      (a, b) => sortOrderMultiplier * (a.CarData.Power.TQ - b.CarData.Power.TQ)
    )
  } else {
    data = { error: 'sortby query is invalid.' }
  }
  return data
}

function simplSortData(order, property, data) {
  const properties = property.split('.')
  const compare = (a, b, i) => {
    const prop = properties[i]
    if (a[prop] < b[prop]) return order === 'asc' ? -1 : 1
    if (a[prop] > b[prop]) return order === 'asc' ? 1 : -1
    if (i < properties.length - 1) return compare(a[prop], b[prop], i + 1)
    return 0
  }
  return data.sort((a, b) => compare(a, b, 0))
}

module.exports = sortby
