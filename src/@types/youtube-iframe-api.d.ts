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
	loadVideoById: (videoId: string) => void;
	loadPlaylist: (data: {
		list: string
		listType: 'playlist'
	}) => void;
}

interface IYoutubePlayerEvent {
	data: unknown;
	target: IYoutubePlayer;
}
interface IYoutubePlayerOptions {
	height: string;
	width: string;
	videoId: string;
	playerVars: {
		controls?: 0 | 1 | 2;
		loop?: 0 | 1;
		modestbranding?: 1 | 0;
		showinfo?: 1 | 0;
	};
	events?: {
		onReady?: (target: IYoutubePlayerEvent) => void;
		onStateChange?: (target: IYoutubePlayerEvent) => void;
	};
}

declare class YT {
	static Player: new (
		id: string,
		options: IYoutubePlayerOptions
	) => IYoutubePlayer;
}