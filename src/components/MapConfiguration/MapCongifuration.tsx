import React, { useState, useContext } from "react";
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
import DragVehicle from "../DragVehicle/DragVehicle";
import TextArea from "../TextArea/TextArea";
import { GlobalContext } from "../../contexts/GlobalContext";

interface Item {
  id: number;
  name: string;
  path: string;
  camoType: string;
  availableBattleTypes: string[];
}

interface MapConfigProps {
  item: Item;
  handleBlurScreen: () => void;
}

interface Vehicle {
  id: number;
  x: number;
  y: number;
  sort: number;
}

function MapConfiguration({ item, handleBlurScreen }: MapConfigProps) {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  const { addMap } = useContext(GlobalContext);

  function addVehicle(value: number): void {
    const generateId = Math.floor(Math.random() * 999999);
    setVehicles([...vehicles, { id: generateId, x: 0, y: 0, sort: value }]);
  }

  function clearMap(): void {
    setVehicles([]);
  }

  function updateCooridnates(id: number, x: number, y: number): void {
    const findIndex = vehicles.findIndex((item) => item.id === id);
    const updatedVehicles: Vehicle[] = [...vehicles];
    updatedVehicles[findIndex].x = x;
    updatedVehicles[findIndex].y = y;

    setVehicles(updatedVehicles);
  }

  function deleteMark(id: number): void {
    const newArray = vehicles.filter((value) => value.id !== id);
    setVehicles(newArray);
  }

  const [idMark, setIdMark] = useState<number>(999);

  function settleMark(id: number) {
    setIdMark(id);
  }

  return (
    <div className={styles.MapConfiguration}>
      <h1>{item.name}</h1>
      <div className={styles.divContent}>
        <div className={styles.divTanks}>
          <span onClick={() => addVehicle(1)}>
            <HeavyTank />
          </span>
          <span onClick={() => addVehicle(2)}>
            <MediumTank />
          </span>
          <span onClick={() => addVehicle(3)}>
            <Scout />
          </span>
          <span onClick={() => addVehicle(4)}>
            <TankDestroyer />
          </span>
          <span onClick={() => addVehicle(0)}>
            <Artillery />
          </span>
        </div>

        <div className={styles.divBtns}>
          {/* <BtnDeleteTank handleBtn={deleteMark} id={idMark} /> */}
          <BtnClearMap handleBtn={clearMap} />
        </div>
      </div>

      <div
        className={styles.divLayout}
        style={{ backgroundImage: `url(${item.path})` }}
      >
        {vehicles.length !== 0
          ? vehicles.map((item, i) => (
              <DragVehicle
                key={i}
                item={item}
                settleMark={settleMark}
                updateCooridnates={updateCooridnates}
              />
            ))
          : null}
      </div>
      <div>addition information:</div>
      <TextArea />
      <div>
        <BtnConfirm
          addMap={addMap}
          item={item}
          vehicles={vehicles}
          handleBlurScreen={handleBlurScreen}
        />
        <BtnCancel handleBtn={handleBlurScreen} />
      </div>
    </div>
  );
}

export default MapConfiguration;
