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

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
