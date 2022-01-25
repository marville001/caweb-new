import { combineReducers } from "redux";

import accountUserReducer from "./accountUserReducer";


const rootReducer = combineReducers({
  accountUsers: accountUserReducer
});

export default rootReducer;