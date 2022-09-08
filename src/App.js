import React, { useState } from "react";
import './App.css';

import { Routes, Route } from 'react-router-dom';
import UseStateVersion from './pages/UseStateVersion/UseStateVersion'
import ReduxVersion from './pages/ReduxVersion/ReduxVersion'
import ReactContextVersion from "./pages/ReactContextVersion/ReactContextVersion";

import Layout from "./Layout";


const App = () => {
  const [Theme, setTheme] = useState('dark');

  const ChangeTheme = () => {
    Theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  return (
    <div className={Theme === "dark" ? "App dark__theme" : "App light__theme"} >
      <Layout
        currentTheme={Theme}
        changeTheme={ChangeTheme}>
        <Routes>
          <Route path="/" element={<UseStateVersion />} />
          <Route path="reactContextVersion" element={<ReactContextVersion />} />
          <Route path="reduxVersion" element={<ReduxVersion />} />
        </Routes>
      </Layout>
    </div >

  );
}

export default App;
