export const handleIcon = (weather) => {
  switch (weather) {
    case "Clouds":
      return (
        <div className="icon">
          <div className="cloud">
            <div className="cloud"></div>
            <div className="cloud"></div>
          </div>
        </div>
      );

    case "Clear":
      return (
        <div className="icon">
          <div className="sun">
            <div className="rays"></div>
          </div>
        </div>
      );

    case "partlyCloudy":
      return (
        <div className="icon">
          <div className="cloud"></div>
          <div className="sun">
            <div className="rays"></div>
          </div>
        </div>
      );

    case "Rain":
      return (
        <div className="icon">
          <div className="cloud"></div>
          <div className="rain"></div>
        </div>
      );

    case "stormy":
      return (
        <div className="icon">
          <div className="cloud"></div>
          <div className="lightning">
            <div className="bolt"></div>
            <div className="bolt"></div>
          </div>
        </div>
      );

    case "Snow":
      return (
        <div className="icon">
          <div className="cloud"></div>
          <div className="snow">
            <div className="flake"></div>
            <div className="flake"></div>
          </div>
        </div>
      );

    default:
      <div className="icon">
        <div className="cloud">
          <div className="cloud"></div>
          <div className="cloud"></div>
        </div>
      </div>;
  }
};
export const dateConverter = (date) => {
  const today = new Date();
  const newDate = new Date(date * 1000);
  const weekOptions = { weekday: "short" };
  const monthOptions = { month: "short" };
  const [month, dayNum, weekDay] = [
    new Intl.DateTimeFormat("en-US", monthOptions).format(newDate),
    newDate.getDate(),
    new Intl.DateTimeFormat("en-US", weekOptions).format(newDate),
  ];
  return `${
    today.getDate() === dayNum ? "Today" : weekDay
  }, ${dayNum} ${month}`;
};
export const kelvinToCelcius = (data) => Math.round(data - 273.15).toFixed(0);
