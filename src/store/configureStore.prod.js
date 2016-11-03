//This is the redux store
import portfolioReducer from "../reducers/portfolioReducer.js";
import {createStore} from "redux";

export default function configureStore(){
  return createStore(portfolioReducer);
}
