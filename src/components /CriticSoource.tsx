import { Badge } from "@chakra-ui/react";
import React from "react";
interface Props {
  score: number;
}
const CriticSoource = ({ score }: Props) => {
  const color = score > 80 ? "green" : score < 80 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize={"14px"} borderRadius={"4px"}>
      {score}
    </Badge>
  );
};

export default CriticSoource;
