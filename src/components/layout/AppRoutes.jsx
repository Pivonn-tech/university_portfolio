import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/public/Home";
import Programs from "../../pages/public/Programs";
import Admissions from "../../pages/public/Admissions";
import Contact from "../../pages/public/Contact";
import About from "../../pages/public/About";
import Login from "../../pages/public/Login";
import Application from "../../pages/public/Application";
import StudentDashboard from "../../pages/student/Dashboard";
import FacultyDashboard from "../../pages/faculty/Dashboard";

function AppRoutes() {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/apply" element={<Application />} />

            {/* Protected Routes */}
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route path="/faculty/dashboard" element={<FacultyDashboard />} />
        </Routes>
    );
}

export default AppRoutes;
