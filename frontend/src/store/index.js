import { configureStore } from "@reduxjs/toolkit";
import { loadingMiddleware } from "./loader";
import loadingReducer from "./loader";
import sessionReducer from "./session";
import breweryReducer from "./breweries";
import reviewReducer from "./reviews";
import breweryLikeReducer from "./breweryLikes";
import reviewLikeReducer from "./reviewLikes";
const middleware = [loadingMiddleware];

if (process.env.NODE_ENV === "development") {
  const { logger } = require("redux-logger");
  middleware.push(logger);
}

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    session: sessionReducer,
    breweries: breweryReducer,
    reviews: reviewReducer,
    breweryLikes: breweryLikeReducer,
    reviewLikes: reviewLikeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
