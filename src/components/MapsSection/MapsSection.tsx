import React from "react";
import mapsData from "../../data/maps.json";
import MapItem from "./MapItem/MapItem";
import styles from "./MapsSection.module.scss";

function MapsSection() {
  return (
    <div className={styles.MapsSection}>
      {mapsData.map((item, i) => (
        <MapItem item={item} key={i} />
      ))}
    </div>
  );
}

export default MapsSection;
