/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */

import React from "react";
import Home from "./homepages/Home";
import Events from "./homepages/Events";
import Abouts from "./homepages/Abouts";
import Venues from "./homepages/Venues";
import Signup from "../src/components/Signup";
import Login from "../src/components/Login";
import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Events />} />
          <Route path="/about" element={<Abouts />} />
          <Route path="/venue" element={<Venues />} />
         <Route path="/login" element={<Login/>} />
         <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
