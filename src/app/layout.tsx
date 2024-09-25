import "@/styles/globals.css";

import type { Metadata } from "next";
import ScriptTag from "next/script";

import { cn } from "@/helpers/utils";
import { fonts } from "@/constants/fonts";
import { Header } from "@/components/header";
import { BackgroundBlur } from "@/components/background-blur";
import { ReduxProvider } from "@/redux/provider";

export const metadata: Metadata = {
	title: "pomodo - Foque em seu trabalho, esqueça o relógio",
	description: "Aumente sua produtividade com o Pomodo! Organize suas tarefas e gerencie seu tempo com a técnica Pomodoro. Mantenha o foco e alcance seus objetivos diários de forma eficiente e simples.",
	keywords: "produtividade, Pomodoro, gestão de tempo, foco, tarefas, produtividade diária, Pomodo, pomodo",
	category: "produtividade",
	openGraph: {
		title: "pomodo - Foque em seu trabalho, esqueça o relógio",
		description: "Aumente sua produtividade com o Pomodo! Organize suas tarefas e gerencie seu tempo com a técnica Pomodoro. Mantenha o foco e alcance seus objetivos diários de forma eficiente e simples.",
		url: "https://pomodo.com.br",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<meta name="google-adsense-account" content="ca-pub-3489651549797034"/>
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
				<div
					className="
						min-h-screen
						min-w-screen
						flex 
						flex-col 
						items-center 
						bg-pomodo-gray-500
						py-8
						px-4 
						md:px-14
						md:py-10
						relative
					"
				>
					<ReduxProvider>
						<Header />
						<BackgroundBlur />
						{children}
					</ReduxProvider>
				</div>
			</body>
		</html>
	);
}
