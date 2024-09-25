import { useRef, useState, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/redux/store";
import { pomodoroActions } from "@/redux/modules/pomodoro";
import { playerActions } from "@/redux/modules/player";
import { PomodoroWorkerMessage } from "@/pomodoro.worker";

export function usePomodoro() {
	const pomodoroWorkerRef = useRef<Worker>();
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
		if (!isTakeBreak) {
			dispatch(playerActions.play());
		}
	}

	function handlePauseTime() {
		dispatch(pomodoroActions.pause());
		dispatch(playerActions.pause());
		if (pomodoroWorkerRef.current) {
			pomodoroWorkerRef.current.postMessage({
				eventType: "pauseTimer",
				initialTimeValue: timer,
			} as PomodoroWorkerMessage);
		}
	}

	function handleStopTime() {
		dispatch(pomodoroActions.stop({ interrupt: true }));
		dispatch(playerActions.pause());
		if (pomodoroWorkerRef.current) {
			pomodoroWorkerRef.current.postMessage({
				eventType: "stopTimer",
				initialTimeValue: defaultPomodoroTime,
			} as PomodoroWorkerMessage);
		}
	}

	function handleSkipBreak() {
		dispatch(pomodoroActions.stop({ interrupt: false }));
		if (pomodoroWorkerRef.current) {
			pomodoroWorkerRef.current.postMessage({
				eventType: "stopTimer",
				initialTimeValue: defaultPomodoroTime,
			} as PomodoroWorkerMessage);
		}
	}

	function finishPomodoro() {
		dispatch(pomodoroActions.stop({ interrupt: false }));
		dispatch(playerActions.pause());
	}

	function initializePomodoroTimer() {
		if (pomodoroWorkerRef.current) {
			pomodoroWorkerRef.current.postMessage({
				eventType: "startTimer",
				initialTimeValue: timer,
			} as PomodoroWorkerMessage);
		}
	}

	function listenPomodoroWorker() {
		if (pomodoroWorkerRef.current) {
			pomodoroWorkerRef.current.onmessage = (message) => {
				const { type, timer } = message.data;
				if (type === "timer") {
					setTimer(timer);
				}
			};
		}
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
			initializePomodoroTimer();
		}
	}, [isActive]);

	/** Effect responsável por finalizar o timer quando ele chegar a zero. */
	useEffect(() => {
		if (isActive && timer === 0) {
			finishPomodoro();
		}
	}, [timer, isActive]);

	/** Effect responsável por inicializar o Web Worker responsável pelo processamento do timer e ouvi-lo. */
	useEffect(() => {
		pomodoroWorkerRef.current = new Worker(
			new URL("../pomodoro.worker.ts", import.meta.url)
		);

		listenPomodoroWorker();

		return () => {
			pomodoroWorkerRef.current?.terminate();
		};
	}, []);

	return {
		handleStartTime,
		handleStopTime,
		handlePauseTime,
		handleSkipBreak,
		timer,
	};
}
