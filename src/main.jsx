import "./index.css";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Firstaid from "./Pages/Firstaid.jsx";
import Courses from "./Pages/Courses.jsx";
import Resources from "./Pages/Resources.jsx";
import Contactus from "./Pages/Contactus.jsx";
import Emergency from "./Pages/Emergency.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/firstaid", element: <Firstaid /> },
      { path: "/emergency", element: <Emergency /> },
      { path: "/courses", element: <Courses /> },
      { path: "/resources", element: <Resources /> },
      { path: "/contactus", element: <Contactus /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
