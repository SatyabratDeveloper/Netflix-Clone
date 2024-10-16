import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components";

function App() {
  return (
    <div className="bg-black">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
