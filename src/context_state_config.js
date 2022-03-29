import React, { useReducer } from "react";
import * as DataReducer from "./Store/Reducers/data_reducer";
import Context from "./Utils/context";
import WeatherApp from "./WeatherApp";

const ContextState = (props) => {
  const [stateDataReducer, dispatchDataReducer] = useReducer(
    DataReducer.DataReducer,
    DataReducer.initialState
  );

  return (
    <Context.Provider value={{ stateDataReducer, dispatchDataReducer }}>
      <WeatherApp />
    </Context.Provider>
  );
};

export default ContextState;
