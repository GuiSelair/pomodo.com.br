import Link from "next/link";
import { Sliders as SlidersIcon } from "@phosphor-icons/react";

import { EApplicationPaths } from "@/constants/applicationPaths";
import { SecondaryNavigationButton } from "./secondary-navigation-button";
import { PlayerPopover } from "./player-popover";

export function SecondaryNavigation() {
	return (
		<div className="flex items-start gap-3">
			<SecondaryNavigationButton asChild>
				<Link href={EApplicationPaths.Settings} prefetch={false}>
					<SlidersIcon className="w-5 h-5 text-pomodo-pink-300" />
				</Link>
			</SecondaryNavigationButton>
			<PlayerPopover />
		</div>
	);
}
