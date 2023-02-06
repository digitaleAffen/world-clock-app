setInterval(function () {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment();

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime
    .tz("America/Los_Angeles")
    .format("HH:mm:ss")}`;

  //Bogota
  let bogotaElement = document.querySelector("#bogota");
  let bogotaDateElement = bogotaElement.querySelector(".date");
  let bogotaTimeElement = bogotaElement.querySelector(".time");
  let bogotaTime = moment();

  bogotaDateElement.innerHTML = bogotaTime.format("MMMM Do YYYY");
  bogotaTimeElement.innerHTML = `${bogotaTime
    .tz("America/Bogota")
    .format("HH:mm:ss")}`;

  //Madrid
  let madridElement = document.querySelector("#madrid");
  let madridDateElement = madridElement.querySelector(".date");
  let madridTimeElement = madridElement.querySelector(".time");
  let madridTime = moment();

  madridDateElement.innerHTML = madridTime.format("MMMM Do YYYY");
  madridTimeElement.innerHTML = `${madridTime
    .tz("Europe/Madrid")
    .format("HH:mm:ss")}`;

  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment();

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = `${tokyoTime
    .tz("Asia/Tokyo")
    .format("HH:mm:ss")}`;

  //Melbourne
  let melbourneElement = document.querySelector("#melbourne");
  let melbourneDateElement = melbourneElement.querySelector(".date");
  let melbourneTimeElement = melbourneElement.querySelector(".time");
  let melbourneTime = moment();

  melbourneDateElement.innerHTML = melbourneTime.format("MMMM Do YYYY");
  melbourneTimeElement.innerHTML = `${melbourneTime
    .tz("Australia/Melbourne")
    .format("HH:mm:ss")}`;
});

// connect the selector with the info showed bellow
function updateCity(event) {
  let cityTimeZone = event.target.value;
  // if (cityTimeZone === "current") {
  //   cityTimeZone = moment.tz.guess();
  // }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  let currentCityTimeZone = moment.tz.guess();
  let currentCityName = currentCityTimeZone.replace("_", " ").split("/")[1];
  let currentCityTime = moment().tz(currentCityTimeZone);

  citiesElement.innerHTML = `
  <div class="city-container">
          <div>
          <h2>📍${currentCityName}</h2>
          <div class="date">${currentCityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${currentCityTime.format("HH:mm:ss")}</div>
        </div>
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
