import "./App.css";
import { NavigationBar, Footer } from "./components/index";

function App() {
  return (
    <>
      <NavigationBar />
      <div>{import.meta.env.VITE_API_URL}</div>
      <Footer />
    </>
  );
}

export default App;
