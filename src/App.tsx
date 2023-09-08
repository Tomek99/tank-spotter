import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  NavigationBar,
  Footer,
  MapsSection,
  LocationsSection,
  SpotsSection,
  ContactSection,
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
  vehicles: Vehicle[];
  mapName: string;
  name: string;
  additionInformation: string;
}

function App() {
  const [savedMaps, setSavedMaps] = useState<SavedMapInterface[]>([]);

  function addMap(item: SavedMapInterface): void {
    setSavedMaps([...savedMaps, item]);
  }

  return (
    <GlobalContext.Provider value={{ addMap }}>
      <NavigationBar />
      <section className="centerSection">
        <Routes>
          <Route path="/" element={<MapsSection />} />
          <Route
            path="your-location"
            element={<LocationsSection savedMaps={savedMaps} />}
          />
          <Route path="recomended-spots" element={<SpotsSection />} />
          <Route path="contact" element={<ContactSection />} />
        </Routes>
      </section>
      <Footer />
    </GlobalContext.Provider>
  );
}

export default App;
