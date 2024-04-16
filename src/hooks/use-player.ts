import { playerContext } from "@/contexts/player-context";
import { useContext } from "react";

export function usePlayer() {
	try {
		return useContext(playerContext);
	} catch {
		throw new Error("usePlayer must be used within an PlayerProvider");
	}
}
