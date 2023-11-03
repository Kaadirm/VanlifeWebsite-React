import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Vans from "./Components/Vans";

import "./server";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <nav className="header">
            <Link to="/VanlifeWebsite-React">#VANLIFE</Link>
            <div className="link-div">
              <Link to="/VanlifeWebsite-React/About">About</Link>
              <Link to="/VanlifeWebsite-React/Vans">Vans</Link>
            </div>
          </nav>
          <Routes>
            <Route path="/VanlifeWebsite-React" element={<Home />} />
            <Route path="/VanlifeWebsite-React/About" element={<About />} />
            <Route path="/VanlifeWebsite-React/Vans" element={<Vans />} />
          </Routes>
        </div>
        <footer className="footer">
          <p>&#169;2002 #VANLIFE</p>
        </footer>
      </BrowserRouter>
    </>
  );
}

//I did had to make link and route start with /VanlifeWebsite-React
//Cause when I deploy my homePage is my Repo name

export default App;
