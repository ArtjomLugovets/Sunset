const info = document.getElementById("info");
const btn = document.getElementById("click");

async function sunset() {
  const response = await fetch('https://api.sunrise-sunset.org/json?lat=58.5974875&lng=24.9872555&tzid=Europe%2FTallinn');
  const data = await response.json();

  info.innerHTML = `
    <strong>Päikesetõus:</strong> ${data.results.sunrise} <br>
    <strong>Päikeseloojang:</strong> ${data.results.sunset} <br>
    <strong>Päikese keskpäev:</strong> ${data.results.solar_noon} <br>
    <strong>Päikese pikkus:</strong> ${data.results.day_length} <br>
    <strong>Tsiviilhämaruse algus:</strong> ${data.results.civil_twilight_begin} <br>
    <strong>Tsiviilhämaruse lõpp:</strong> ${data.results.civil_twilight_end} <br>
    <strong>Merelise hämaruse algus:</strong> ${data.results.nautical_twilight_begin} <br>
    <strong>Merelise hämaruse lõpp:</strong> ${data.results.nautical_twilight_end} <br>
    <strong>Astronoomilisee häramuse algus:</strong> ${data.results.astronomical_twilight_begin} <br>
    <strong>Astronoomilisee häramuse lõpp:</strong> ${data.results.astronomical_twilight_end} <br>
  `;
}

btn.addEventListener("click", function() {
  sunset();
  btn.remove();
})

