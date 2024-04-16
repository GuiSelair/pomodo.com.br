import {
	MusicNotesSimple as MusicNotesSimpleIcon,
	Pause as PauseIcon,
	SpeakerSimpleX as SpeakerSimpleXIcon,
} from "@phosphor-icons/react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

import { SecondaryNavigationButton } from "./secondary-navigation-button";
import { usePlayer } from "@/hooks/use-player";

export function PlayerPopover() {
	const { title, play } = usePlayer();
	console.log({ title });
	return (
		<Popover>
			<PopoverTrigger asChild>
				<SecondaryNavigationButton>
					<MusicNotesSimpleIcon className="w-5 h-5 text-pomodo-pink-300" />
				</SecondaryNavigationButton>
			</PopoverTrigger>
			<PopoverContent
				align="end"
				side="bottom"
				sideOffset={12}
				className={`
					flex
					flex-col
				bg-pomodo-gray-400 
					border-none
					min-w-72
					w-auto
					p-3
					text-white
				`}
			>
				<div className="flex flex-col flex-1 gap-1 mb-5">
					<span className="text-sm text-pomodo-pink-300">Reproduzindo:</span>
					{title && <span className="text-xs font-light">{title}</span>}
				</div>
				<footer className="mt-auto flex justify-between items-center gap-3">
					<div>
						<Button size="icon" onClick={play}>
							<PauseIcon className="w-6 h-6 text-pomodo-pink-300" />
						</Button>
					</div>
					<div className="flex items-center gap-2">
						<Slider defaultValue={[33]} max={100} step={1} className="w-14" />
						<Button size="icon" variant="ghost" className="w-6 h-6">
							<SpeakerSimpleXIcon className="w-4 h-4 text-pomodo-pink-300" />
						</Button>
					</div>
				</footer>
			</PopoverContent>
		</Popover>
	);
}
