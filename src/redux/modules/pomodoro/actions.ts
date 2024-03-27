import { CaseReducer } from "@reduxjs/toolkit";

import { PomodoroState } from "./slice";

export enum EPomodoroActionTypes {
	START = "start",
	STOP = "stop",
}

export type IPomodoroActions = Record<
	EPomodoroActionTypes,
	CaseReducer<PomodoroState, { payload?: unknown; type: string }>
>;

export const actions: IPomodoroActions = {
	[EPomodoroActionTypes.START]: (state) => {
		state.isActive = true;
	},
	[EPomodoroActionTypes.STOP]: (state) => {
		state.isActive = false;
	},
};
