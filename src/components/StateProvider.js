// set up data layer
// we need this to track the basket

import React , {createContext,useContext,useReducer} from "react";
// data layer
export const StateContext =  createContext();
// provider
export const StateProvider = createContext.provider;
export const StateConsumer = createContext.consumer;
export const useStateValue = () => { useContext(StateContext)};

