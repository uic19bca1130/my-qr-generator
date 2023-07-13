import { toDataURL } from "qrcode";
import { useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams from react-router-dom
import  Button from "@mui/material/Button";

function QRCodeGenerator() {
  const [url, setUrl] = useState("");

  const [qr, setQr] = useState("");
  const { text } = useParams();
  const generateQRCode = () => {
    const phoneNumber = url.trim(); //trim removeing whitespace from the end of
     const textMessage = "";

    
    const text = Number(phoneNumber);
    let qrText;
if(text) 
{
  qrText = `tel:${phoneNumber}`;//Add 'tel:' prefix to the phone number
}
else{
  qrText = `${phoneNumber}`;
}
    qrText = `smsto:9816167960:${qrText}:${textMessage}`;
   

    toDataURL(
      qrText,//Use the modified qrText instead of url
      {
        width: 400,
        margin: 2,
        color: {},
      },
      (err, dataURL) => {//there is an error while generating the QR code, the function logs the error to the console using console.error()
        if (err) return console.error(err);
        console.log(dataURL);
        setQr(dataURL);
      }
    );
  };


  return (  
    <div className="app">
 
      <h1>QR Generator</h1>
      <input
        type="text"    
        placeholder={`e.g.https://${text}.com`}
        value={url}
        onChange={(e) => setUrl(e.target.value)}//onchange when the input value changes--( retrieves the current value of the input field,)
      />
      <Button
      
        variant="contained"
        onClick={generateQRCode}
        sx={{
          marginLeft: "15px",
          background: "linear-gradient(to bottom,#00ff00, #009900)",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          transform: "translateY(0)",
          transition: "transform 0.3s ease-out",
        }}      
      >  
        Generate
      </Button>
      {qr && (
        <>
          <img src={qr} alt="QR Code" />
          <Button
            variant="contained" 
            color="success"
            href={qr}
            download="qrcode.png"
            sx={{
              marginTop: "16px",
              background: "linear-gradient(to bottom, #00ff00,#009900)",//added 3d colour in the button
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              transform: "translateY(0)",
              transition: "transform 0.3s ease-out",
            }}
          >
            Download
          </Button>
          <a href={`tel:${url}`} style={{ textDecoration: "none" }}>
          </a>
        </>
      )}
      </div> 
  );
}

export default QRCodeGenerator;
