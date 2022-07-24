import React, { useState } from "react";

import { Row, Button, Col, Form } from 'react-bootstrap';

import axios from '../../services/axios';
import { FormCategoryComponent } from "./styled";

export default function FormCategory() {
    const [name, setName] = useState('');


    async function handleSubmit(e) {
        e.preventDefault();
        let formErrors = false;

        if (formErrors) {
            return;
        }
        try {
            const response = await axios.post('/categories', {
                name
            })
            console.log(response.data);
        } catch (e) {

        }

    }

    return (
        <FormCategoryComponent onSubmit={handleSubmit}>
            <div>
                <Row>
                    <h2>Cadastrar Categoria</h2>
                </Row>

                <Row>
                    <input type='text'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Categoria"
                    />
                </Row>

                <Button>
                    Cadastrar
                </Button>
            </div>
        </FormCategoryComponent>
    );
}

