class mainView {
  _parentElement = document.querySelector("main");

  render(data) {
    if (!data) this.renderError();
    document.querySelector(
      ".background_cover"
    ).innerHTML = `<img src=${data.image} alt="${data.location}照片">`;

    this._clear();
    const markup = this._generateMarkup(data);
    this._parentElement.insertAdjacentHTML("beforeend", markup);
  }

  _getWeatherImg(weather) {
    if (weather.includes("雷")) {
      return "./public/Images/storm.png";
    } else if (weather.includes("雨")) {
      return "./public/Images/cloudy-rainy.png";
    } else if (weather.includes("陰") || weather.includes("多雲")) {
      return "./public/Images/cloudy-sunny.png";
    } else {
      return "./public/Images/sun.png";
    }
  }

  _generateMarkup(data) {
    const imageDay1Src = this._getWeatherImg(
      data.weatherToday.weatherExpression
    );
    return `
        <div class="day1">
          <div class="date">${data.weatherToday.date}</div>
          <div class="weather_img"><img src="${imageDay1Src}"/></div>
          <div class="now_temp">溫度：${data.weatherToday.temperature}°C</div>
          <div class="temp">
              <span class="comfortIndex">${data.weatherToday.comfortIndex}</span>
          </div>
          <div class="humidity">濕度：${data.weatherToday.relativeHumidity}%</div>
          <div class="chance_rain">降雨機率：${data.weatherToday.probabilityOfPrecipitation}%</div>
        </div>
    `;
  }

  addHandlerSelectBox(handler) {
    const selectElement = document.querySelector("select");
    selectElement.addEventListener("change", handler);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  renderError(err = "出了點小trouble...(☍﹏⁰)") {
    const markup = `
    <div class="error">${err}</div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new mainView();
