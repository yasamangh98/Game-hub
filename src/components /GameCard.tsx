import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Game } from "../hooks/useGames";
import CriticSoource from "./CriticSoource";
import getCroppedImageUrl from "../services/image_url";
import PlatformIconList from "./PlatformIconsList";
import { Emoji } from "./Emoji";

export interface Props {
  game: Game;
}
export const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => {
              return p.platform;
            })}
          ></PlatformIconList>
          <CriticSoource score={game.metacritic}></CriticSoource>
        </HStack>
        <Heading fontSize="2lg">
          {game.name} <Emoji rating={game.rating_top}></Emoji>
        </Heading>
      </CardBody>
    </Card>
  );
};
export default GameCard;
