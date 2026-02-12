async function sunset() {
  const response = await fetch('https://api.sunrise-sunset.org/json?lat=58.5974875&lng=24.9872555&tzid=Europe%2FTallinn');
  const data = await response.json();
  console.log(data);
}
sunset()