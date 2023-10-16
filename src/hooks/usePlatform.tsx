import React from "react";
import Platform from "../components /PlatformSelector";
import useData from "./useDate";

export interface Platforms {
  id: number;
  name: string;
  slug: string;
}
export const usePlatform = () => {
  return useData<Platforms>("/platforms/lists/parents");
};
export default usePlatform;
