import { toDataURL } from "qrcode";
import { useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams from react-router-dom
import Button from "@mui/material/Button";

function QRCodeGenerator() {
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");
  const { text } = useParams();

  const generateQRCode = () => {
    const phoneNumber = url.trim();
    const text = Number(phoneNumber);
    let qrText;
    if (text) {
      qrText = `tel:${phoneNumber}`;
    } else {
      qrText = `${phoneNumber}`;
    }

    toDataURL(
      qrText,
      {
        width: 400,
        margin: 2,
        color: {},
      },
      (err, dataURL) => {
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
        placeholder={`e.g: ${text}`}
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <Button
        variant="contained"
        onClick={generateQRCode}
        sx={{
          marginRight: "30px",
          background: "linear-gradient(to bottom, #00ff00, #009900)",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          transform: "translateY(0)",
          transition: "transform 0.3s ease-out",
          animation: "fade-in 1s ease-in-out",
        }}
      >
        Generate
      </Button>

      {qr ? (
        <div style={{ textAlign: "center" }}>
            <h2>Welcome to my QR Code Generator</h2>
          <img src={qr} alt="QR Code" />

          <Button
            variant="contained"
            color="success"
            href={qr}
            download="qrcode.png"
            sx={{
              marginTop: "16px",
              background: "linear-gradient(to bottom, #00ff00, #009900)",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              transform: "translateY(0)",
              transition: "transform 0.3s ease-out",
              animation: "fade-in 1s ease-in-out",
            }}
          >
            Download
          </Button>
          <a href={`tel:${url}`} style={{ textDecoration: "none" }}>

          </a>
        </div>
      ) : (                                        //using the textAlign CSS property
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "50px", fontWeight: "bold" }}>Welcome to my QR code Generator</h2>
        </div>
      )}
    </div>
  );
}

export default QRCodeGenerator;
