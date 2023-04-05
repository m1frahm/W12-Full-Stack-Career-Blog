import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Single from "./pages/Single";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// const Layout = () => {
//   return (
//     <>
//       <Navbar/>
//       <Outlet/>
//       <Footer/>
//     </>
//   )
// }

// /
//  -> /
//   -> /home
//   -> /profile
//  -> /login
//  -> terms

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;