import "@/styles/globals.css";

import { cn } from "@/lib/utils";

import type { Metadata } from "next";
import { fonts } from "@/constants/fonts"

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
				{children}
			</body>
    </html>
  );
}
