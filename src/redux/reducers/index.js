import { combineReducers } from "redux";

import accountUserReducer from "./accountUserReducer";
import adminReducer from "./admin/adminReducer";
import imagesReducer from "./admin/imagesReducer";
import prayersReducer from "./admin/prayersReducer";
import usersReducer from "./admin/usersReducer";

const rootReducer = combineReducers({
  accountUsers: accountUserReducer,
  adminState: adminReducer,
  usersState: usersReducer,
  prayersState: prayersReducer,
  imagesState: imagesReducer,
});

export default rootReducer;
