import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import usePlatform, { Platforms } from "../hooks/usePlatform";
interface Props {
  onSelectedPlatform: (Platform: Platforms) => void;
  selectedPlatform: Platforms | null;
}
export const Platform = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatform();
  if (error) return null;
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform ? selectedPlatform?.name : "Platform"}
        </MenuButton>
        <MenuList>
          {data.map((platform) => {
            return (
              <MenuItem
                key={platform.id}
                onClick={() => onSelectedPlatform(platform)}
              >
                {platform.name}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </>
  );
};
export default Platform;
