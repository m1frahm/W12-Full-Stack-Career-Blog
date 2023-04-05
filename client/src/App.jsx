import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Outlet } from "react-router-dom";
import "./index.css";
import Single from "./pages/Single";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Routes>
          <Route
            element={
              <>
                <Navbar />
                <Outlet />
                <Footer />
              </>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/write" element={<Write />} />
            <Route path="/post/:id" element={<Single />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
