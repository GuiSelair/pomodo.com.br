import { createSlice } from "@reduxjs/toolkit";
import { actions } from "./actions";

export interface PomodoroState {
	isActive: boolean;
	defaultPomodoroTime: number;
}

const initialState: PomodoroState = {
	isActive: false,
	defaultPomodoroTime: 60 * 25,
};

export const pomodoroSlice = createSlice({
	name: "pomodoro",
	initialState,
	reducers: actions,
});

export const pomodoroActions = pomodoroSlice.actions;
export const pomodoroReducer = pomodoroSlice.reducer;
