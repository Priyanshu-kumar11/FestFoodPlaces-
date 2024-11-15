import "./App.css";
import { Outlet } from "react-router-dom";

import Navbar from "./Components/NavBar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
