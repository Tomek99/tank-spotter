import React, { useState } from "react";
import Artillery from "../Vehicles/Artillery/Artillery";
import HeavyTank from "../Vehicles/HeavyTank/HeavyTank";
import MediumTank from "../Vehicles/MediumTank/MediumTank";
import Scout from "../Vehicles/Scout/Scout";
import TankDestroyer from "../Vehicles/TankDestroyer/TankDestroyer";
import { useDrag } from "@use-gesture/react";
import styles from "./DragVehicle.module.scss";

interface DragElementProps {
  value: number;
}

interface Coordinate {
  x: number;
  y: number;
}

function DragVehicle({ value }: DragElementProps) {
  const [logoPos, setLogoPos] = useState<Coordinate>({ x: 0, y: 0 });

  const bindLogoPos = useDrag((params) => {
    setLogoPos({
      x: params.offset[0],
      y: params.offset[1],
    });
  });
  return (
    <div
      {...bindLogoPos()}
      style={{ position: "relative", top: logoPos.y, left: logoPos.x }}
      className={styles.DragVehicle}
    >
      {(() => {
        switch (value) {
          case 1:
            return <Artillery />;
          case 2:
            return <HeavyTank />;
          case 3:
            return <MediumTank />;
          case 4:
            return <Scout />;
          case 5:
            return <TankDestroyer />;
          default:
            return null;
        }
      })()}
    </div>
  );
}

export default DragVehicle;
