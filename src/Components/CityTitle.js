import React, { useContext } from "react";
import classes from "./CityTitle.module.css";
import Context from "../Utils/context";
function CityTitle() {
  const { stateDataReducer: state } = useContext(Context);
  return (
    <div className={classes.titleContainer}>
      <div className={classes.titleIconContainer}>
        <i className={`fa-solid fa-location-dot`}></i>
      </div>
      <h1 className={classes.titleCityName}>{state.cityName}</h1>
      <h1 className={classes.titleCountryName}>{state.countryName}</h1>
    </div>
  );
}

export default CityTitle;
