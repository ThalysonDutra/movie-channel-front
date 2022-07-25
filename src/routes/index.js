import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from '../../src/templates';
import CreateCategory from "../pages/Categories/CreateCategory";
import ControlPanel from "../pages/ControlPanel";
import CreateUser from "../pages/Users/CreateUser";
import CreateMovie from "../pages/Movies/CreateMovie";
import ListMovie from "../pages/Movies/ListMovie";
import ListCategoriesPage from "../pages/Categories/ListCategory";
import UpdateCategory from "../pages/Categories/UpdateCategory";
import ListUserPage from "../pages/Users/ListUser";
import UpdateUser from "../pages/Users/UpdateUser";




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
                <Route path = '/listcategories' element={<ListCategoriesPage/>}/>
                <Route path = '/updatecategories/:id' element={<UpdateCategory/>}/>
                <Route path = '/listusers' element={<ListUserPage/>}/>
                <Route path = '/updateuser/:id' element={<UpdateUser/>}/>
            </Routes>
        </BrowserRouter>

        
    );

}