import { combineReducers } from "redux";

import accountUserReducer from "./accountUserReducer";
import adminReducer from "./admin/adminReducer";


const rootReducer = combineReducers({
  accountUsers: accountUserReducer,
  adminState: adminReducer
});

export default rootReducer;