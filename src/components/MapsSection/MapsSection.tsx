import React, { useState } from "react";
import mapsData from "../../data/maps.json";
import MapItem from "./MapItem/MapItem";
import styles from "./MapsSection.module.scss";
import Searcher from "./Searcher/Searcher";

interface Item {
  id: number;
  name: string;
  path: string;
  camoType: string;
  availableBattleTypes: string[];
}

function MapsSection() {
  const [maps, setMaps] = useState<Item[]>([...mapsData]);

  function filterBySearch(e: React.ChangeEvent<HTMLInputElement>): void {
    console.log(e.target.value);
    const query = e.target.value;

    let updatedList = [...mapsData];
    if (e.target.value.length <= 1) {
      updatedList = [...mapsData];
    } else {
      updatedList = mapsData.filter((item) => {
        return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      });
    }

    setMaps(updatedList);
  }
  return (
    <div className={styles.MapsSection}>
      <div className={styles.findMapDiv}>
        <p className={styles.pText}>Find a map</p>
        <Searcher filterBySearch={filterBySearch} />

        {maps.length !== 0 ? (
          <p className={styles.pSelectMap}>Select a map</p>
        ) : (
          <p className={styles.pSelectMap}>No map found...</p>
        )}
      </div>
      <div className={styles.mapsDiv}>
        {maps.map((item, i) => (
          <MapItem item={item} key={i} />
        ))}
      </div>
    </div>
  );
}

export default MapsSection;
