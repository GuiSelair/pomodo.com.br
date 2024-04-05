import { pomodoroTimer, IPomodoroTimer } from "./helpers/pomodoroTimer";

export type PomodoroWorkerMessage = Omit<IPomodoroTimer, "onTick" | "onFinish">;

let intervalTimer: NodeJS.Timeout;

self.addEventListener(
	"message",
	(event: MessageEvent<PomodoroWorkerMessage>) => {
		intervalTimer = pomodoroTimer({
			onTick: onTimerTick,
			onFinish: stopInterval,
			...event.data,
		});

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
}
