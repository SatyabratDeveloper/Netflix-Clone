import { Outlet, useLocation } from "react-router-dom";
import { Header, Footer } from "./components";

function App() {
  const location = useLocation();

  return (
    <div className="bg-black">
      <Header />
      <div
        className={`${
          location.pathname === "/" ||
          location.pathname === "/login" ||
          location.pathname === "/signup"
            ? ""
            : "pt-20"
        }`}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
