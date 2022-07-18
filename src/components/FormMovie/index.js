import React, { useState } from "react";
import { Row, Button } from 'react-bootstrap';

import axios from '../../services/axios';
import { FormMovieComponent } from "./styled";

export default function FormMovie() {
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [duration, setDuration] = useState('');
    const [description, setDescription] = useState('');
    const [idCategory, setIdCategory] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        let formErrors = false;

        if (formErrors) {
            return;
        }
        try {
            const response = await axios.post('/movie', {
                name,
                year,
                duration,
                description,
                idCategory

            })
            console.log(response.data);
        } catch (e) {

        }

    }

    return (
        <>
            <FormMovieComponent onSubmit={handleSubmit}>
                <div>
                    <Row>
                        <h2>Criar Filme</h2>
                    </Row>
                    <Row>
                        <input type='text'
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Nome"
                        />
                    </Row>

                    <Row>
                        <input type='number'
                            value={year}
                            onChange={e => setYear(e.target.value)}
                            placeholder="Ano"
                        />
                    </Row>

                    <Row>
                        <input type='number'
                            value={duration}
                            onChange={e => setDuration(e.target.value)}
                            placeholder="Duração"
                        />
                    </Row>

                    <Row>
                        <input type='text'
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            placeholder="Descrição"
                        />
                    </Row>

                    
                    <Row>
                        <input type='number'
                            value={idCategory}
                            onChange={e => setIdCategory(e.target.value)}
                            placeholder="Categoria"
                        />
                    </Row>

                    <Button>
                        Cadastrar
                    </Button>
                </div>
            </FormMovieComponent>
        </>
    );
}

