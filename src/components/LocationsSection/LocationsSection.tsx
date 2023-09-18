import React from "react";
import styles from "./LocationsSection.module.scss";
import SelectedSpots from "./SelectedSpots/SelectedSpots";

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
  savedMaps: SavedMapInterface[];
}

function LocationsSection({ savedMaps }: LocationsSectionProps) {
  return (
    <div className={styles.LocationSection}>
      {savedMaps.length !== 0 ? (
        [...savedMaps]
          .reverse()
          .map((item, i) => <SelectedSpots item={item} key={i} />)
      ) : (
        <p>No map added </p>
      )}
    </div>
  );
}

export default LocationsSection;
