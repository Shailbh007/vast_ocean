import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import "./App.css";
function App() {
  return (
  <div className="App">
    <BrowserRouter>
    <Routes>
      <Route index element={<Landing/>}/>
      <Route path="home" element={<Home/>}/>
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
