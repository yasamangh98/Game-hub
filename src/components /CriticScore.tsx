import React from "react";
import { Game } from "../hooks/useGames";
interface Props {
  game: Game;
}
export const CriticScore = ({ game }: Props) => {
  return <div>{game.metacritic}</div>;
};
export default CriticScore;
