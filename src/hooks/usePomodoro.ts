import { useAppDispatch, useAppSelector } from "@/redux/store";
import { pomodoroActions } from "@/redux/modules/pomodoro";
import { useRef, useState, useEffect } from "react";

export function usePomodoro() {
	const intervalTimerRef = useRef<NodeJS.Timeout>();
	const dispatch = useAppDispatch();
	const { defaultPomodoroTime, isActive } = useAppSelector(
		(state) => state.pomodoro
	);
	const [timer, setTimer] = useState(defaultPomodoroTime);

	function handleStartTime() {
		dispatch(pomodoroActions.start());
	}

	function handlePauseTime() {
		dispatch(pomodoroActions.stop());
	}

	function handleStopTime() {
		dispatch(pomodoroActions.stop());
		setTimer(defaultPomodoroTime);
	}

	function finishPomodoro() {
		dispatch(pomodoroActions.stop());
		setTimer(defaultPomodoroTime);
	}

	/** Effect responsável pelo timer. */
	useEffect(() => {
		if (isActive) {
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

		return () => {
			clearInterval(intervalTimerRef.current);
		};
	}, [isActive]);

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
