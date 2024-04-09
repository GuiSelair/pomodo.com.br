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
import { SecondaryNavigationButton } from "./secondary-navigation-button";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";

export function PlayerPopover() {
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
					w-72
					h-44
					p-3
					text-white
				`}
			>
				<div className="flex flex-1">
					<span className="text-sm text-pomodo-pink-300">Reproduzindo:</span>
				</div>
				<footer className="mt-auto flex justify-between items-center gap-3">
					<div>
						<Button size="icon">
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
