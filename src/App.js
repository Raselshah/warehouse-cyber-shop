import { Route, Routes } from "react-router-dom";
import "./App.css";
import RequireAuth from "./Hooks/RequireAuth/RequireAuth";
import AddNewItems from "./Pages/AddNewItems/AddNewItems";
import FindMyItems from "./Pages/FindMyItems/FindMyItems";
import Footer from "./Pages/Footer/Footer";
import HomePage from "./Pages/HomePage/HomePage";
import LogIn from "./Pages/LogIn/LogIn";
import ManageInventory from "./Pages/ManageInventory/ManageInventory";
import Navmenu from "./Pages/Navmenu/Navmenu";
import NotAPage from "./Pages/NotAPage/NotAPage";
import SignUp from "./Pages/SignUp/SignUp";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";

function App() {
  return (
    <div className="App">
      <Navmenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <ManageInventory />
            </RequireAuth>
          }
        />
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <SingleProduct />
            </RequireAuth>
          }
        />
        <Route path="/add" element={<AddNewItems />} />
        <Route path="/item" element={<FindMyItems />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotAPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
