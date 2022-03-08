// Init storage
const storage = new Storage()
// Get stored location data
const weatherLocation = storage.getLocationData()

const weather = new Weather(weatherLocation.city, weatherLocation.state)

const ui = new UI()

document.addEventListener('DOMContentLoaded', getWeather)

// change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value
  const state = document.getElementById('state').value

  // change location
  weather.changeLocation(city, state)

  // set location in LS
  storage.setLocationData(city, state)

  // fet and display weather
  getWeather()

  $('#locModal').modal('hide')
})

function getWeather(){
  weather.getWeather()
    .then(results => {
      ui.paint(results)
    })
    .catch(err => console.log(err))
} 