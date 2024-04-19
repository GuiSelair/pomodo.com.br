interface IYoutubePlayer {
	getVolume: () => number;
	isMuted: () => boolean;
	mute: () => void;
	playVideo: () => void;
	pauseVideo: () => void;
	stopVideo: () => void;
	unMute: () => void;
	videoTitle: string;
	setVolume: (volume: number) => void;
	destroy: () => void;
	getPlayerState: () => number;
}

interface IYoutubePlayerEvent {
	data: unknown;
	target: IYoutubePlayer;
}
interface IYoutubePlayerOptions {
	height: string;
	width: string;
	videoId: string;
	events?: {
		onReady?: (target: IYoutubePlayerEvent) => void;
	};
}

declare class YT {
	static Player: new (
		id: string,
		options: IYoutubePlayerOptions
	) => IYoutubePlayer;
}
