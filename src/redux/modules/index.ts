import { combineReducers } from "@reduxjs/toolkit";

import { pomodoroReducer } from "./pomodoro";
import { playerReducer } from "./player";

export const rootReducer = combineReducers({
	pomodoro: pomodoroReducer,
	player: playerReducer,
});
