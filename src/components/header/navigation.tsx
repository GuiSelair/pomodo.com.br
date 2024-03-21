import Link from "next/link";
import { usePathname } from "next/navigation";

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { EApplicationPaths } from "@/constants/applicationPaths";

const navigationItems = [
	{ href: EApplicationPaths.Home, label: "Pomodoro" },
	{ href: EApplicationPaths.Tasks, label: "Tarefas" },
];

export function Navigation() {
	const pathname = usePathname();

	return (
		<NavigationMenu>
			<NavigationMenuList className="flex gap-4">
				{navigationItems.map((item) => (
					<NavigationMenuItem
						key={item.href}
						data-state={pathname === item.href ? "active" : "inactive"}
						className="
							inline-flex h-9 w-max items-center justify-center rounded-md
							px-4 py-2
							font-nunito
							text-pomodo-pink-300
							bg-pomodo-purple-400
							border
							border-solid
							border-transparent
							transition-transform
							cursor-pointer
							hover:-translate-y-0.5
							hover:border-pomodo-pink-300
							data-[state=active]:bg-pomodo-purple-400
							data-[state=active]:text-pomodo-pink-300
							data-[state=active]:border-pomodo-pink-300
							data-[state=active]:font-bold
							focus-within:outline-none
							focus-within:border-pomodo-pink-300
						"
					>
						<Link href={item.href} className="focus:outline-none">
							{item.label}
						</Link>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}
