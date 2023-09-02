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

function App() {
  return (
    <GlobalContext.Provider value={{}}>
      <NavigationBar />
      <section className="centerSection">
        <Routes>
          <Route path="/" element={<MapsSection />} />
          <Route path="your-location" element={<LocationsSection />} />
          <Route path="recomended-spots" element={<SpotsSection />} />
          <Route path="contact" element={<ContactSection />} />
        </Routes>
      </section>
      <Footer />
    </GlobalContext.Provider>
  );
}

export default App;
