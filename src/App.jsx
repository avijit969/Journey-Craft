import { BrowserRouter, Route, Routes } from "react-router-dom";
import HotelPage from "./pages/hotels/HotelPage";
import Layout from "./Layout";
import BusPage from "./pages/bus/BusPage";
import CabsPage from "./pages/cabs/CabsPage";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import SignUpPage from "./pages/signUp/SignUpPage";
import LogOut from "./pages/logout/LogOut";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="hotel" element={<HotelPage />} />
          <Route path="bus" element={<BusPage />} />
          <Route path="cabs" element={<CabsPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/logOut" element={<LogOut/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
