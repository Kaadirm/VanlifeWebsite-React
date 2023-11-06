import "./App.css";
import "./server";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Vans from "./Pages/Vans/Vans";
import VansDetail from "./Pages/Vans/VansDetail";
import HostLayout from "./Components/HostLayout";
import Dashboard from "./Pages/Host/Dashboard";
import Income from "./Pages/Host/Income";
import HostVans from "./Pages/Host/HostVans";
import Reviews from "./Pages/Host/Reviews";
import HostVansDetails from "./Pages/Host/HostVansDetails";
import HostVansInfo from "./Pages/Host/HostVansInfo";
import HostVansPricing from "./Pages/Host/HostVansPricing";
import HostVansPhoto from "./Pages/Host/HostVansPhoto";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VansDetail />} />
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVansDetails />}>
                <Route index element={<HostVansInfo />} />
                <Route path="pricing" element={<HostVansPricing />} />
                <Route path="photos" element={<HostVansPhoto />} />
              </Route>
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
