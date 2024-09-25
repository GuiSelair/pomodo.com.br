import {
	Play as PlayIcon,
	ClockClockwise as TimeResetIcon,
	Pause as PauseIcon,
} from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux";

interface PomodoroActionButtonsProps {
	startTimer: () => void;
	stopTimer: () => void;
	pauseTimer: () => void;
	skipBreak: () => void;
}

export function PomodoroActionButtons({
	skipBreak,
	pauseTimer,
	startTimer,
	stopTimer,
}: Readonly<PomodoroActionButtonsProps>) {
	const pomodoroState = useAppSelector((state) => state.pomodoro.state);
	const isTakeBreak = useAppSelector((state) => state.pomodoro.isTakeBreak);
	const isPomodoroActive = pomodoroState === "running";

	if (isPomodoroActive) {
		return (
			<div className="flex items-center gap-8">
				<Button
					id="pomodoro-pause-action-button"
					className="w-20 lg:w-28 h-14 lg:h-20"
					onClick={pauseTimer}
				>
					<PauseIcon
						id="pomodoro-pause-action-button"
						className="w-8 lg:w-10 h-8 lg:h-10 text-pomodo-pink-300"
					/>
				</Button>
				<Button
					id="pomodoro-stop-action-button"
					className="w-20 lg:w-28 h-14 lg:h-20"
					onClick={isTakeBreak ? skipBreak : stopTimer}
				>
					<TimeResetIcon
						id="pomodoro-stop-action-button"
						className="w-8 lg:w-10 h-8 lg:h-10 text-pomodo-pink-300"
					/>
				</Button>
			</div>
		);
	}

	return (
		<Button
			id="pomodoro-start-action-button"
			className="w-20 lg:w-28 h-14 lg:h-20"
			onClick={startTimer}
		>
			<PlayIcon
				id="pomodoro-start-action-button"
				className="w-8 lg:w-10 h-8 lg:h-10 text-pomodo-pink-300"
			/>
		</Button>
	);
}
