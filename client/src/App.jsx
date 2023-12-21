import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/"></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
