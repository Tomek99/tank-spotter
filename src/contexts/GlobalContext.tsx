import { createContext } from "react";

interface Vehicle {
  id: number;
  x: number;
  y: number;
  sort: number;
}

interface SavedMapInterface {
  vehicles: Vehicle[];
  mapName: string;
  name: string;
  additionInformation: string;
}

export interface GlobalContext {
  addMap: (item: SavedMapInterface) => void;
}

export const GlobalContext = createContext<GlobalContext>({ addMap: () => {} });
