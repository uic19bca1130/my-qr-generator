import { toDataURL } from "qrcode";
import { useState } from "react";
import Button from "@mui/material/Button";

function QRCodeGenerator() {
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");

  const generateQRCode = () => {
    toDataURL(
      url,
     {
  width: 400,
  margin: 2,
  color: {
    dark: "#335383FF",
    light: "#EEEEEEFF",
  },
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
        placeholder="e.g. https://url.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Button variant="contained" onClick={generateQRCode}>
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
          >
            Download
          </Button>
        </>
      )}
    </div>
  );
}

export default QRCodeGenerator;
