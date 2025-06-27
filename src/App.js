import React, { useState, useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import QRScanner from "./pages/Scanner";
import Stream from "./pages/Stream";
import InstallPrompt from "./components/InstallPrompt";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/scanner" element={<QRScanner />}></Route>
        <Route path="/stream" element={<Stream />}></Route>
      </Routes>

      {/* PWA Install Prompt - shows on all pages */}
      <InstallPrompt />
    </BrowserRouter>
  );
};

export default App;
