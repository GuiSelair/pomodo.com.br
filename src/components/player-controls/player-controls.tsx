import { useState } from "react";
import { CaretUpDown, MusicNotes } from "@phosphor-icons/react";

import { useAppSelector } from "@/redux";
import { EPlayerState } from "@/redux/modules/player";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { cn } from "@/helpers/utils";

import { YoutubePlayer } from "../youtube-player";
import { PlayerTogglePlayControl } from "./player-toggle-play-control";
import { PlayerVolumeControl } from "./player-volume-control";
import { PlayerMusicSelection } from "./player-music-selection";
import { Separator } from "../ui/separator";

export function PlayerControls() {
	const [isOpen, setIsOpen] = useState(false);
	const player = useAppSelector((ctx) => ctx.player.player);
	const playerState = useAppSelector((ctx) => ctx.player.playerState);

	const isPlaying = playerState === EPlayerState.Playing;

	function makeCollapsibleTitle() {
		if (isPlaying) {
			const title = player?.videoTitle;
			const titleEllipsis = title && title.length > 20 ? `${title.slice(0, 20)}...` : title;
			return `Reproduzindo: ${titleEllipsis}`;
		}

		if (isOpen) { 
			return "Toque para recolher";
		}
		return "Toque para expandir";
	}

	return (
		<Collapsible 
			open={isOpen} 
			onOpenChange={setIsOpen}
			className={`
				bg-zinc-700
				rounded-lg
				px-2
				py-2
				absolute
				top-0
				left-1/2
				transform
				-translate-x-1/2
				border
				border-transparent
				hover:border-pomodo-pink-300/70
				transition-all
				duration-200
				${cn(isOpen ? "w-full md:w-[560px]" : "w-[320px]")}
			`}
		>
			<CollapsibleTrigger 
				className="w-full flex items-center justify-between"
			>
				<div className="flex items-center gap-2">
					<MusicNotes className={`text-pomodo-pink-300 w-5 h-5 ${cn(isPlaying ? "animate-pulse" : "")}`} />
					<span className="text-sm text-gray-300">
						{makeCollapsibleTitle()}
					</span>
				</div>
				<CaretUpDown className="text-gray-300 w-5 h-5" />
			</CollapsibleTrigger>
			<CollapsibleContent 
				forceMount 
				className={`
					overflow: hidden;
					${cn(isOpen ? "h-auto opacity-100 visible pt-3" : "h-0 opacity-0 invisible")}
				`}
			>
				<div className="flex items-center justify-center mb-4 w-full h-[320px]">
					<YoutubePlayer />
				</div>
				<div className="mt-auto flex justify-between items-center gap-3">
					<PlayerTogglePlayControl />
					<PlayerVolumeControl />
				</div>
				<Separator className="my-2 bg-pomodo-purple-400/80" />
				<PlayerMusicSelection />
			</CollapsibleContent>
		</Collapsible>
	);
}