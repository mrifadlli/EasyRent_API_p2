const db = require('../db/connection')

function getCarsData() {
  // const carsData = [
  //   {
  //     EasyRentData: {
  //       ID: 1,
  //       PopularityIndex: 6.5,
  //       Imgs: ['2.jpg'],
  //     },
  //     CarData: {
  //       Brand: 'Chevrolet',
  //       Model: 'Corvette Stingray',
  //       ReleaseYear: 2023,
  //       Transmissions: {
  //         AT: '8-speed dual-clutch',
  //         MT: '7-speed',
  //       },
  //       Engine: '6.2-liter naturally aspirated V8',
  //       Power: {
  //         HP: 495,
  //         TQ: 470,
  //       },
  //     },
  //   },
  //   {
  //     EasyRentData: {
  //       ID: 2,
  //       PopularityIndex: 8.7,
  //       Imgs: ['1.jpg'],
  //     },
  //     CarData: {
  //       Brand: 'Porsche',
  //       Model: 'Porsche 718 Cayman GT4',
  //       ReleaseYear: 2023,
  //       Transmissions: {
  //         MT: '6-speed',
  //       },
  //       Engine: '4.0-liter naturally aspirated flat-six',
  //       Power: {
  //         HP: 414,
  //         TQ: 309,
  //       },
  //     },
  //   },
  //   {
  //     EasyRentData: {
  //       ID: 3,
  //       PopularityIndex: 7.9,
  //       Imgs: ['3.jpg'],
  //     },
  //     CarData: {
  //       Brand: 'Ford',
  //       Model: 'Mustang Mach-E GT',
  //       ReleaseYear: 2022,
  //       Transmissions: {
  //         AT: 'Electric',
  //       },
  //       Engine: 'Dual electric motors',
  //       Power: {
  //         HP: 480,
  //         TQ: 634,
  //       },
  //     },
  //   },
  //   {
  //     EasyRentData: {
  //       ID: 4,
  //       PopularityIndex: 1,
  //       Imgs: ['1.jpg'],
  //     },
  //     CarData: {
  //       Brand: 'Porsche',
  //       Model: 'Porsche 911',
  //       ReleaseYear: 2022,
  //       Transmissions: {
  //         AT: '8-speed',
  //         MT: '7-speed',
  //       },
  //       Engine: '3.0-liter twin-turbocharged flat-six',
  //       Power: {
  //         HP: 572,
  //         TQ: 553,
  //       },
  //     },
  //   },
  //   {
  //     EasyRentData: {
  //       ID: 5,
  //       PopularityIndex: 9.2,
  //       Imgs: ['1.jpg'],
  //     },
  //     CarData: {
  //       Brand: 'Lamborghini',
  //       Model: 'Huracán STO',
  //       ReleaseYear: 2022,
  //       Transmissions: {
  //         AT: '7-speed dual-clutch',
  //       },
  //       Engine: '5.2-liter naturally aspirated V10',
  //       Power: {
  //         HP: 640,
  //         TQ: 417,
  //       },
  //     },
  //   },
  // ]

  const carsData = db.cars.findAll()
  return carsData
}

module.exports = getCarsData;
