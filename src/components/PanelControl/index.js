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
                <Row >
                    <Button >
                        <MdCategory className="nameButton" size={30} />
                        Categoria
                    </Button>


                    <Button>
                        <FaUserAlt className="nameButton" size={30} />
                        Usuário
                    </Button>

                    <Button>
                        <MdLocalMovies className="nameButton" size={30} />
                        Filmes
                    </Button>
                </Row>


            </div>
        </PanelControlComponent>


    );

}