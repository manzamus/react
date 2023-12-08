import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './sass/main.scss';
import Welcame from './pages/welcame';
import './App.css';
import Welcome from './pages/welcame';

function App() {
return(
<Router>
  <Routes>
    <Route path='/' element={<Welcome />}></Route>
  </Routes>
</Router>
);
}

export default App;
