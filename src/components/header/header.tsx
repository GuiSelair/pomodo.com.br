"use client";

import { Badge } from "@/components/ui/badge";
import { PomodoLogo } from "@/components/pomodo-logo";

import { Navigation } from "./navigation";
import { SecondaryNavigation } from "./secondary-navigation";

export function Header() {
	return (
		<header
			className="
				flex
				items-center
				justify-between
				bg-transparent
				w-full
				mb-10
			"
		>
			<div className="flex items-start gap-1">
				<PomodoLogo />
				<Badge variant="secondary" className="px-1 py-0">
					<strong className="text-pomodo-gray-500 font-nunito text-[10px] font-extrabold ">
						MVP
					</strong>
				</Badge>
			</div>
			<SecondaryNavigation />
		</header>
	);
}
