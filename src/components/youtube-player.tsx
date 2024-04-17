import { useEffect } from "react";

import { useAppDispatch } from "@/redux";
import { playerActions } from "@/redux/modules/player";

export function YoutubePlayer() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		const tag = document.createElement("script");
		tag.src = "https://www.youtube.com/iframe_api";

		const firstScriptTag = document.getElementsByTagName("script")[0];
		firstScriptTag.parentNode!.insertBefore(tag, firstScriptTag);

		window.onYouTubeIframeAPIReady = () => {
			new YT.Player("youtube-player", {
				height: "200",
				width: "200",
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
		// return () => {
		// 	if (player) {
		// 		console.log("destroying player");
		// 		player.destroy();
		// 	}
		// };
	}, []);

	return <div id="youtube-player" className="hidden" />;
}
