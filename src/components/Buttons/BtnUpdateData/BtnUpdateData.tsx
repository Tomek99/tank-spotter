import React, { useContext } from "react";
import styles from "./BtnUpdateData.module.scss";
import { GlobalContext } from "../../../contexts/GlobalContext";

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

interface BtnUpdateDataProps {
  item: SavedMapInterface;
  handleBlurScreen: () => void;
  vehicles: Vehicle[];
  message: string;
}

function BtnUpdateData({
  item,
  vehicles,
  handleBlurScreen,
  message,
}: BtnUpdateDataProps) {
  const { updateMap } = useContext(GlobalContext);

  function handleBtn(): void {
    const updatedMap = {
      ...item,
      vehicles: vehicles.map((item) => ({ ...item })),
      additionInformation: message,
    };
    updateMap(updatedMap);
    handleBlurScreen();
    alert("Map has been updated");
  }

  return (
    <button className={styles.BtnUpdateData} onClick={handleBtn}>
      Confirm
    </button>
  );
}

export default BtnUpdateData;
