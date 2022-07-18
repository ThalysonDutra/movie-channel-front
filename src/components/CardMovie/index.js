import { CardComponent } from "./styled";
import img from '../../assets/images/vingadores.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import React, { useRef, useState } from "react";
import ReactStars from "react-rating-stars-component";

import 'bootstrap/dist/css/bootstrap.css';

export default function CardMovie() {
    const [value, setValue] = useState(5);
    // Create ref 
    const valueRef = useRef();
    // Initialize ref
    valueRef.current = value;

    return (
        <CardComponent>
            <div className="movie">

                <Row>
                    <Col sm={2}>
                        <div className="title">
                            <img src={img} />
                        </div>
                    </Col>
                    <Col sm={8}>
                        <h1>Os Vingadores: O Ultimato</h1>

                        <div className="genero">
                            <p>
                                Ação</p>
                        </div>
                        <div className="description">

                            <p className="texto">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled
                                it to make a type specimen book. It has survived not only
                                five centuries, but also the leap into electronic
                                typesetting, remaining essentially unchanged. It was
                                popularised in the 1960s with the release of Letraset sheets
                                containing Lorem Ipsum passages, and more recently with
                                desktop publishinbv g software like Aldus PageMaker including
                                versions of Lorem Ipsum.
                            </p>
                        </div>
                        <Row>
                            <Col>
                                <p>
                                    Ano
                                </p>
                                <p>
                                    2019
                                </p>
                            </Col>

                            <Col>
                                <p>
                                    Duração
                                </p>
                                <p>
                                    129 min
                                </p>
                            </Col>

                            <Col>
                                <p>
                                    Nota
                                </p>
                                <p>
                                    {value}
                                </p>
                            </Col>

                            <Col>
                                <p>Avalie</p>

                                <ReactStars
                                    count={5}
                                    value={value}
                                    isHalf= {true}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                        // Get the latest state
                                        console.log(valueRef.current);
                                    }}
                                    size={24}
                                    activeColor="#ffd700"
                                />,

                            </Col>

                        </Row>

                    </Col>
                </Row>



            </div>

        </CardComponent>

    );

}
