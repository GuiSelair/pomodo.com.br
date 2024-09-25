"use client";

import { Provider } from "react-redux";
import CookieConsent from "react-cookie-consent";

import { store } from "@/redux/store";

export function ReduxProvider({
	children,
}: Readonly<React.PropsWithChildren<{}>>) {
	return (
		<Provider store={store}>
			{children}
			<CookieConsent
				location="bottom"
				buttonText="Entendi"
				cookieName="pomodo-cookie-consent"
				overlay
				buttonStyle={{
					backgroundColor: "#675980",
					color: "#fff",
					fontSize: "16px",
					padding: "8px 20px",
					borderRadius: "8px",
					fontWeight: "bold",
				}}
			>
				Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com o uso de cookies.
			</CookieConsent>
		</Provider>
	);
}
