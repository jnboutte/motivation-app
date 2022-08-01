import { createSlice } from "@reduxjs/toolkit";
import { getBackgroundImage } from "../backgroundImage/backgroundImageSlice";
import { getQuote } from "../quote/quoteSlice";
import { getWeather } from "../weather/weatherSlice";

export const errorSlice = createSlice({
  name: "errors",
  initialState: {
    errorMessage: "",
    retryHandler: null
  },
  reducers: {
    clearErrorMessage: (state) => {
      state.errorMessage = "";
      state.retryHandler = null;
    }
  },
  extraReducers: {
    [getBackgroundImage.rejected]: (state) => {
      state.errorMessage = "Image failed to load, so go outside and see the world.";
      state.retryHandler = getBackgroundImage;
    },
    [getQuote.rejected]: (state) => {
      state.errorMessage = "The quote failed to load, everday isn't great, but there is something great in everyday.";
      state.retryHandler = getQuote;
    },
    [getWeather.rejected]: (state) => {
      state.errorMessage = "The weather failed to load as a sign for you to go outside and enjoy the world.";
      state.retryHandler = getWeather;
    }
  }
});

export const { clearErrorMessage } = errorSlice.actions;

export default errorSlice.reducer;
