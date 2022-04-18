async function getWeatherData(locationName){
    let url = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-7118B202-1151-43E8-BE84-EBA964198849&format=JSON&locationName=${locationName}`;
    try{
        let res = await fetch(url);
        let data = await res.json();
        let raw = data.records.locations[0].location[0]

        console.log(data);

        let location = raw.locationName;
        let pop = raw.weatherElement[0].time[0].elementValue[0].value;
        let wx = raw.weatherElement[1].time[0].elementValue[0].value;
        let at = raw.weatherElement[2].time[0].elementValue[0].value;
        let t = raw.weatherElement[3].time[0].elementValue[0].value;
        let rh = raw.weatherElement[4].time[0].elementValue[0].value;
        let ci = raw.weatherElement[5].time[0].elementValue[1].value;
        let weatherDescription = raw.weatherElement[6].time[0].elementValue[0].value;
        let ws = raw.weatherElement[8].time[0].elementValue[0].value;
        let wd = raw.weatherElement[9].time[0].elementValue[0].value;

        let finalData = {
            'location':location,
            'weather':{
                'probabilityOfPrecipitation':pop,
                'weatherExpression':wx,
                'apparentTemperature':at,
                'temperature':t,
                'relativeHumidity':rh,
                'comfortIndex':ci,
                'weatherDescription':weatherDescription,
                'windSpeed':ws,
                'windDirection':wd
            }
        }
        return finalData
    }catch(error){
        console.log('Error:', error);
    }
}