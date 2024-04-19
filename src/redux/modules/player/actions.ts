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
	TOGGLE_MUTE = "toggleMute",
	TOOGLE_PLAY = "togglePlay",
}

export type PlayerActions = Record<
	EPlayerActionTypes,
	CaseReducer<PlayerState, PayloadAction<undefined | Record<string, unknown>>>
>;

export const actions: PlayerActions = {
	[EPlayerActionTypes.INIT]: (state, action) => {
		const payload = action.payload as unknown as IYoutubePlayer;
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
		state.volume = volume;

		if (volume === 0) {
			state.isMuted = true;
			return;
		}

		state.isMuted = false;
	},
	[EPlayerActionTypes.MUTE]: (state) => {
		state.player?.mute();
		state.isMuted = true;
	},
	[EPlayerActionTypes.UNMUTE]: (state) => {
		state.player?.unMute();
		state.isMuted = false;
	},
	[EPlayerActionTypes.TOGGLE_MUTE]: (state) => {
		if (state.isMuted) {
			state.player?.unMute();
			state.isMuted = false;
			return;
		}

		state.player?.mute();
		state.isMuted = true;
	},
	[EPlayerActionTypes.TOOGLE_PLAY]: (state) => {
		if (state.playerState === EPlayerState.Playing) {
			state.player?.pauseVideo();
			state.playerState = EPlayerState.Paused;
			return;
		}

		state.player?.playVideo();
		state.playerState = EPlayerState.Playing;
	},
};
