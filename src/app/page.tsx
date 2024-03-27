"use client";

import {
	PlayPause as PlayPauseIcon,
	Stop as StopIcon,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { usePomodoro } from "@/hooks/usePomodoro";
import { useAppSelector } from "@/redux";

export default function PomodoroPage() {
	const { handleStartTime, handleStopTime } = usePomodoro();
	const isPomodoroActive = useAppSelector((state) => state.pomodoro.isActive);

	return (
		<main className="flex flex-col items-center justify-center h-[calc(100vh-10rem)]">
			<strong className="text-[200px] text-white font-nunito-sans font-bold">
				25:00
			</strong>
			<div className="flex items-center gap-5">
				{isPomodoroActive ? (
					<Button
						className="w-[112px] h-20"
						variant="destructive"
						onClick={handleStopTime}
					>
						<StopIcon className="w-10 h-10 color-pomodo-pink-300" />
					</Button>
				) : (
					<Button className="w-[112px] h-20" onClick={handleStartTime}>
						<PlayPauseIcon className="w-10 h-10 color-pomodo-pink-300" />
					</Button>
				)}
			</div>
		</main>
	);
}
