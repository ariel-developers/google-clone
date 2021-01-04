import React, { createContext, useContext, useReducer } from "react";

//se prepara data layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//hook para buscar la data
export const useStateValue = () => useContext(StateContext);
