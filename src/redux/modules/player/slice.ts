import { createSlice } from "@reduxjs/toolkit";

import { EPlayerState, actions } from "./actions";

export interface PlayerState {
	player: IYoutubePlayer | null;
	playerState: EPlayerState;
	title?: string;
	isMuted?: boolean;
	volume?: number;
}

const initialState: PlayerState = {
	player: null,
	title: "",
	playerState: EPlayerState.Unstarted,
};

export const playerSlice = createSlice({
	name: "player",
	initialState,
	reducers: actions,
});

export const playerActions = playerSlice.actions;
export const playerReducer = playerSlice.reducer;
