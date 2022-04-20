let todayDate = new Date();
let today =
  todayDate.getFullYear() +
  "-" +
  String(todayDate.getMonth() + 1).padStart(2, "0") +
  "-" +
  todayDate.getDate();
let tomorrow =
  todayDate.getFullYear() +
  "-" +
  String(todayDate.getMonth() + 1).padStart(2, "0") +
  "-" +
  (todayDate.getDate() + 1);
let afterTomorrow =
  todayDate.getFullYear() +
  "-" +
  String(todayDate.getMonth() + 1).padStart(2, "0") +
  "-" +
  (todayDate.getDate() + 2);

let images = {
  宜蘭縣: "https://braunvilla.com/assets/images/activity-1.jpg",
  花蓮縣:
    "https://e.share.photo.xuite.net/hideki_j13/1ee3477/20432130/1224786805_x.jpg",
  臺東縣: "https://tour.taitung.gov.tw/image/23681/1024x768",
  澎湖縣:
    "https://www.penghu-nsa.gov.tw/FileDownload/TravelInformation/Big/20140814171704737.jpg",
  金門縣:
    "https://kuolife.com/wp-content/uploads/2021/03/c23b7a26378726051e5cc566899377798_62745916_210324_23.jpg",
  連江縣: "https://www.matsu-nsa.gov.tw/FileArtPic.ashx?id=2834&w=1280&h=960",
  臺北市:
    "https://image.cdn-eztravel.com.tw/vOyaHzcdInTcEr2C-Q0XFK8fMuUfJpzotD-h5Y3wQBQ/g:ce/aHR0cHM6Ly92YWNhdGlvbi5jZG4tZXp0cmF2ZWwuY29tLnR3L3BvaS90dy9UUEUvVGFpcGVpIDEwMS9zaHV0dGVyc3RvY2tfMjE1MTMzMDcwLmpwZw.jpg",
  新北市:
    "https://newtaipei.travel/content/images/attractions/27525/1920x1080_attractions-image-fwfaxumoiegq42wwkiwkpg.jpg",
  桃園市:
    "https://web.taoyuan-airport.com/api/imagecrop/coverImage/186FED37-A05C-EC11-80F4-000C29A1B907",
  臺中市:
    "http://www.hotelkuei.com.tw/upload/fac_b/tw_fac_list_19a29_jzt9fk8rw6.jpg",
  臺南市:
    "https://pic.pimg.tw/anrine910070/1604132665-3940537103-g.jpg",
  高雄市: "https://www.85skyinn.com/upfile/20200901151721-155.jpg",
  基隆市:
    "https://www.mirrormedia.com.tw/assets/images/20200716111500-6d47efbe6ba4c5183c1989c3d7d9be16-mobile.jpg",
  新竹縣:
    "https://image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fstorage.googleapis.com%2Fsmiletaiwan-cms-cwg-tw%2Farticle%2F201805%2Farticle-5af42aa14d227.jpg/?w=1366&format=webp",
  新竹市:
    "https://taiwan.sharelife.tw/tw-feat-pres-img/50958/4212271020341316.jpg",
  苗栗縣:
    "https://f.share.photo.xuite.net/lsg2006/1fff97d/20375925/1196635400_x.jpg",
  彰化縣:
    "https://imgcdn.cna.com.tw/www/WebPhotos/1024/20201027/1151x768_20201027000137.jpg",
  南投縣: "https://pic.pimg.tw/anrine910070/1645444867-25636759-g.jpg",
  雲林縣:
    "https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-08/4480a1b0-dc70-11ea-bfdf-b698ef096cd1",
  嘉義縣:
    "https://www.ali-nsa.net/zh-tw/content/images/static/ali-img-2-md.jpg",
  嘉義市:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Cloudy_sky_over_Lantan_Lake.jpg/1280px-Cloudy_sky_over_Lantan_Lake.jpg",
  屏東縣: "https://www.dbnsa.gov.tw/att/pic/b_11005774.jpg",
};

export async function getWeatherData(locationName) {
  let url = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-7118B202-1151-43E8-BE84-EBA964198849&format=JSON&locationName=${locationName}`;
  try {
    let res = await fetch(url);
    let data = await res.json();
    let raw = data.records.locations[0].location[0];

    let location = raw.locationName;
    let image = images[locationName];
    // 今天氣象
    let pop = raw.weatherElement[0].time[0].elementValue[0].value;
    let wx = raw.weatherElement[1].time[0].elementValue[0].value;
    let at = raw.weatherElement[2].time[0].elementValue[0].value;
    let t = raw.weatherElement[3].time[0].elementValue[0].value;
    let rh = raw.weatherElement[4].time[0].elementValue[0].value;
    let ci = raw.weatherElement[5].time[0].elementValue[1].value;
    let weatherDescription =
      raw.weatherElement[6].time[0].elementValue[0].value;
    let ws = raw.weatherElement[8].time[0].elementValue[0].value;
    let wd = raw.weatherElement[9].time[0].elementValue[0].value;
    // 明天氣象
    let pop2 = raw.weatherElement[0].time.find((i) =>
      i.startTime.includes(tomorrow)
    ).elementValue[0].value;
    let wx2 = raw.weatherElement[1].time.find((i) =>
      i.startTime.includes(tomorrow)
    ).elementValue[0].value;
    let at2 = raw.weatherElement[2].time.find((i) =>
      i.dataTime.includes(tomorrow)
    ).elementValue[0].value;
    let t2 = raw.weatherElement[3].time.find((i) =>
      i.dataTime.includes(tomorrow)
    ).elementValue[0].value;
    let rh2 = raw.weatherElement[4].time.find((i) =>
      i.dataTime.includes(tomorrow)
    ).elementValue[0].value;
    let ci2 = raw.weatherElement[5].time.find((i) =>
      i.dataTime.includes(tomorrow)
    ).elementValue[1].value;
    let weatherDescription2 = raw.weatherElement[6].time.find((i) =>
      i.startTime.includes(tomorrow)
    ).elementValue[0].value;
    let ws2 = raw.weatherElement[8].time.find((i) =>
      i.dataTime.includes(tomorrow)
    ).elementValue[0].value;
    let wd2 = raw.weatherElement[9].time.find((i) =>
      i.dataTime.includes(tomorrow)
    ).elementValue[0].value;
    // 後天氣象
    let pop3 = raw.weatherElement[0].time.find((i) =>
      i.startTime.includes(afterTomorrow)
    ).elementValue[0].value;
    let wx3 = raw.weatherElement[1].time.find((i) =>
      i.startTime.includes(afterTomorrow)
    ).elementValue[0].value;
    let at3 = raw.weatherElement[2].time.find((i) =>
      i.dataTime.includes(afterTomorrow)
    ).elementValue[0].value;
    let t3 = raw.weatherElement[3].time.find((i) =>
      i.dataTime.includes(afterTomorrow)
    ).elementValue[0].value;
    let rh3 = raw.weatherElement[4].time.find((i) =>
      i.dataTime.includes(afterTomorrow)
    ).elementValue[0].value;
    let ci3 = raw.weatherElement[5].time.find((i) =>
      i.dataTime.includes(afterTomorrow)
    ).elementValue[1].value;
    let weatherDescription3 = raw.weatherElement[6].time.find((i) =>
      i.startTime.includes(afterTomorrow)
    ).elementValue[0].value;
    let ws3 = raw.weatherElement[8].time.find((i) =>
      i.dataTime.includes(afterTomorrow)
    ).elementValue[0].value;
    let wd3 = raw.weatherElement[9].time.find((i) =>
      i.dataTime.includes(afterTomorrow)
    ).elementValue[0].value;

    let finalData = {
      location: location,
      image: image,
      weatherToday: {
        date: today,
        probabilityOfPrecipitation: pop,
        weatherExpression: wx,
        apparentTemperature: at,
        temperature: t,
        relativeHumidity: rh,
        comfortIndex: ci,
        weatherDescription: weatherDescription,
        windSpeed: ws,
        windDirection: wd,
      },
      weatherTomorrow: {
        date: tomorrow,
        probabilityOfPrecipitation: pop2,
        weatherExpression: wx2,
        apparentTemperature: at2,
        temperature: t2,
        relativeHumidity: rh2,
        comfortIndex: ci2,
        weatherDescription: weatherDescription2,
        windSpeed: ws2,
        windDirection: wd2,
      },
      weatherAfterTomorrow: {
        date: afterTomorrow,
        probabilityOfPrecipitation: pop3,
        weatherExpression: wx3,
        apparentTemperature: at3,
        temperature: t3,
        relativeHumidity: rh3,
        comfortIndex: ci3,
        weatherDescription: weatherDescription3,
        windSpeed: ws3,
        windDirection: wd3,
      },
    };
    return finalData;
  } catch (error) {
    console.log("Error:", error);
  }
}
