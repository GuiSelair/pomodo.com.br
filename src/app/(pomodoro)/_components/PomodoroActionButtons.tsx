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
}

export function PomodoroActionButtons({
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
					className="w-[112px] h-20"
					onClick={pauseTimer}
				>
					<PauseIcon
						id="pomodoro-pause-action-button"
						className="w-10 h-10 text-pomodo-pink-300"
					/>
				</Button>
				{!isTakeBreak && (
					<Button
						id="pomodoro-stop-action-button"
						className="w-[112px] h-20"
						onClick={stopTimer}
					>
						<TimeResetIcon
							id="pomodoro-stop-action-button"
							className="w-10 h-10 text-pomodo-pink-300"
						/>
					</Button>
				)}
			</div>
		);
	}

	return (
		<Button
			id="pomodoro-start-action-button"
			className="w-[112px] h-20"
			onClick={startTimer}
		>
			<PlayIcon
				id="pomodoro-start-action-button"
				className="w-10 h-10 text-pomodo-pink-300"
			/>
		</Button>
	);
}
