import React, { useState } from "react";
import Artillery from "../../../Vehicles/Artillery/Artillery";
import HeavyTank from "../../../Vehicles/HeavyTank/HeavyTank";
import MediumTank from "../../../Vehicles/MediumTank/MediumTank";
import Scout from "../../../Vehicles/Scout/Scout";
import TankDestroyer from "../../../Vehicles/TankDestroyer/TankDestroyer";
import { useDrag } from "@use-gesture/react";
import styles from "./EditVehicle.module.scss";

interface Vehicle {
  item: {
    id: number;
    x: number;
    y: number;
    sort: number;
  };
  settleMark: (id: number) => void;
  updateCooridnates: (id: number, x: number, y: number) => void;
}

interface Coordinate {
  x: number;
  y: number;
}

function EditVehicle({ item, settleMark, updateCooridnates }: Vehicle) {
  const [logoPos, setLogoPos] = useState<Coordinate>({ x: item.x, y: item.y });

  const bindLogoPos = useDrag((params) => {
    setLogoPos({
      x: params.offset[0],
      y: params.offset[1],
    });

    updateCooridnates(item.id, params.offset[0], params.offset[1]);
  });

  return (
    <div
      {...bindLogoPos()}
      style={{
        position: "absolute",
        top: logoPos.y,
        left: logoPos.x,
        touchAction: "none",
      }}
      className={styles.DragVehicle}
      onClick={() => settleMark(item.id)}
    >
      {(() => {
        switch (item.sort) {
          case 0:
            return <Artillery />;
          case 1:
            return <HeavyTank />;
          case 2:
            return <MediumTank />;
          case 3:
            return <Scout />;
          case 4:
            return <TankDestroyer />;
          default:
            return null;
        }
      })()}
    </div>
  );
}

export default EditVehicle;
