import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { UserDataProvider } from "../contexts/UserDataContext";

import HomeScreen from "./Home";
import RegistrationScreen from "./Registration";
import CapitalBalanceScreen from "./CapitalBalance";
import CapitalEntryScreen from "./CapitalEntry";
import CapitalExitScreen from "./CapitalExit";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <UserDataProvider>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/registration" element={<RegistrationScreen />} />
            <Route path="/balance" element={<CapitalBalanceScreen />} />
            <Route path="/entry" element={<CapitalEntryScreen />} />
            <Route path="/exit" element={<CapitalExitScreen />} />
          </Routes>
        </UserDataProvider>
      </BrowserRouter>
    </>
  );
}
