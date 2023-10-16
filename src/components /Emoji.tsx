import { ImageProps, Image } from "@chakra-ui/react";
import bullEye from "../assets/bullEye.webp";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbsUp.webp";

interface Props {
  rating: number;
}
export const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "20px" },
    4: { src: thumbsUp, alt: "recommanded", boxSize: "20px" },
    5: { src: bullEye, alt: "exeptional", boxSize: "25px" },
  };
  return (
    <>
      {/* 
       it is not possible when the property name starts with a number, as in this case. JavaScript does not allow property names to start with a number when using dot notation.
Therefore, when working with object properties that have numbers as keys, you must use bracket notation. This means that to access a nested object with a number property, you would use the syntax emojiMap[3].src, */}
      <Image
        paddingTop={1}
        src={emojiMap[rating].src}
        alt={emojiMap[rating].alt}
        boxSize={emojiMap[rating].boxSize}
      ></Image>
    </>
  );
};
