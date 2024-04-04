import "@/styles/globals.css";

import type { Metadata } from "next";
import ScriptTag from "next/script";

import { cn } from "@/helpers/utils";
import { fonts } from "@/constants/fonts";
import { Header } from "@/components/header";
import { BackgroundBlur } from "@/components/background-blur";
import { ReduxProvider } from "@/redux/provider";

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
			<head>
				<ScriptTag
					id="Google Tag Manager-Script"
					dangerouslySetInnerHTML={{
						__html: `
							(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
							new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
							j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
							'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
							})(window,document,'script','dataLayer','GTM-P2N7RCLP');
						`,
					}}
				/>
			</head>
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					fonts.nunitoSans.variable,
					fonts.nunito.variable,
					fonts.inter.variable
				)}
			>
				{/* Google Tag Manager */}
				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-P2N7RCLP"
						height="0"
						width="0"
						style={{ display: "none", visibility: "hidden" }}
						title="Google Tag Manager"
					></iframe>
				</noscript>
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
					<ReduxProvider>{children}</ReduxProvider>
				</div>
			</body>
		</html>
	);
}
