import "./App.css";
import "./server";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Vans, { loader as vansPageLoader } from "./Pages/Vans/Vans";
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
import NotFound from "./Pages/NotFound";
import Error from "./Components/Error";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansPageLoader}
        errorElement={<Error />}
      />
      <Route
        path="vans/:id"
        element={<VansDetail />}
        errorElement={<Error />}
      />
      <Route path="host" element={<HostLayout />} errorElement={<Error />}>
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
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

//Because that easiest way to update to a v6.4 is to use createRoutesFromElements so I changed it to newer version
