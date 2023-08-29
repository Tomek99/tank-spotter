import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NavigationBar, Footer, MapsSection } from "./components/index";

function App() {
  return (
    <>
      <NavigationBar />
      <section className="centerSection">
        <Routes>
          <Route path="/" element={<MapsSection />} />
          <Route path="your-location" element={<MapsSection />} />
          <Route path="recomended-spots" element={<MapsSection />} />
          <Route path="contact" element={<MapsSection />} />
        </Routes>
      </section>
      <Footer />
    </>
  );
}

export default App;
