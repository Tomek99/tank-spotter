import React, { useState } from "react";
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
import { useDrag } from "@use-gesture/react";

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

interface Coordinate {
  x: number;
  y: number;
}

function MapConfiguration({ item }: MapConfigProps) {
  const [logoPos, setLogoPos] = useState<Coordinate>({ x: 0, y: 0 });

  const bindLogoPos = useDrag((params) => {
    setLogoPos({
      x: params.offset[0],
      y: params.offset[1],
    });
  });
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

      <div>
        <img src={item.path} />
      </div>
      <div
        {...bindLogoPos()}
        style={{ position: "relative", top: logoPos.y, left: logoPos.x }}
      >
        addition information:
      </div>
      <textarea />
      <div>
        <BtnConfirm />
        <BtnCancel />
      </div>
    </div>
  );
}

export default MapConfiguration;
