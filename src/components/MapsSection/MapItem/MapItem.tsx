import React from "react";
import styles from "./MapItem.module.scss";

interface Item {
  id: number;
  name: string;
  path: string;
  camoType: string;
  availableBattleTypes: string[];
}

interface MapItemProps {
  item: Item;
  handleMap: () => void;
  selectMap: (item: Item) => void;
}

function MapItem({ item, handleMap, selectMap }: MapItemProps) {
  const { id, name, path, camoType, availableBattleTypes } = item;
  return (
    <div
      className={styles.MapItem}
      onClick={() => {
        handleMap();
        selectMap(item);
      }}
    >
      <div className={styles.divTitle}>
        <span className={styles.title}>
          {id + 1}. {name}
        </span>
      </div>
      <div>
        <img src={path} />
      </div>
      <div className={styles.divContent}>
        <div className={styles.divCamoType}>
          <span>Camo type: </span>
          <span>{camoType}</span>
        </div>
        <div className={styles.divBattleTypes}>
          <div>Available battle types: </div>
          <span className={styles.spanBattleTypes}>
            {availableBattleTypes.map((text, i) => (
              <span key={i}>{text}</span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MapItem;
