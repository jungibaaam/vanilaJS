// localhost:port/index.html 로 접속하기. 개인정보보안상 작동하는 방법
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "49c1065a2a867b34f76de48be5bb62f9";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    console.log(url)
    fetch(url)
        .then(response => response.json())
        .then(data => {
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}
function onGeoError() {
    alert("Cna't find you, No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);