import React from "react";
import './App.css';

import { Routes, Route } from 'react-router-dom';
import UseStateVersion from './pages/UseStateVersion'
import ReduxVersion from './pages/ReduxVersion'
import ReactContextVersion from "./pages/ReactContextVersion";
import Home from './pages/Home.jsx'
import Layout from "./Layout";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="useStateVersion" element={<UseStateVersion />} />
          <Route path="reactContextVersion" element={<ReactContextVersion />} />
          <Route path="reduxVersion" element={<ReduxVersion />} />
        </Routes>
      </Layout>
    </div >

  );
}

export default App;
