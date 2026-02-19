const info = document.getElementById("info");
const btn = document.getElementById("click");
const loc = document.getElementById("location");


async function sunset() {
  const response = await fetch('https://api.sunrise-sunset.org/json?lat=58.5974875&lng=24.9872555&tzid=Europe%2FTallinn');
  const data = await response.json();

  loc.innerHTML = `
    Asukoht: <em>${data.tzid}</em>
  `

  info.innerHTML = `
    <strong>🌅<u>Päikesetõus</u>:</strong> ${data.results.sunrise} <br>
    <strong>🌄<u>Päikeseloojang</u>:</strong> ${data.results.sunset} <br>
    <strong>🌞<u>Päikese keskpäev</u>:</strong> ${data.results.solar_noon} <br>
    <strong>🌇<u>Päikese pikkus</u>:</strong> ${data.results.day_length} <br>
    <strong>🌤️<u>Tsiviilhämaruse algus</u>:</strong> ${data.results.civil_twilight_begin} <br>
    <strong>🌥️<u>Tsiviilhämaruse lõpp</u>:</strong> ${data.results.civil_twilight_end} <br>
    <strong>🌊<u>Merelise hämaruse algus</u>:</strong> ${data.results.nautical_twilight_begin} <br>
    <strong>🌌<u>Merelise hämaruse lõpp</u>:</strong> ${data.results.nautical_twilight_end} <br>
    <strong>🌟<u>Astronoomilisee häramuse algus</u>:</strong> ${data.results.astronomical_twilight_begin} <br>
    <strong>🌙<u>Astronoomilisee häramuse lõpp</u>:</strong> ${data.results.astronomical_twilight_end} <br>
  `;
}

btn.addEventListener("click", function() {
  sunset();
  btn.remove();
})

