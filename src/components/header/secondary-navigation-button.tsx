import { forwardRef } from "react";

import { Button, ButtonProps } from "@/components/ui/button";

export const SecondaryNavigationButton = forwardRef<
	HTMLButtonElement,
	ButtonProps
>(function SecondaryNavigationButton(
	{ children, ...rest }: Readonly<React.PropsWithChildren<ButtonProps>>,
	ref
) {
	return (
		<Button
			ref={ref}
			className={`
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
				`}
			{...rest}
		>
			{children}
		</Button>
	);
});
