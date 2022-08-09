import React from "react";
import { BrowserRouter as BrowserRouter, Router, Route, Routes } from "react-router-dom";

import Chart from './content/Chart';
import Home from "./content/Home";
import Map from "./content/Map";
import UserList from "./content/UserList";

function Content (){
    return (

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/map" element={<Map />} />
            <Route path="/chart" element={<Chart />} />
            <Route path="/user" element={<UserList />} />

        </Routes>

    )
}


export default Content