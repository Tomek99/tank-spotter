import React, { useContext, useState } from "react";
import styles from "./SelectedSpots.module.scss";
import Spot from "./Spot/Spot";
import BtnDefault from "../../Buttons/BtnDefault/BtnDefault";
import { GlobalContext } from "../../../contexts/GlobalContext";
import BlurScreen from "../../BlurScreen/BlurScreen";
import EditMap from "../EditMap/EditMap";

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
}

function SelectedSpots({ item }: LocationsSectionProps) {
  const { deleteMap } = useContext(GlobalContext);

  const [blurScreen, setBlurScreen] = useState<boolean>(false);

  function handleBlurScreen() {
    setBlurScreen(!blurScreen);
  }

  return (
    <div className={styles.SelectedSpots}>
      <div className={styles.divContent}>
        <h2>{item.name}</h2>
        <div className={styles.divBtn}>
          <BtnDefault
            text={"Edit"}
            handleBtn={handleBlurScreen}
            id={item.idSavedMap}
          />
          <BtnDefault
            text={"Delete map"}
            handleBtn={deleteMap}
            id={item.idSavedMap}
          />
        </div>
      </div>
      <div
        className={styles.divLayout}
        style={{ backgroundImage: `url(${item.mapName})` }}
      >
        {item.vehicles.map((obj, k) => (
          <Spot item={obj} key={k} />
        ))}
      </div>
      {item.additionInformation.length !== 0 ? (
        <div className={styles.extraText}>
          <h2>Addition information:</h2>
          <p>{item.additionInformation}</p>
        </div>
      ) : null}

      {/* <MapConfiguration /> */}
      {blurScreen ? (
        <React.Fragment>
          <EditMap item={item} handleBlurScreen={handleBlurScreen} />
          <BlurScreen handleBlurScreen={handleBlurScreen} />
        </React.Fragment>
      ) : null}
    </div>
  );
}

export default SelectedSpots;
