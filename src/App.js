import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import Navmenu from "./Pages/Navmenu/Navmenu";

function App() {
  return (
    <div className="App">
      <Navmenu />
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
