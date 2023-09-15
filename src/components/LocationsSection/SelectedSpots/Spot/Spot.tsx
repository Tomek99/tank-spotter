import React from "react";
import styles from "./Spot.module.scss";
import Artillery from "../../../Vehicles/Artillery/Artillery";
import HeavyTank from "../../../Vehicles/HeavyTank/HeavyTank";
import MediumTank from "../../../Vehicles/MediumTank/MediumTank";
import Scout from "../../../Vehicles/Scout/Scout";
import TankDestroyer from "../../../Vehicles/TankDestroyer/TankDestroyer";

interface Vehicle {
  id: number;
  x: number;
  y: number;
  sort: number;
}

interface SpotProps {
  item: Vehicle;
}

function Spot({ item }: SpotProps) {
  return (
    <div
      className={styles.Spot}
      style={{
        position: "absolute",
        top: item.y,
        left: item.x,
        touchAction: "none",
      }}
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

export default Spot;
