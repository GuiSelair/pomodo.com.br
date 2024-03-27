import { combineReducers } from "@reduxjs/toolkit";

import { pomodoroReducer } from "./pomodoro/slice";

export const rootReducer = combineReducers({
	pomodoro: pomodoroReducer,
});
