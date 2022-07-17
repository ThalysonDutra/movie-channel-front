import React, { useState } from "react";


import axios from '../../services/axios';
import { Form } from "./styled";

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

            <Form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>
                        E-mail
                        <input type='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Digite seu e-mail"
                        />
                    </label>

                    <label htmlFor='password'>
                        Senha
                        <input type='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Digite uma senha"
                        />
                    </label>

                    <button type="submit"> Entrar </button>
                </div>

            </Form>
        </>



    );
}

