import React, { useEffect } from "react";
import { MdArrowBack, MdOutlineFlashOff } from "react-icons/md";
import { Html5QrcodeScanner } from "html5-qrcode";

import "./scanner.css";

const QRScanner = () => {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "qr-reader",
      {
        fps: 10,
        qrbox: 250,
      },
      false
    );

    scanner.render(
      (decodedText) => {
        console.log("Scan Successful:", decodedText);
        alert(`Scan Successful: ${decodedText}`);
      },
      (errorMessage) => {
        console.warn("QR Scan Error:", errorMessage);
      }
    );

    return () => {
      // Cleanup if component unmounts
      Html5QrcodeScanner.clear();
    };
  }, []);

  return (
    <div className="container">
      <div className="scan-header">
        <MdArrowBack size={25} color="#fff" />
        <h3>Scan QR code</h3>
        <MdOutlineFlashOff
          style={{ marginLeft: "auto" }}
          size={25}
          color="#fff"
        />
      </div>

      {/* Scanner renders here */}
      <div
        id="qr-reader"
        style={{ width: "100%", border: "1px solid red", padding: "10px" }}
      ></div>
    </div>
  );
};

export default QRScanner;
