import "./App.css";
import QRCode from "./Component/Qrcode";
import Navbar from "./Component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="qrcode/:text" element={<QRCode/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
