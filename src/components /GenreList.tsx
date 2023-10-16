import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image_url";
import { Genre } from "../hooks/useGenre";

export interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

export const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenre();

  if (isLoading) return <Spinner></Spinner>;

  return (
    <>
      {error && null}
      <Heading fontSize={15}>Genres</Heading>
      <List>
        {data.map((genre) => {
          return (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  objectFit="cover"
                  src={getCroppedImageUrl(genre.image_background)}
                ></Image>
                {/* ba click kardan ye function sakhtim k mohtavaye button ro be in function  pass mikone  */}
                <Button
                  whiteSpace={"normal"}
                  alignItems={"left"}
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
                  onClick={() => onSelectedGenre(genre)}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
export default GenreList;
