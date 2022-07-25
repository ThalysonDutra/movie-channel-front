import React from "react";
import { Row, Button } from 'react-bootstrap';
import { FaHome } from 'react-icons/fa';
import {AiOutlineDashboard } from 'react-icons/ai';
import { MdLogout } from 'react-icons/md';
import { FaFilm } from 'react-icons/fa';
import { Nav } from "./styled";
import img from '../../assets/images/logo.png';
import img1 from '../../assets/images/baner.png';


export default function Header() {
    const isAdmin = localStorage.getItem("isAdmin");
    return (
        <>
            <Nav>

                <div className="title">
                    <img src={img} />
                </div>

                <div className="menu">
                    <div className="menu-item">


                        <AiOutlineDashboard size={24}  className={isAdmin == "false" ? "menu-item2 hidden" : "menu-item2"}/>
                        <a href="/controlpanel" className={isAdmin == "false" ? "hidden" : undefined}>  Painel</a>



                        <FaHome size={24} className="menu-item2" />
                        <a href="/">  Home </a>

                        <FaFilm size={24} className="menu-item2" />
                        <a href="/createcategory">  Filmes</a>

                        <MdLogout size={24} className="menu-item2" />
                        <a href="/home">  Logout</a>


                    </div>
                </div>

            </Nav>

            <div className="banner">
                <img src={img1} />
            </div>


        </>
    );

}
