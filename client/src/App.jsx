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



const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Navbar/>
    </div>,
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
