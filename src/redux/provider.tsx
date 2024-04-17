"use client";

import { Provider } from "react-redux";

import { store } from "@/redux/store";
import { YoutubePlayer } from "@/components/youtube-player";

export function ReduxProvider({
	children,
}: Readonly<React.PropsWithChildren<{}>>) {
	return (
		<Provider store={store}>
			<YoutubePlayer />
			{children}
		</Provider>
	);
}
