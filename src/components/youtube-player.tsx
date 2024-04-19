import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/redux";
import { playerActions } from "@/redux/modules/player";

export function YoutubePlayer() {
	const dispatch = useAppDispatch();
	const player = useAppSelector((ctx) => ctx.player.player);

	useEffect(() => {
		const tag = document.createElement("script");
		tag.src = "https://www.youtube.com/iframe_api";

		const firstScriptTag = document.getElementsByTagName("script")[0];
		firstScriptTag.parentNode!.insertBefore(tag, firstScriptTag);

		window.onYouTubeIframeAPIReady = () => {
			new YT.Player("youtube-player", {
				height: "200",
				width: "400",
				videoId: "HGp7iu5XgCg",
				events: {
					onReady: ({ target }) => {
						dispatch(
							playerActions.init(target as unknown as Record<string, unknown>)
						);
					},
				},
			});
		};

		return () => {
			if (player) {
				player.destroy();
			}
		};
	}, [player]);

	return <div id="youtube-player" className="hidden" />;
}
