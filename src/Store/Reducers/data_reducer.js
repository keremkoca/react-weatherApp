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
    case "SELECT_DAY":
      let selectedDayNum = action.payload;
      const selectedDayHours = [];
      const currentDay = state.daily.find((day) => {
        const dayNum = new Date(day.dt * 1000).getDate();
        console.log(dayNum);
        if (dayNum === selectedDayNum) return dayNum;
      });
      state.hourly.map((day) => {
        const dayNum = new Date(day.dt * 1000).getDate();

        if (dayNum === selectedDayNum) {
          selectedDayHours.push(day);
        }
        return selectedDayHours;
      });
      console.log(state);
      return {
        ...state,
        currentDayHours: selectedDayHours,
        currentDay: currentDay,
      };

    default:
      break;
  }
};
