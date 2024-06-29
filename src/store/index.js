import { configureStore } from "@reduxjs/toolkit";

const { default: LoaderSlice } = require("./slices/loader");
const { default: CurrentUserSlice } = require("./slices/currentUser");
const { default: PageHeaderSlice } = require("./slices/pageHeader");
const { default: MetaDataSlice } = require("./slices/metaData");

const store = configureStore({
  reducer: {
    loader: LoaderSlice.reducer,
    currentUser: CurrentUserSlice.reducer,
    pageHeader: PageHeaderSlice.reducer,
    metaData: MetaDataSlice.reducer,
  },
});

export default store;
