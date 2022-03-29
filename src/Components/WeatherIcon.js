import React from "react";
import { handleIcon } from "../functions/functions";
import "./WeatherIcon.css";
function WeatherIcon(props) {
  const { type, className } = props;
  return <div className={`container ${className}`}>{handleIcon(type)}</div>;
}
export default WeatherIcon;
