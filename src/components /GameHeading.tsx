import { HStack, Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
interface Props {
  gameQuery: GameQuery;
}
export const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <>
      <HStack>
        <Heading paddingLeft={10} marginTop={2} as="h1">
          {heading}
        </Heading>
      </HStack>
    </>
  );
};
export default GameHeading;
