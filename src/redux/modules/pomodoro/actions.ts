import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";

import { PomodoroState } from "./slice";

export enum EPomodoroActionTypes {
	START = "start",
	STOP = "stop",
	PAUSE = "pause",
}

export type PomodoroActions = Record<
	EPomodoroActionTypes,
	CaseReducer<PomodoroState, PayloadAction<undefined | Record<string, unknown>>>
>;

export const actions: PomodoroActions = {
	[EPomodoroActionTypes.START]: (state) => {
		state.state = "running";
		new Audio("/audios/tap.mp3").play();
	},
	[EPomodoroActionTypes.STOP]: (state, action) => {
		const payload = action.payload as { interrupt: boolean };

		state.state = "stopped";

		/** Quando o usuário clicar no botão de resetar timer, a chave `interrupt` vira. */
		if (!payload.interrupt) {
			if (state.isTakeBreak) {
				state.isTakeBreak = false;
				state.takeBreakCount += 1;
				new Audio("/audios/finish-break.wav").play();
				return;
			}

			const shouldResetBreakCount = state.takeBreakCount === 5;
			if (shouldResetBreakCount) {
				state.takeBreakCount = 0;
			}

			state.isTakeBreak = true;
			state.pomodoroCount += 1;
			new Audio("/audios/finish-pomodoro.wav").play();
			return;
		}
		new Audio("/audios/tap.mp3").play();
	},
	[EPomodoroActionTypes.PAUSE]: (state) => {
		state.state = "paused";
		new Audio("/audios/tap.mp3").play();
	},
};
