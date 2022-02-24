export const initialState = {
  dt: null,
  feels_like: null,
  windSpeedK: null,
  tempratureC: null,
  cityName: null,
  countryName: null,
  generalData: null,
  condition: null,
  description: null,
  sunrise: null,
  sunset: null,
  humidity: null,
  daily: [],
  hourly: [],
};
export const DataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ON_LOAD":
      return {
        ...state,
        windSpeedK: action.payload.wind.speed,
        tempratureK: action.payload.main.temp,
        cityName: action.payload.name,
        countryName: action.payload.sys.country,
        generalData: action.payload,
        condition: action.payload.weather[0].main,
        description: action.payload.weather[0].description,
        sunrise: action.payload.sys.sunrise,
        sunset: action.payload.sys.sunset,
        humidity: action.payload.main.humidity,
      };
    case "GET_WEATHERFORECAST":
      return {
        ...state,
        daily: action.payload.daily,
        hourly: action.payload.hourly,
      };

    default:
      break;
  }
};
