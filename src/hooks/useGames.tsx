import { GameQuery } from "../App";
import useData from "./useDate";
import { Genre } from "./useGenre";
import { Platforms } from "./usePlatform";
export interface Platform {
  id: number;
  slug: string;
  name: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string; // in string dar haghighat linke image hastesh
  parent_platforms: { platform: Platform }[]; // array of objects that each object has a property of platform, and each platform is an object of type of Platform interface.
  metacritic: number;
  rating_top: number;
}

export const useGames = (selectedGame: GameQuery) => {
  return useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGame.genre?.id,
        parent_platforms: selectedGame.platform?.id,
        ordering: selectedGame.sortOrder,
        search: selectedGame.search,
      },
    },
    [selectedGame]
  );
};
export default useGames;
