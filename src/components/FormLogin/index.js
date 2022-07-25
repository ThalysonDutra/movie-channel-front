import React, { useState } from "react";

import { Row, Button, Form } from 'react-bootstrap';
import {isEmail} from 'validator';

import axios from '../../services/axios';
import { Formu } from "./styled";

export default function FormLogin() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        let formErrors = false;

        if(!isEmail(email)){
            formErrors = true;
            alert('E-mail inválido.');
        }

        try {
            const response = await axios.post('/user/login', {
                email,
                password,
            })
            localStorage.setItem("isAdmin", response.data.isAdmin);

            
            console.log(response.data);

            
            window.location.href = "/movies";
        } catch (e) {
           if(e.response.status == "422"){
            alert('E-mail ou senha incorretos.');
           }
        }

    }

    return (
        <>

            <Formu >
                <div>
                    <Row>
                        <h2>Login</h2>
                    </Row>
                    <Row>
                        <input type='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="E-mail"
                        />
                    </Row>

                    <Row>
                        <input type='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Senha"
                        />

                    </Row>

                    <Form.Group as={Row} className="cadastrese" controlId="formHorizontalEmail">
                        <Row>
                            
                        </Row>
                        <Form.Label column sm={6}>
                           <div className="text">Não tem cadastro?</div> 
                        </Form.Label>
                        
                        <Form.Label column sm={6}>
                            <div className="text2"><a href="/createuser">Cadastre-se</a></div>
                        </Form.Label>
                        
                    </Form.Group>

                    <Button onClick={handleSubmit} >
                        Entrar
                    </Button>


                </div>

            </Formu>
        </>



    );
}

