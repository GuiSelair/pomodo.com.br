"use client";

import { PlayPause as PlayPauseIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";

export default function PomodoroPage() {
	return (
		<main className="flex flex-col items-center justify-center h-[calc(100vh-10rem)]">
			<strong className="text-[200px] text-white font-nunito-sans font-bold">
				25:00
			</strong>
			<div className="flex items-center gap-5">
				<Button className="w-[112px] h-20">
					<PlayPauseIcon className="w-10 h-10 color-pomodo-pink-300" />
				</Button>
			</div>
		</main>
	);
}
