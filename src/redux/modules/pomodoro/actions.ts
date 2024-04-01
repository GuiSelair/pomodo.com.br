import { CaseReducer } from "@reduxjs/toolkit";

import { PomodoroState } from "./slice";

export enum EPomodoroActionTypes {
	START = "start",
	STOP = "stop",
	PAUSE = "pause",
	BREAK = "break",
}

export type IPomodoroActions = Record<
	EPomodoroActionTypes,
	CaseReducer<PomodoroState, { payload?: unknown; type: string }>
>;

export const actions: IPomodoroActions = {
	[EPomodoroActionTypes.START]: (state) => {
		state.state = "running";
	},
	[EPomodoroActionTypes.STOP]: (state) => {
		state.state = "stopped";
	},
	[EPomodoroActionTypes.PAUSE]: (state) => {
		state.state = "paused";
	},
	[EPomodoroActionTypes.BREAK]: (state) => {
		state.state = "break";
	},
};
