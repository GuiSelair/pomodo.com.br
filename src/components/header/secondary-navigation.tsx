import { SecondaryNavigationButton } from "./secondary-navigation-button";
import { PlayerPopover } from "./player-popover";

export function SecondaryNavigation() {
	return (
		<div className="flex items-start gap-3">
			<SecondaryNavigationButton asChild></SecondaryNavigationButton>
			<PlayerPopover />
		</div>
	);
}
