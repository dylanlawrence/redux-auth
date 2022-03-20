import React from 'react';
import './App.css';

import RequireAuth from "./components/Auth/RequireAuth";
import Login from "./components/Auth/Login";

import {ProtectedComponent} from "./components/Auth/ProtectedComponent";
import {Routes, Route,} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/protected"
                       element={<RequireAuth><ProtectedComponent/></RequireAuth>}
                />
                <Route path="/protected/role"
                       element={<RequireAuth requires={{role: "member"}}><ProtectedComponent/></RequireAuth>}
                />
                <Route path="/admin/config"
                       element={<RequireAuth requires={{role: "admin"}}><ProtectedComponent/></RequireAuth>}
                />
            </Routes>
        </>
    );
}

export default App;
