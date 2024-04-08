import { pomodoroTimer, IPomodoroTimer } from "./helpers/pomodoroTimer";

export type PomodoroWorkerMessage = Omit<IPomodoroTimer, "onTick" | "onFinish">;

let intervalTimer: NodeJS.Timeout | undefined = undefined;

self.addEventListener(
	"message",
	(event: MessageEvent<PomodoroWorkerMessage>) => {
		/** Verifica se quem ta utilizando é o proprio site hospedado. */
		if (event.origin !== "") {
			return;
		}

		if (!intervalTimer) {
			intervalTimer = pomodoroTimer({
				onTick: onTimerTick,
				onFinish: stopInterval,
				...event.data,
			});
		}

		if (event.data.eventType === "stopTimer") {
			stopInterval();
			onTimerTick(event.data.initialTimeValue);
			return;
		}

		if (event.data.eventType === "pauseTimer") {
			stopInterval();
		}
	}
);

function onTimerTick(timer: number) {
	self.postMessage({ type: "timer", timer });
}

function stopInterval() {
	clearInterval(intervalTimer);
	intervalTimer = undefined;
}
