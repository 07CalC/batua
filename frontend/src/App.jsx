import logo from "./logo.svg";
import "./App.css";
import { BarChart, LineChart } from "@mui/x-charts";
import { Navbar } from "./components/Navbar";
import {
  BrowserRouter,
  HashRouter,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp";
import { AllContextProvider, ContextProvider } from "./context/context";
import { SignIn } from "./pages/SignIn";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      
      <HashRouter>
        <AllContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        </AllContextProvider>
      </HashRouter>
    </div>
  );
}

export default App;
