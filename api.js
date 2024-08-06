

const outputElement = document.getElementById('weather-output');

function getWeather() {
  fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/lake%20buena%20vista%20florida?unitGroup=us&elements=datetime%2Ctempmax%2Ctempmin%2Ctemp%2Cfeelslike%2Chumidity%2Cprecipprob%2Cuvindex&key=6856BM8BW8WNDFW7BSPKV3NB7&contentType=json", {
    "method": "GET",
    "headers": {
    }
    })
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.error(err);
  });
  
}