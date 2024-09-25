import { Play as PlayIcon, Pause as PauseIcon } from "@phosphor-icons/react";

import { useAppDispatch, useAppSelector } from "@/redux";
import { EPlayerState, playerActions } from "@/redux/modules/player";

import { Button } from "../ui/button";

export function PlayerTogglePlayControl() {
	const dispatch = useAppDispatch();
	const playerState = useAppSelector((ctx) => ctx.player.playerState);

	return (
		<Button size="icon" onClick={() => dispatch(playerActions.togglePlay())} id="player-toggle-play-control">
			{playerState === EPlayerState.Playing ? (
				<PauseIcon className="w-6 h-6 text-pomodo-pink-300" />
			) : (
				<PlayIcon className="w-6 h-6 text-pomodo-pink-300" />
			)}
		</Button>
	);
}
