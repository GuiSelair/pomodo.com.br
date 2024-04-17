import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { PlayerState } from "./slice";

export enum EPlayerState {
	Unstarted = -1,
	Ended = 0,
	Playing = 1,
	Paused = 2,
}

export enum EPlayerActionTypes {
	INIT = "init",
	PLAY = "play",
	PAUSE = "pause",
	STOP = "stop",
	CHANGE_VOLUME = "changeVolume",
	MUTE = "mute",
	UNMUTE = "unmute",
}

export type PlayerActions = Record<
	EPlayerActionTypes,
	CaseReducer<PlayerState, PayloadAction<undefined | Record<string, unknown>>>
>;

export const actions: PlayerActions = {
	[EPlayerActionTypes.INIT]: (state, action) => {
		const payload = action.payload as unknown as IYoutubePlayer;
		console.log({ payload });
		state.player = payload;
		state.title = payload?.videoTitle;
		state.playerState = EPlayerState.Unstarted;
	},
	[EPlayerActionTypes.PLAY]: (state) => {
		state.playerState = EPlayerState.Playing;
		state.player?.playVideo();
	},
	[EPlayerActionTypes.PAUSE]: (state) => {
		state.playerState = EPlayerState.Paused;
		state.player?.pauseVideo();
	},
	[EPlayerActionTypes.STOP]: (state) => {
		state.playerState = EPlayerState.Ended;
		state.player?.stopVideo();
	},
	[EPlayerActionTypes.CHANGE_VOLUME]: (state, action) => {
		const volume = action.payload?.volume as number;
		state.player?.setVolume(volume);
	},
	[EPlayerActionTypes.MUTE]: (state) => {
		state.player?.mute();
	},
	[EPlayerActionTypes.UNMUTE]: (state) => {
		state.player?.unMute();
	},
};
