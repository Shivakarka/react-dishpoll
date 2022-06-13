import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Pollpage from "./components/Pollpage";
import Results from "./components/Results";
import PageNotFound from "./components/PageNotFound";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pollpage" element={<Pollpage />} />
          <Route path="/results" element={<Results />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
