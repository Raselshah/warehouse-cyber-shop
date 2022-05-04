import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddNewItems from "./Pages/AddNewItems/AddNewItems";
import Footer from "./Pages/Footer/Footer";
import HomePage from "./Pages/HomePage/HomePage";
import LogIn from "./Pages/LogIn/LogIn";
import ManageInventory from "./Pages/ManageInventory/ManageInventory";
import Navmenu from "./Pages/Navmenu/Navmenu";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Navmenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/manage" element={<ManageInventory />} />
        <Route path="/add" element={<AddNewItems />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
