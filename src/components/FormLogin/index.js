import React, { useState } from "react";

import { Row, Button, Col, Form } from 'react-bootstrap';

import axios from '../../services/axios';
import { Formu } from "./styled";

export default function FormLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        let formErrors = false;

        if (formErrors) {
            return;
        }
        try {
            const response = await axios.post('/user', {
                email,
                password,
            })
            console.log(response.data);
        } catch (e) {

        }

    }

    return (
        <>

            <Formu onSubmit={handleSubmit}>
                <div>
                    <Row>
                        <h2>Login</h2>
                    </Row>
                    <Row>
                        <input type='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Digite seu e-mail"
                        />
                    </Row>

                    <Row>
                        <input type='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Digite uma senha"
                        />

                    </Row>

                    <Form.Group as={Row} className="cadastrese" controlId="formHorizontalEmail">
                        <Form.Label column sm={2}>
                            <p>Não tem cadastro?</p>
                        </Form.Label>
                        <Col sm={10}>
                        <Form.Label column sm={2}>
                            <p><a href="#teste">Cadastre-se</a>
                                </p>
                        </Form.Label>
                        </Col>
                    </Form.Group>

                    <Button>
                        Entrar
                    </Button>


                </div>

            </Formu>
        </>



    );
}

