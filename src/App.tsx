// src/App.tsx

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "@coinbase/onchainkit/styles.css";
import { Providers } from "./AppProviders";
import Home from "./components/Home"; // Assuming you have Home.tsx in the pages directory
// import ChatScreen from "./pages/ChatScreen"; // Assuming you have ChatScreen as a page component

const App: React.FC = () => {
  return (
    <Providers>
      {" "}
      {/* Wrap your app with AppProviders */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/chat" element={<ChatScreen />} /> */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </Providers>
  );
};

export default App;
