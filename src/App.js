import './App.scss'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import OurServices from './pages/OurServices'
import ContactUs from './pages/ContactUs'

function App() {
    return (
        <main className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about-us" element={<AboutUs />} />
                        <Route path="our-services" element={<OurServices />} />
                        <Route path="contact-us" element={<ContactUs />} />
                        <Route path="*" element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export default App
