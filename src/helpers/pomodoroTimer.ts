const INTERVAL_TIME = 1000;

export interface IPomodoroTimer {
	initialTimeValue: number;
	eventType: "startTimer" | "pauseTimer" | "stopTimer";
	onTick: (timer: number) => void;
	onFinish: () => void;
}

export function pomodoroTimer({
	initialTimeValue,
	onTick,
	onFinish,
}: IPomodoroTimer) {
	let timer = initialTimeValue;

	return setInterval(() => {
		if (timer === 0) {
			onFinish();
			return;
		}

		timer -= 1;
		onTick(timer);
	}, INTERVAL_TIME);
}
