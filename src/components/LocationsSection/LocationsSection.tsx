import React from "react";
import styles from "./LocationsSection.module.scss";

interface Vehicle {
  id: number;
  x: number;
  y: number;
  sort: number;
}

interface SavedMapInterface {
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
        savedMaps.map((item, i) => <p key={i}>{item.name}</p>)
      ) : (
        <p>No map added </p>
      )}
    </div>
  );
}

export default LocationsSection;
