import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cluckerz from "./pages/Cluckerz/Cluckerz";
import Landing from "./pages/landing/Landing";
import Traits from "./pages/Traits/Traits";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<Traits />} path="/traits" />
        <Route element={<Cluckerz />} path="/cluck" />
      </Routes>
    </div>
  );
}

export default App;
