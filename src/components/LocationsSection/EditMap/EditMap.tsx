import React, { useState } from "react";
import styles from "./EditMap.module.scss";
import HeavyTank from "../../Vehicles/HeavyTank/HeavyTank";
import BtnClearMap from "../../Buttons/BtnClearMap/BtnClearMap";
import BtnDeleteTank from "../../Buttons/BtnDeleteTank/BtnDeleteTank";
import TextArea from "../../TextArea/TextArea";
import Artillery from "../../Vehicles/Artillery/Artillery";
import MediumTank from "../../Vehicles/MediumTank/MediumTank";
import Scout from "../../Vehicles/Scout/Scout";
import TankDestroyer from "../../Vehicles/TankDestroyer/TankDestroyer";
import EditVehicle from "./EditVehicle/EditVehicle";
import BtnCancel from "../../Buttons/BtnCancel/BtnCancel";
import BtnUpdateData from "../../Buttons/BtnUpdateData/BtnUpdateData";

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

interface LocationsSectionProps {
  item: SavedMapInterface;
  handleBlurScreen: () => void;
}

function EditMap({ item, handleBlurScreen }: LocationsSectionProps) {
  const [vehicles, setVehicles] = useState<Vehicle[]>(
    item.vehicles.map((item) => ({ ...item }))
  );

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

  const [message, setMessage] = useState<string>(item.additionInformation);

  function handleMessage(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setMessage(e.target.value);
  }
  return (
    <div className={styles.EditMap}>
      {" "}
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
          <BtnDeleteTank handleBtn={deleteMark} id={idMark} />
          <BtnClearMap handleBtn={clearMap} />
        </div>
      </div>
      <div
        className={styles.divLayout}
        style={{ backgroundImage: `url(${item.mapName})` }}
      >
        {vehicles.length !== 0
          ? vehicles.map((item, i) => (
              <EditVehicle
                key={i}
                item={item}
                settleMark={settleMark}
                updateCooridnates={updateCooridnates}
              />
            ))
          : null}
      </div>
      <div>addition information:</div>
      <TextArea message={message} handleMessage={handleMessage} />
      <div>
        <BtnUpdateData
          item={item}
          vehicles={vehicles}
          handleBlurScreen={handleBlurScreen}
          message={message}
        />

        <BtnCancel handleBtn={handleBlurScreen} />
      </div>
    </div>
  );
}

export default EditMap;
