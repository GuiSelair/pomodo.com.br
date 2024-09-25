import { SecondaryNavigationButton } from "./secondary-navigation-button";

export function SecondaryNavigation() {
	return (
		<div className="flex items-start gap-3">
			<SecondaryNavigationButton asChild></SecondaryNavigationButton>
		</div>
	);
}
