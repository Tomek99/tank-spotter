import React from "react";
import styles from "./BtnConfirm.module.scss";

interface Item {
  id: number;
  name: string;
  path: string;
  camoType: string;
  availableBattleTypes: string[];
}
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

interface BtnConfirmProps {
  addMap: (item: SavedMapInterface) => void;
  item: Item;
  vehicles: Vehicle[];
  handleBlurScreen: () => void;
  message: string;
}

function BtnConfirm({
  addMap,
  item,
  vehicles,
  handleBlurScreen,
  message,
}: BtnConfirmProps) {
  const savedMap: SavedMapInterface = {
    idSavedMap: Math.floor(Math.random() * 999999),
    vehicles: vehicles,
    name: item.name,
    mapName: item.path,
    additionInformation: message,
  };
  return (
    <button
      className={styles.BtnConfirm}
      onClick={() => {
        if (savedMap.vehicles.length !== 0) {
          addMap(savedMap);
          handleBlurScreen();
        } else {
          alert("Add spots on map");
        }
      }}
    >
      Confirm
    </button>
  );
}

export default BtnConfirm;
