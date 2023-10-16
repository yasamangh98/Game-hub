import { HStack, Image } from "@chakra-ui/react";
import { useState } from "react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (search: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <div>
      <HStack justifyContent="space - between">
        <Image src={logo} boxSize="60px"></Image>
        <SearchInput onSearch={onSearch}></SearchInput>
        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </div>
  );
};

export default NavBar;
