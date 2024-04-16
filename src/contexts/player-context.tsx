"use client";

import React, { createContext, useEffect, useMemo, useState } from "react";

export interface IPlayerContextData {
	videoId: string;
	title?: string;
	play: () => void;
	pause: () => void;
	stop?: () => void;
	changeVolume?: (volume: number) => void;
	mute?: () => void;
}

export const playerContext = createContext<IPlayerContextData>(
	{} as IPlayerContextData
);

const youtubeVideoId = "HGp7iu5XgCg";
const youtubeApiUrl = "https://www.youtube.com/iframe_api";

export function PlayerProvider({
	children,
}: Readonly<React.PropsWithChildren<{}>>) {
	const [player, setPlayer] = useState<IYoutubePlayer | null>(null);

	function handlePlay() {
		player?.playVideo();
	}

	function handlePause() {
		player?.pauseVideo();
	}

	function handleStop() {
		player?.stopVideo();
	}

	const contextValueMemoized = useMemo(
		() => ({
			videoId: youtubeVideoId,
			title: player?.videoTitle,
			play: handlePlay,
			pause: handlePause,
			stop: handleStop,
		}),
		[player]
	);

	useEffect(() => {
		const tag = document.createElement("script");
		tag.src = youtubeApiUrl;

		const firstScriptTag = document.getElementsByTagName("script")[0];
		firstScriptTag.parentNode!.insertBefore(tag, firstScriptTag);

		window.onYouTubeIframeAPIReady = () => {
			setPlayer(
				new YT.Player("youtube-player", {
					height: "200",
					width: "200",
					videoId: youtubeVideoId,
				})
			);
		};
		return () => {
			if (player) {
				player.destroy();
			}
		};
	}, [player]);

	return (
		<playerContext.Provider value={contextValueMemoized}>
			<div id="youtube-player" className="hidden" />
			{children}
		</playerContext.Provider>
	);
}
