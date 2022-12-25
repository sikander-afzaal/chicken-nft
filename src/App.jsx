import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Loader from "./components/Loader/Loader";
import Cluckerz from "./pages/Cluckerz/Cluckerz";
import Landing from "./pages/landing/Landing";
import Traits from "./pages/Traits/Traits";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="App">
      {isLoading && <Loader />}
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<Traits />} path="/traits" />
        <Route element={<Cluckerz />} path="/cluck" />
      </Routes>
    </div>
  );
}

export default App;
