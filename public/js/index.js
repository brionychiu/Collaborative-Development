import mainView from "./view.js";
import { getWeatherData } from "./api.js";

const showWeatherInfo = async () => {
  try {
    const location = document.querySelector("select").value;
    const weatherData = await getWeatherData(location);
    mainView.render(weatherData);
  } catch (err) {
    throw err;
  }
};

const init = async () => {
  try {
    await showWeatherInfo();
    mainView.addHandlerSelectBox(showWeatherInfo);
  } catch (err) {
    mainView.renderError();
    console.error(err);
  }
};

init();

// // 額外的功能(未用到)：依使用者所在地顯示天氣資料
// const getPosition = () => {
//   return new Promise((resolve, reject) =>
//     navigator.geolocation.getCurrentPosition(resolve, reject, {
//       timeout: 5000,
//     })
//   );
// };

// const getUserLocation = async () => {
//   try {
//     const { coords } = await getPosition();
//     const res = await fetch(
//       `https://us1.locationiq.com/v1/reverse.php?key=pk.e53e999f9c6031992d59c4e34b6a1d54&lat=${coords.latitude}&lon=${coords.longitude}&zoom=10&accept-language=cn&format=json`
//     );
//     const { address } = await res.json();
//     const location = address.city;
//     return location;
//   } catch (err) {
//     console.error(err);
//     return null;
//   }
// };

// const showUserLocationWeather = async () => {
//   const location = await getUserLocation();
//   if (!location) return;
//   const weatherData = await getWeatherData(location);
//   mainView.render(weatherData);
// };

// // locationiq free tier:
// // Requests /day |	Rate limit /second
// // 5,000 /day | 2 /sec
