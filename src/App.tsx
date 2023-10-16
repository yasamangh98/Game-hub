import { Grid, GridItem, Flex, Show, Box } from "@chakra-ui/react";
import NavBar from "./components /NavBar";
import GameGrid from "./components /GameGrid";
import { GenreList } from "./components /GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components /PlatformSelector";
import { Platforms } from "./hooks/usePlatform";
import SortSelector from "./components /SortSelector";
import GameHeading from "./components /GameHeading";
export interface GameQuery {
  genre: Genre | null;
  platform: Platforms | null;
  sortOrder: string;
  search: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div className="App">
      {/* The templateAreas property specifies the areas within the grid by defining named grid areas. Each area is defined using a string, with quotes around each word, that represents the portion of the grid that area should cover. In this case, the two grid areas are named "nav" and "aside main", and they will occupy one row each. */}
      <Grid
        templateAreas={{
          base: `"nav " "main"`,
          lg: `" nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar
            onSearch={(search) => {
              setGameQuery({ ...gameQuery, search });
            }}
          ></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectedGenre={(genre) => {
                setGameQuery({ ...gameQuery, genre });
              }}
            ></GenreList>
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <Flex paddingLeft={10}>
            <Box marginRight={5}>
              <PlatformSelector
                onSelectedPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
                selectedPlatform={gameQuery.platform}
              ></PlatformSelector>
            </Box>

            <SortSelector
              onSelectedOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              selectedsort={gameQuery.sortOrder}
            ></SortSelector>
          </Flex>
          <GameHeading gameQuery={gameQuery}></GameHeading>{" "}
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
