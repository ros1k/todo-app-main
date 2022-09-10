import React, { useState } from "react";
import './App.css';

import { Routes, Route } from 'react-router-dom';
import UseStateVersion from './pages/UseStateVersion/UseStateVersion'
import ReduxVersion from './pages/ReduxVersion/ReduxVersion'
import ReactContextVersion from "./pages/ReactContextVersion/ReactContextVersion";



const App = () => {


  return (
    <div className="App" >
      <Routes>
        <Route path="/" element={<UseStateVersion />} />
        <Route path="reactContextVersion" element={<ReactContextVersion />} />
        <Route path="reduxVersion" element={<ReduxVersion />} />
        <Route path="*" element={<UseStateVersion />} />
      </Routes>
    </div >

  );
}

export default App;
