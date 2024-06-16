"use client";

import { usePomodoro } from "@/hooks/use-pomodoro";
import { formatTimerSecondToMinutes } from "@/helpers/format-timer";
import { PomodoroActionButtons } from "./_components/PomodoroActionButtons";
import { PomodoroCounter } from "./_components/PomodoroCounter";

export default function PomodoroPage() {
	const { timer, handlePauseTime, handleStartTime, handleStopTime } =
		usePomodoro();

	return (
		<main className="flex flex-col items-center justify-center h-[calc(100vh-10rem)]">
			<strong className="text-[120px] sm:text-[160px] md:text-[200px] text-white font-nunito-sans font-bold">
				{formatTimerSecondToMinutes(timer)}
			</strong>
			<PomodoroActionButtons
				startTimer={handleStartTime}
				stopTimer={handleStopTime}
				pauseTimer={handlePauseTime}
			/>
			<PomodoroCounter />
		</main>
	);
}
