import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { MdLabel } from "react-icons/md";

export interface Props {
  onSelectedOrder: (sortOrder: string) => void;
  selectedsort: string;
}
export const SortSelector = ({ onSelectedOrder, selectedsort }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Data Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  const currentSortOrder = sortOrders.find(
    (order) => order.value === selectedsort
  );
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Sorted by: {selectedsort ? currentSortOrder?.label : "Relevance"}
        </MenuButton>
        <MenuList>
          {sortOrders.map((order) => {
            return (
              <MenuItem
                value={order.value}
                key={order.value}
                onClick={() => {
                  onSelectedOrder(order.value);
                }}
              >
                {order.label}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </>
  );
};
export default SortSelector;
