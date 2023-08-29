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
}

function MapItem({ item }: MapItemProps) {
  const { id, name, path, camoType, availableBattleTypes } = item;
  return (
    <div className={styles.MapItem}>
      <div>
        <p>
          {id + 1}. {name}
        </p>
      </div>
      <div>
        <img src={path} />
      </div>
      <div>
        <div>
          <span>Camo type:</span>
          <span>{camoType}</span>
        </div>
        <div>
          <span>Available battle types:</span>
          <div>
            {availableBattleTypes.map((text) => (
              <span>{text}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapItem;
