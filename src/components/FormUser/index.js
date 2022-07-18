import React, { useState } from "react";
import { Row, Button } from 'react-bootstrap';

import axios from '../../services/axios';
import { FormUserComponent } from "./styled";

export default function FormUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordValidator, setPasswordValidator] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        let formErrors = false;

        if (formErrors) {
            return;
        }
        try {
            const response = await axios.post('/user', {
                name,
                email,
                password,
                passwordValidator
            })
            console.log(response.data);
        } catch (e) {

        }

    }

    return (
        <>

            <FormUserComponent onSubmit={handleSubmit}>
                <div>
                    <Row>
                        <h2>Criar Conta</h2>
                    </Row>
                    <Row>
                        <input type='text'
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Nome"
                        />
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

                    <Row>
                        <input type='password'
                            value={passwordValidator}
                            onChange={e => setPasswordValidator(e.target.value)}
                            placeholder="Confirme sua senha"
                        />

                    </Row>

                    <Button>
                        Cadastrar
                    </Button>


                </div>

            </FormUserComponent>
        </>



    );
}

