import React from 'react';
import './App.css';

import RequireAuth from "./components/Auth/RequireAuth";
import Login from "./components/Auth/Login";

import {ProtectedComponent} from "./components/Auth/ProtectedComponent";
import {Routes, Route,} from "react-router-dom";
import Home from "./pages/Home";

import {Layout} from "./layouts/Layout";
import {Dashboard} from "./pages/Dashboard";
import {LayoutSideBar} from "./layouts/LayoutSideBar";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout><Home/></Layout>}/>
            <Route path="login" element={<Layout><Login/></Layout>}/>
            <Route path="dashboard/*" element={<RequireAuth><LayoutSideBar><Dashboard/></LayoutSideBar></RequireAuth>}/>
        </Routes>
    );
}

export default App;
