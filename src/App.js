import './App.scss';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Page1 />}/>
            <Route path="about-us" element={<Page2/>}/>
            <Route path="our-services" element={<Page3/>}/>
            <Route path="contact-us" element={<Page4/>}/>
            <Route path="*" element={<Page1/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
