import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import "./index.css";
import Single from './pages/Single';
import Login from './pages/Login';
import Write from './pages/Write';
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello</div>
  },
  {
    path: "/login",
    element: <Login/>
  },
]);

function App() {

  return (
    <div>
  <RouterProvider router={router}/> 
    </div>
  );
}



export default App
