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



