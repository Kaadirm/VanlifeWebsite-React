import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Vans from "./Components/Vans";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <nav className="header">
            <Link to="/">#VANLIFE</Link>
            <div className="link-div">
              <Link to="/About">About</Link>
              <Link to="/Vans">Vans</Link>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Vans" element={<Vans />} />
          </Routes>
        </div>
        <footer className="footer">
          <p>&#169;2002 #VANLIFE</p>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// <BrowserRouter>
//         <nav>
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </BrowserRouter>
