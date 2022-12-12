import './App.scss';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import Layout from "./Layout";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="about-us" element={<SecondPage/>}/>
            <Route path="our-services" element={<ThirdPage/>}/>
            <Route path="*" element={<HomePage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
