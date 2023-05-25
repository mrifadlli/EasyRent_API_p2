const _ = {
  cars: cars,
  images: images,
  orders: orders,
  transmissions: transmissions,
  users: users,
}

const sample_data = {
  id_mobil: 0,
  model: 'model X',
  brand: 'Tesla',
  release_year: 2022,
  price: 250000,
  engine: 'idk what',
  HP: 0,
  TRQ: 0,
  transmissions: {
    transmission_type: 'AT',
    speed: 6,
  },
}

const cars = {
  id_mobil: 0,
  model: 'model X',
  brand: 'Tesla',
  release_year: 2022,
  price: 250000,
  engine: 'idk what',
  HP: 0,
  TRQ: 0,
}

const images = {
  id_gambar: 0,
  id_mobil: 0,
  img_ext: 'png',
}

const orders = {
  id_order: 0,
  id_user: 0,
  id_mobil: 0,
  timestamp: 0,
  pickup_date: 0,
  return_date: 0,
}

const transmissions = {
  id_transmission: 0,
  id_mobil: 0,
  transmission_type: 'AT',
  speed: 6,
}

const users = {
  id_user: 0,
  email: 'test@example.com',
  phone: '626969696969',
  role: 'user',
  first_name: 'test',
  last_name: '',
}
