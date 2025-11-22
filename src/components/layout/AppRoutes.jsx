import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/public/Home";
import Programs from "../../pages/public/Programs";
import Admissions from "../../pages/public/Admissions";
import Contact from "../../pages/public/Contact";
import About from "../../pages/public/About";


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
}

export default AppRoutes;
