import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";

import { PomodoroState } from "./slice";

export enum EPomodoroActionTypes {
	START = "start",
	STOP = "stop",
	PAUSE = "pause",
}

export type IPomodoroActions = Record<
	EPomodoroActionTypes,
	CaseReducer<PomodoroState, PayloadAction<undefined | Record<string, unknown>>>
>;

export const actions: IPomodoroActions = {
	[EPomodoroActionTypes.START]: (state) => {
		state.state = "running";
	},
	[EPomodoroActionTypes.STOP]: (state, action) => {
		const payload = action.payload as { interrupt: boolean };

		state.state = "stopped";

		if (!payload.interrupt) {
			if (state.isTakeBreak) {
				state.isTakeBreak = false;
				state.takeBreakCount += 1;
				return;
			}

			if (state.takeBreakCount === 5) {
				state.takeBreakCount = 0;
			}

			state.isTakeBreak = true;
		}
	},
	[EPomodoroActionTypes.PAUSE]: (state) => {
		state.state = "paused";
	},
};
