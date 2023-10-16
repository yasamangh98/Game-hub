import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (search: string) => void;
}
export const SearchInput = ({ onSearch }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <form
        onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          if (inputRef.current) onSearch(inputRef.current.value);
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch />}></InputLeftElement>
          <Input
            type="text"
            borderRadius={20}
            placeholder="Searching Games..."
            variant="filled"
            ref={inputRef}
          ></Input>
        </InputGroup>
      </form>
    </>
  );
};

export default SearchInput;
