import Link from "next/link";
import { usePathname } from "next/navigation";
import { Lock as LockIcon } from "@phosphor-icons/react";

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { EApplicationPaths } from "@/constants/application-paths";

type NavigationItem = {
	href: string;
	label: string;
	disabled?: boolean;
};

const navigationItems = [
	{ href: EApplicationPaths.Home, label: "Pomodoro" },
	{ href: EApplicationPaths.Tasks, label: "Tarefas", disabled: true },
] satisfies NavigationItem[];

export function Navigation() {
	const pathname = usePathname();

	const determineNavigationItemState = (item: NavigationItem) => {
		if (item.disabled) return "disabled";
		return pathname === item.href ? "active" : "inactive";
	};

	return (
		<NavigationMenu>
			<NavigationMenuList className="flex gap-4">
				{navigationItems.map((item) => (
					<NavigationMenuItem
						key={item.href}
						aria-disabled={item.disabled}
						data-state={determineNavigationItemState(item)}
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
							data-[state=active]:bg-pomodo-purple-400
							data-[state=active]:text-pomodo-pink-300
							data-[state=active]:border-pomodo-pink-300
							data-[state=active]:font-bold
							data-[state=disabled]:opacity-50
							data-[state=disabled]:cursor-not-allowed
							data-[state=disabled]:hover:translate-y-0
							data-[state=disabled]:hover:border-transparent
							hover:translate-y-0.5
							hover:border-pomodo-pink-300
							focus-within:outline-none
							focus:outline-none
							focus-visible:outline-none
							focus-within:border-pomodo-pink-300
						"
					>
						<Link
							href={item.disabled ? "#" : item.href}
							data-disabled={item.disabled}
							tabIndex={item.disabled ? -1 : undefined}
							className="
								focus-within:outline-none
								focus:outline-none
								focus-visible:outline-none
								flex
								items-center
								gap-2
								data-[disabled=true]:cursor-not-allowed
								data-[disabled=true]:pointer-events-none
							"
						>
							{item.label}
							{item.disabled && <LockIcon />}
						</Link>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}
