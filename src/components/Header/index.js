import React from "react";
import { Row, Button } from 'react-bootstrap';
import { FaHome } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { FaFilm } from 'react-icons/fa';
import { Nav } from "./styled";
import img from '../../assets/images/logo.png';
import img1 from '../../assets/images/baner.png';


export default function Header() {
    return (
        <>
            <Nav>
              
                    <div className="title">
                        <img src={img} />
                    </div>

                    <div className="menu">
                        <div className="menu-item">
              
                                <FaHome size={24} className="menu-item2" />
                                <a href="/">  Home </a>

                                <FaFilm size={24} className="menu-item2" />
                                <a href="/createcategory">  Filmes</a>

                                <MdLogout size={24} className="menu-item2" />
                                <a href="https://www.google.com.br/">  Logout</a>
 

                        </div>
                    </div>
                
            </Nav>

            <div className="banner">
                <img src={img1} />
            </div>


        </>
    );

}
