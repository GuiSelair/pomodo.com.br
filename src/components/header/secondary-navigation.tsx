import Link from "next/link";
import { CassetteTape, Sliders as SlidersIcon } from "@phosphor-icons/react";

import { EApplicationPaths } from "@/constants/applicationPaths";
import { Button } from "../ui/button";

export function SecondaryNavigation() {
	const buttonStyles = `
		rounded-full
		p-0
		w-9 h-9
		text-pomodo-pink-300
		bg-pomodo-purple-400
		border
		border-solid
		border-transparent
		hover:translate-y-0.5
		hover:bg-pomodo-purple-400
		hover:border-pomodo-pink-300
		transition-transform
	`;

	return (
		<div className="flex items-start gap-3">
			<Button asChild className={buttonStyles}>
				<Link href={EApplicationPaths.Settings} prefetch={false}>
					<SlidersIcon className="w-5 h-5 text-pomodo-pink-300" />
				</Link>
			</Button>
			<Button className={buttonStyles}>
				<CassetteTape className="w-5 h-5 text-pomodo-pink-300" />
			</Button>
		</div>
	);
}
