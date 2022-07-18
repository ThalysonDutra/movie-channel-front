import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../../src/templates';
import CreateCategory from "../pages/Categories/CreateCategory";
import ControlPanel from "../pages/ControlPanel";
import CreateUser from "../pages/Users/CreateUser";
import CreateMovie from "../pages/Movies/CreateMovie";
import ListMovie from "../pages/Movies/ListMovie";



export default function RoutesComponent(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path = '/home' element={<Home />}/>
                <Route path = '/createuser' element={<CreateUser />}/>
                <Route path = '/controlpanel' element={<ControlPanel />}/>
                <Route path = '/createcategory' element={<CreateCategory />}/>
                <Route path = '/createmovie' element={<CreateMovie/>}/>
                <Route path = '/movies' element={<ListMovie/>}/>
            </Routes>
        </BrowserRouter>
    );

}