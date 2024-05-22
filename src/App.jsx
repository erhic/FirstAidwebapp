import { Outlet } from "react-router-dom";
import Navigation from "./Sections/Navigation";
import Footer from "./Sections/Footer";

const App = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
