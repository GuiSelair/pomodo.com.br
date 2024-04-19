import {
	SpeakerSimpleX as SpeakerSimpleXIcon,
	SpeakerHigh as SpeakerHighIcon,
} from "@phosphor-icons/react";

import { playerActions } from "@/redux/modules/player";
import { useAppDispatch, useAppSelector } from "@/redux";

import { Button } from "../ui/button";
import { Slider } from "../ui/slider";

export function PlayerVolumeControl() {
	const dispatch = useAppDispatch();
	const isMuted = useAppSelector((ctx) => ctx.player.isMuted);

	const handleVolumeChange = ([value]: number[]) => {
		dispatch(
			playerActions.changeVolume({
				volume: value,
			})
		);
	};

	return (
		<div className="flex items-center gap-2">
			<Slider
				defaultValue={[100]}
				max={100}
				step={1}
				className="w-20"
				onValueChange={handleVolumeChange}
			/>
			<Button
				size="icon"
				variant="ghost"
				className="w-6 h-6"
				onClick={() => dispatch(playerActions.toggleMute())}
			>
				{isMuted ? (
					<SpeakerSimpleXIcon className="w-4 h-4 text-pomodo-pink-300" />
				) : (
					<SpeakerHighIcon className="w-4 h-4 text-pomodo-pink-300" />
				)}
			</Button>
		</div>
	);
}
