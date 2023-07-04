import './App.css';
import  QRCode from './Component/Qrcode.jsx' 
import Navbar from './Component/Navbar';

import CALL from './Component/CALL';
import Url from './Component/Url';

import TEXT from './Component/TEXT';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <QRCode/>
      
      <CALL/>
      <Url/>
      <TEXT/>
      
           
    </div>
  );
}

export default App;
