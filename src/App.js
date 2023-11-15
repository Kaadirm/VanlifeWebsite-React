import "./App.css";
import "./server";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  redirect,
} from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login, { loader as loginLoader } from "./Pages/Login";
import Vans, { loader as vansPageLoader } from "./Pages/Vans/Vans";
import VansDetail, {
  loader as vansPageDetailLoader,
} from "./Pages/Vans/VansDetail";
import HostLayout from "./Components/HostLayout";
import Dashboard, {
  loader as hostDashboardLoader,
} from "./Pages/Host/Dashboard";
import Income from "./Pages/Host/Income";
import HostVans, { loader as hostVansPageLoader } from "./Pages/Host/HostVans";
import Reviews from "./Pages/Host/Reviews";
import HostVansDetails, {
  loader as hostVansPageDetailsLoader,
} from "./Pages/Host/HostVansDetails";
import HostVansInfo from "./Pages/Host/HostVansInfo";
import HostVansPricing from "./Pages/Host/HostVansPricing";
import HostVansPhoto from "./Pages/Host/HostVansPhoto";
import NotFound from "./Pages/NotFound";
import Error from "./Components/Error";
import { requireAuth } from "./utils";

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
        loader={vansPageDetailLoader}
        errorElement={<Error />}
      />
      <Route
        path="host"
        element={<HostLayout />}
        loader={async () => await requireAuth()}
      >
        <Route index element={<Dashboard />} loader={hostDashboardLoader} />
        <Route
          path="income"
          element={<Income />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="vans"
          element={<HostVans />}
          loader={hostVansPageLoader}
          errorElement={<Error />}
        />
        <Route
          path="vans/:id"
          element={<HostVansDetails />}
          loader={hostVansPageDetailsLoader}
          errorElement={<Error />}
        >
          <Route
            index
            element={<HostVansInfo />}
            loader={async () => await requireAuth()}
          />
          <Route
            path="pricing"
            element={<HostVansPricing />}
            loader={async () => await requireAuth()}
          />
          <Route
            path="photos"
            element={<HostVansPhoto />}
            loader={async () => await requireAuth()}
          />
        </Route>
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async () => await requireAuth()}
        />
      </Route>
      <Route
        path="login"
        element={<Login />}
        loader={() => {
          if (localStorage.getItem("isLoggedIn")) {
            const response = redirect("/");
            response.body = true;
            return response;
          }
          return loginLoader;
        }}
      />
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
