import { useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";

import { useAppDispatch, useAppSelector } from "@/redux";
import { playerActions } from "@/redux/modules/player";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export function PlayerMusicSelection() {
  const [playerMode, setPlayerMode] = useState<"playlist" | "video">("video");
  const dispatch = useAppDispatch();
  const [videoId, setVideoId] = useState<string>("");
  const player = useAppSelector((ctx) => ctx.player.player);

  function handlePlayerModeChange() {
    setPlayerMode(playerMode === "playlist" ? "video" : "playlist");
  }

  function handleLoadVideo() {
    if (playerMode === "playlist") {
      player?.loadPlaylist({ list: videoId, listType: 'playlist' });
    } else {
      player?.loadVideoById(videoId);
    }
    dispatch(playerActions.play());
	}

  return (
    <div className="flex flex-col gap-2">
      <span className="text-md font-medium text-gray-100">Escute suas músicas favoritas enquanto trabalha</span>
      <div className="flex items-start flex-col w-full gap-2 mt-1">
        <div className="flex items-center gap-2">
          <Switch id="player-mode" checked={playerMode === "playlist"} onCheckedChange={handlePlayerModeChange} />
          <Label htmlFor="player-mode" className="text-sm text-gray-300">
            Buscar por {playerMode === "playlist" ? "playlist" : "video"}
          </Label>
        </div>
        <div className="flex items-center gap-2 w-full">
          <Input 
            type="text" 
            placeholder={`${playerMode === "playlist" ? "Playlist" : "Video"} ID`} 
            className="text-sm text-gray-800 bg-gray-100 flex-1"
            value={videoId}
            onChange={(e) => setVideoId(e.target.value)}
          />
          <Button variant={'outline'} onClick={handleLoadVideo} className="flex items-center gap-2">
            Buscar
            <MagnifyingGlass />
          </Button>
        </div>
        <div className="flex flex-col gap-2 mt-1">
          <strong className="text-xs text-gray-200">Exemplos:</strong>
          <span className="text-xs text-gray-200">
            <strong>Playlist:</strong> https://www.youtube.com/playlist?list=<strong>PLOzDu-MXXLliO9fBNZOQTBDddoA3FzZUo</strong>
          </span>
          <span className="text-xs text-gray-200">
            <strong>Vídeo:</strong> https://www.youtube.com/watch?v=<strong>HGp7iu5XgCg</strong>
          </span>
        </div>
      </div>
    </div>
  )
}
