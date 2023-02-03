setInterval(function () {
  //Bogota
  let bogotaElement = document.querySelector("#bogota");
  let bogotaDateElement = bogotaElement.querySelector(".date");
  let bogotaTimeElement = bogotaElement.querySelector(".time");
  let bogotaTime = moment();

  bogotaDateElement.innerHTML = bogotaTime.format("MMMM Do YYYY");
  bogotaTimeElement.innerHTML = `${bogotaTime
    .tz("America/Bogota")
    .format("HH:mm:ss")}`;

  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment();

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime
    .tz("America/Los_Angeles")
    .format("HH:mm:ss")}`;
});

// connect the selector with the info showed bellow
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city-container">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("HH:mm:ss")}</div>
        </div>
  `;
}

let citySelectorElement = document.querySelector("#city-selector");
citySelectorElement.addEventListener("change", updateCity);
