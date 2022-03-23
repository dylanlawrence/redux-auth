import React from 'react';

import RequireAuth from "./components/Auth/RequireAuth";
import Login from "./components/Auth/Login";

import {Routes, Route,} from "react-router-dom";
import Home from "./pages/Home";

import {Layout} from "./layouts/Layout";
import {Dashboard} from "./pages/Dashboard";
import {LayoutSideBar} from "./layouts/LayoutSideBar";
import User from "./pages/User";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout><Home/></Layout>}/>
            <Route path="login" element={<Layout><Login/></Layout>}/>
            <Route path="dashboard/*" element={<Dashboard/>}/>
            <Route path="user/*" element={<RequireAuth><LayoutSideBar><User/></LayoutSideBar></RequireAuth>}/>
        </Routes>
    );
}

export default App;
