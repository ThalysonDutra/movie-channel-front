import React, { useState } from "react";
import { Row, Button, Col, Form } from 'react-bootstrap';
import { MdCategory } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import { MdLocalMovies } from 'react-icons/md';


import axios from '../../services/axios';
import { PanelControlComponent } from "./styled";


export default function ButtonPanelControl() {
    return (
        <PanelControlComponent>
            <div className="menu-item">
                <Row className="nameButton">

                    <a href="/listcategories" className="nameButton">
                        <Button >
                            <MdCategory size={30} />
                            Categoria
                        </Button>
                    </a>

                    <a href="/listusers" className="nameButton">
                        <Button>
                            <FaUserAlt  size={30} />
                            Usuário
                        </Button>
                    </a>

                    <a href="" className="nameButton">
                        <Button>
                            <MdLocalMovies size={30} />
                            Filmes
                        </Button>
                    </a>
                </Row>
            </div>
        </PanelControlComponent>
    );
}