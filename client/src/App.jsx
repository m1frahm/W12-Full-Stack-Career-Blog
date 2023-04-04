import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
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
    element: <Layout/>,
    children: [
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/single",
        element:<Single/>
      },
      {
        path: "/write",
        element:<Write/>
      }
    ]
  },
  {
    path: "/Single",
    element: <Single/>,
  },
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "/Write",
    element: <Write/>,
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
