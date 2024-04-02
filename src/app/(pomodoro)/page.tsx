"use client";

import {
	Play as PlayIcon,
	ClockClockwise as TimeResetIcon,
	Pause as PauseIcon,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { usePomodoro } from "@/hooks/usePomodoro";
import { useAppSelector } from "@/redux";
import { formatTimerSecondToMinutes } from "@/helpers/formatTimer";

export default function PomodoroPage() {
	const { handleStartTime, handleStopTime, handlePauseTime, timer } =
		usePomodoro();
	const pomodoroState = useAppSelector((state) => state.pomodoro.state);
	const isTakeBreak = useAppSelector((state) => state.pomodoro.isTakeBreak);

	const isPomodoroActive = pomodoroState === "running";

	return (
		<main className="flex flex-col items-center justify-center h-[calc(100vh-10rem)]">
			<strong className="text-[200px] text-white font-nunito-sans font-bold">
				{formatTimerSecondToMinutes(timer)}
			</strong>
			<div className="flex items-center gap-5">
				{isPomodoroActive ? (
					<div className="flex items-center gap-8">
						<Button className="w-[112px] h-20" onClick={handlePauseTime}>
							<PauseIcon className="w-10 h-10 text-pomodo-pink-300" />
						</Button>
						{!isTakeBreak && (
							<Button className="w-[112px] h-20" onClick={handleStopTime}>
								<TimeResetIcon className="w-10 h-10 text-pomodo-pink-300" />
							</Button>
						)}
					</div>
				) : (
					<Button className="w-[112px] h-20" onClick={handleStartTime}>
						<PlayIcon className="w-10 h-10 text-pomodo-pink-300" />
					</Button>
				)}
			</div>
		</main>
	);
}
