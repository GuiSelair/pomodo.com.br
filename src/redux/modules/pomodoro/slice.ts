import { createSlice } from "@reduxjs/toolkit";
import { actions } from "./actions";

export interface PomodoroState {
	state: "running" | "stopped" | "paused";
	defaultPomodoroTime: number;
	defaultPomodoroBreakTime: number;
	defaultPomodoroLongBreakTime: number;
	takeBreakCount: number;
	pomodoroCount: number;
	isTakeBreak: boolean;
}

const initialState: PomodoroState = {
	state: "stopped",
	defaultPomodoroTime: 60 * 25,
	defaultPomodoroBreakTime: 60 * 5,
	defaultPomodoroLongBreakTime: 60 * 15,
	takeBreakCount: 0,
	pomodoroCount: 0,
	isTakeBreak: false,
};

export const pomodoroSlice = createSlice({
	name: "pomodoro",
	initialState,
	reducers: actions,
});

export const pomodoroActions = pomodoroSlice.actions;
export const pomodoroReducer = pomodoroSlice.reducer;
