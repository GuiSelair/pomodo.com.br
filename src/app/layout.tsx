import "@/styles/globals.css";

import type { Metadata } from "next";

import { cn } from "@/lib/utils";
import { fonts } from "@/constants/fonts";
import { Header } from "@/components/header";
import { BackgroundBlur } from "@/components/background-blur";

export const metadata: Metadata = {
	title: "pomodo - Focus on your work, not the clock",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					fonts.nunitoSans.variable,
					fonts.nunito.variable,
					fonts.inter.variable
				)}
			>
				<div
					className="
						min-h-screen
						min-w-screen
						flex 
						flex-col 
						items-center 
						bg-pomodo-gray-500
						py-10 
						px-14
						relative
					"
				>
					<Header />
					<BackgroundBlur />
					{children}
				</div>
			</body>
		</html>
	);
}
