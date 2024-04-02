import { useRef, useState, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/redux/store";
import { pomodoroActions } from "@/redux/modules/pomodoro";

export function usePomodoro() {
	const intervalTimerRef = useRef<NodeJS.Timeout>();
	const dispatch = useAppDispatch();
	const {
		defaultPomodoroTime,
		defaultPomodoroBreakTime,
		defaultPomodoroLongBreakTime,
		state,
		isTakeBreak,
		takeBreakCount,
	} = useAppSelector((state) => state.pomodoro);
	const [timer, setTimer] = useState(defaultPomodoroTime);

	const isActive = state === "running";

	function handleStartTime() {
		dispatch(pomodoroActions.start());
	}

	function handlePauseTime() {
		dispatch(pomodoroActions.pause());
	}

	function handleStopTime() {
		dispatch(pomodoroActions.stop({ interrupt: true }));
		setTimer(defaultPomodoroTime);
	}

	function finishPomodoro() {
		dispatch(pomodoroActions.stop({ interrupt: false }));
	}

	function pomodoroTimer() {
		intervalTimerRef.current = setInterval(() => {
			setTimer((prev) => {
				if (prev === 0) {
					clearInterval(intervalTimerRef.current);
					return 0;
				}

				return prev - 1;
			});
		}, 1000);
	}

	/** Effect responsável por intercalar entre o intervalo e o timer principal quando o contador chegar ao zero. */
	useEffect(() => {
		if (isTakeBreak) {
			setTimer(
				takeBreakCount === 4
					? defaultPomodoroLongBreakTime
					: defaultPomodoroBreakTime
			);
		} else {
			setTimer(defaultPomodoroTime);
		}
	}, [isTakeBreak]);

	/** Effect responsável pelo acionamento do timer. */
	useEffect(() => {
		if (isActive) {
			pomodoroTimer();
		}

		return () => {
			clearInterval(intervalTimerRef.current);
		};
	}, [isActive]);

	/** Effect responsável por finalizar o timer quando ele chegar a zero. */
	useEffect(() => {
		if (isActive && timer === 0) {
			finishPomodoro();
		}
	}, [timer, isActive]);

	return {
		handleStartTime,
		handleStopTime,
		handlePauseTime,
		timer,
	};
}
