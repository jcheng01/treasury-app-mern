import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import CreateItem from "./pages/CreateItem";
import Transactions from "./components/Transactions";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <CreateItem />
        <Transactions />
        <Routes>
          <Route path="/"></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
