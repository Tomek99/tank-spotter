import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  NavigationBar,
  Footer,
  MapsSection,
  LocationsSection,
  SpotsSection,
  AboutSection,
} from "./components/index";

import { GlobalContext } from "./contexts/GlobalContext";
import { useState } from "react";

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

function App() {
  const [savedMaps, setSavedMaps] = useState<SavedMapInterface[]>(() => {
    const storedValue = localStorage.getItem("savedMaps");
    if (storedValue !== null) return JSON.parse(storedValue);
    else return [];
  });

  function addMap(item: SavedMapInterface): void {
    const newSavedMaps = [...savedMaps, item];
    setSavedMaps(newSavedMaps);

    try {
      localStorage.setItem("savedMaps", JSON.stringify(newSavedMaps));
    } catch (error) {
      console.error("Error saving data to local storage:", error);
    }
  }

  function deleteMap(id: number): void {
    const newSavedMaps = savedMaps.filter((obj) => obj.idSavedMap !== id);
    setSavedMaps(newSavedMaps);

    try {
      localStorage.setItem("savedMaps", JSON.stringify(newSavedMaps));
    } catch (error) {
      console.error("Error saving data to local storage:", error);
    }
  }

  return (
    <GlobalContext.Provider value={{ addMap, deleteMap }}>
      <NavigationBar />
      <section className="centerSection">
        <Routes>
          <Route path="/" element={<MapsSection />} />
          <Route
            path="your-location"
            element={<LocationsSection savedMaps={savedMaps} />}
          />
          <Route path="recomended-spots" element={<SpotsSection />} />
          <Route path="about" element={<AboutSection />} />
        </Routes>
      </section>
      <Footer />
    </GlobalContext.Provider>
  );
}

export default App;
