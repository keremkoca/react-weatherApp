export const initialState = {
  dt: null,
  main: {
    feels_like: null,
    humidity: null,
    tempratureC: null,
  },
  wind: {
    windSpeedK: null,
  },
  sys: {
    countryName: null,
    sunrise: null,
    sunset: null,
  },
  weather: [
    {
      condition: null,
    },
  ],
  cityName: null,
  coord: {
    lat: null,
    lon: null,
  },
  daily: [],
  hourly: [],
};

export const DataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ON_LOAD":
      return {
        ...state,
        wind: { windSpeedK: action.payload.wind.speed },
        tempratureK: action.payload.main.temp,
        cityName: action.payload.name,
        countryName: action.payload.sys.country,
        coord: {
          lat: action.payload.coord.lat,
          lon: action.payload.coord.lon,
        },
        condition: action.payload.weather[0].main,
        description: action.payload.weather[0].description,
        sunrise: action.payload.sys.sunrise,
        sunset: action.payload.sys.sunset,
        humidity: action.payload.main.humidity,
      };
    case "GET_WEATHERFORECAST":
      const currentDayNum = new Date(
        action.payload.daily[0].dt * 1000
      ).getDate();
      const createCurrentDayHours = (current) => {
        const currentDayHours = [];
        action.payload.hourly.map((date) => {
          const dateNum = new Date(date.dt * 1000).getDate();
          if (current === dateNum) {
            currentDayHours.push(date);
          }
          return currentDayHours;
        });
        return currentDayHours;
      };
      return {
        ...state,
        daily: action.payload.daily,
        hourly: action.payload.hourly,
        currentDay: action.payload.daily[0],
        currentDayHours: createCurrentDayHours(currentDayNum),
      };

    default:
      break;
  }
};
