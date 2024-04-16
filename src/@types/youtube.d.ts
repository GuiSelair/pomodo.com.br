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
}

interface IYoutubePlayerOptions {
	height: string;
	width: string;
	videoId: string;
	events?: {
		onReady?: (target: IYoutubePlayer, data: unknown) => void;
	};
}

declare class YT {
	static Player: new (
		id: string,
		options: IYoutubePlayerOptions
	) => IYoutubePlayer;
}
