import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import { useGames } from "../hooks/useGames";
import GameCard from "./GameCard";
import { GameCardContainer } from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <>
        {error && <Text>{error}</Text>}
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={6}
          padding={10}
        >
          <>
            {isLoading &&
              skeletons.map((skeleton) => (
                <GameCardContainer key={skeleton}>
                  <GameCardSkeleton />
                </GameCardContainer>
              ))}
            {data.map((game) => {
              return (
                <GameCardContainer key={game.id}>
                  <GameCard game={game}></GameCard>
                </GameCardContainer>
              );
            })}
          </>
        </SimpleGrid>
      </>
    </div>
  );
};
export default GameGrid;