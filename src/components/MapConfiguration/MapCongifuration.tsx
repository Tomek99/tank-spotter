import React from "react";
import styles from "./MapConfiguration.module.scss";
import BtnCancel from "../Buttons/BtnCancel/BtnCancel";
import BtnConfirm from "../Buttons/BtnConfirm/BtnConfirm";
import HeavyTank from "../Vehicles/HeavyTank/HeavyTank";
import MediumTank from "../Vehicles/MediumTank/MediumTank";
import Scout from "../Vehicles/Scout/Scout";
import TankDestroyer from "../Vehicles/TankDestroyer/TankDestroyer";
import Artillery from "../Vehicles/Artillery/Artillery";
import BtnDeleteTank from "../Buttons/BtnDeleteTank/BtnDeleteTank";
import BtnClearMap from "../Buttons/BtnClearMap/BtnClearMap";

interface Item {
  id: number;
  name: string;
  path: string;
  camoType: string;
  availableBattleTypes: string[];
}

interface MapConfigProps {
  item: Item;
}

function MapConfiguration({ item }: MapConfigProps) {
  return (
    <div className={styles.MapConfiguration}>
      <h1>{item.name}</h1>
      <div className={styles.divContent}>
        <div className={styles.divTanks}>
          <HeavyTank />
          <MediumTank />
          <Scout />
          <TankDestroyer />
          <Artillery />
        </div>

        <div className={styles.divBtns}>
          <BtnDeleteTank />
          <BtnClearMap />
        </div>
      </div>

      <img src={item.path} />
      <div>addition information:</div>
      <textarea />
      <div>
        <BtnConfirm />
        <BtnCancel />
      </div>
    </div>
  );
}

export default MapConfiguration;
