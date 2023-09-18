import { createContext } from "react";

interface Vehicle {
  id: number;
  x: number;
  y: number;
  sort: number;
}

interface SavedMapInterface {
  idSavedMap: number;
  vehicles: Vehicle[];
  mapName: string;
  name: string;
  additionInformation: string;
}

export interface GlobalContext {
  addMap: (item: SavedMapInterface) => void;
  deleteMap: (id: number) => void;
  updateMap: (updatedMap: SavedMapInterface) => void;
}

export const GlobalContext = createContext<GlobalContext>({
  addMap: () => {},
  deleteMap: () => {},
  updateMap: () => {},
});
