import { useAppSelector } from "@/redux";
import { EPlayerState } from "@/redux/modules/player";

import { PlayerVolumeControl } from "./player-volume-control";
import { PlayerTogglePlayControl } from "./player-toggle-play-control";

export function PlayerControls() {
	const title = useAppSelector((ctx) => ctx.player.title);
	const playerState = useAppSelector((ctx) => ctx.player.playerState);

	const isPlaying = playerState === EPlayerState.Playing;

	return (
		<>
			<div className="flex flex-col flex-1 gap-1 mb-5">
				<span className="text-sm text-pomodo-pink-300">
					{isPlaying ? "Tocando:" : "Pronto para tocar:"}
				</span>
				{title && <span className="text-xs font-light">{title}</span>}
			</div>
			<footer className="mt-auto flex justify-between items-center gap-3">
				<PlayerTogglePlayControl />
				<PlayerVolumeControl />
			</footer>
		</>
	);
}
