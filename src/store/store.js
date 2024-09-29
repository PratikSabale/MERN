import { configureStore } from "@reduxjs/toolkit";
import PageOne from "../Redux/PageOne";
import DataTransporter from "../LinkedinDemos/DataTransporter";

const store = configureStore({
  reducer: {
    pageone: PageOne,
    datatranspoter: DataTransporter,
  },
});
export default store;
