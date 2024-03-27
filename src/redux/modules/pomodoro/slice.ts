import { createSlice } from "@reduxjs/toolkit";
import { actions } from "./actions";

export interface PomodoroState {
	isActive: boolean;
	timer: number;
}

const initialState: PomodoroState = {
	isActive: false,
	timer: 0,
};

export const pomodoroSlice = createSlice({
	name: "pomodoro",
	initialState,
	reducers: actions,
});

export const pomodoroActions = pomodoroSlice.actions;
export const pomodoroReducer = pomodoroSlice.reducer;
