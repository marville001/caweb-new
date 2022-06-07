import { combineReducers } from "redux";
import aboutReducer from "./aboutReducer";

import accountUserReducer from "./accountUserReducer";
import adminReducer from "./admin/adminReducer";
import imagesReducer from "./admin/imagesReducer";
import prayersReducer from "./admin/prayersReducer";
import usersReducer from "./admin/usersReducer";
import eventsReducer from "./eventsReducer";
import galleryReducer from "./galleryReducer";
import leadersReducer from "./leadersReducer";
import positionsReducer from "./positionsReducer";
import sccsReducer from "./sccsReducer";
import userPrayersReducer from "./userPrayersReducer";

const rootReducer = combineReducers({
  accountUsers: accountUserReducer,
  adminState: adminReducer,
  usersState: usersReducer,
  prayersState: prayersReducer,
  imagesState: imagesReducer,
  userPrayersState: userPrayersReducer,
  galleryState: galleryReducer,
  sccsState: sccsReducer,
  eventsState: eventsReducer,
  leadersState: leadersReducer,
  positionsState: positionsReducer,
  aboutState: aboutReducer,
});

export default rootReducer;
