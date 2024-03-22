import { Nunito_Sans, Nunito, Inter } from "next/font/google";

const nunitoSans = Nunito_Sans({
	subsets: ["latin"],
	weight: ["400", "700", "800"],
	variable: "--font-nunito-sans",
});

const nunito = Nunito({
	subsets: ["latin"],
	weight: ["300", "400", "500", "700"],
	variable: "--font-nunito",
});

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export const fonts = { nunitoSans, nunito, inter };
