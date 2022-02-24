import React from "react";
import Context from "../Utils/context";
import { useContext } from "react";
import "./WeatherIcon.css";
function WeatherIcon(props) {
  const { stateDataReducer: state } = useContext(Context);

  const handleIcon = (weather) => {
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

      case "snowy":
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
  return <div className="container">{handleIcon(state.condition)}</div>;
}

export default WeatherIcon;
