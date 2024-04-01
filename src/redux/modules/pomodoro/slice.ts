import { createSlice } from "@reduxjs/toolkit";
import { actions } from "./actions";

export interface PomodoroState {
	state: "running" | "break" | "stopped" | "paused";
	defaultPomodoroTime: number;
}

const initialState: PomodoroState = {
	state: "stopped",
	defaultPomodoroTime: 60 * 25,
};

export const pomodoroSlice = createSlice({
	name: "pomodoro",
	initialState,
	reducers: actions,
});

export const pomodoroActions = pomodoroSlice.actions;
export const pomodoroReducer = pomodoroSlice.reducer;
