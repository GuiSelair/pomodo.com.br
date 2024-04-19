import { MusicNotesSimple as MusicNotesSimpleIcon } from "@phosphor-icons/react";

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { PlayerControls } from "@/components/player-controls";

import { SecondaryNavigationButton } from "./secondary-navigation-button";

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
					min-w-72
					w-auto
					p-3
					text-white
				`}
			>
				<PlayerControls />
			</PopoverContent>
		</Popover>
	);
}
