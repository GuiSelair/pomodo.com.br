import { useAppDispatch, useAppSelector } from "@/redux/store";
import { pomodoroActions } from "@/redux/modules/pomodoro";
import { useRef, useState, useEffect } from "react";

export function usePomodoro() {
	const intervalTimerRef = useRef<NodeJS.Timeout>();
	const dispatch = useAppDispatch();
	const { defaultPomodoroTime, state } = useAppSelector(
		(state) => state.pomodoro
	);
	const [timer, setTimer] = useState(3);

	const isActive = state === "running";

	function handleStartTime() {
		dispatch(pomodoroActions.start());
	}

	function handlePauseTime() {
		dispatch(pomodoroActions.pause());
	}

	function handleStopTime() {
		dispatch(pomodoroActions.stop());
		setTimer(defaultPomodoroTime);
	}

	function finishPomodoro() {
		console.log("Pomodoro finalizado");
		dispatch(pomodoroActions.break());
		setTimer(defaultPomodoroTime);
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
