import logo from "./logo.svg";
import "./App.css";
import { BarChart, LineChart } from "@mui/x-charts";
import { Navbar } from "./components/Navbar";
import { HashRouter, Route, Router, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App flex flex-col items-center w-lvw">
      <Navbar />
      <div className="mt-16 w-full"></div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
