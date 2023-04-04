import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>This is the home page</div>,
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
