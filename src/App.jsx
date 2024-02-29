import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HotelPage from "./pages/hotels/HotelPage";
import Layout from "./Layout";
import BusPage from "./pages/bus/BusPage";
import CabsPage from "./pages/cabs/CabsPage";
import HomePage from "./pages/home/HomePage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<HomePage />} />
        <Route path="hotel" element={<HotelPage />} />
        <Route path="bus" element={<BusPage />} />
        <Route path="cabs" element={<CabsPage />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
