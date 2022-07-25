import React, { Component, useState } from "react";
import { Row, Button } from 'react-bootstrap';

import axios from '../../services/axios';
import { loadUserById } from "../../utils/loadUserById";
import { FormUpdateUserComponent } from "./styled";

class FormUpdateUser extends Component {

    state = {
        user: [],
        id: '',
        name: '',
        email: '',
        password: '',
        isAdmin: ''
    }

    async componentDidMount() {
        await this.loadUser();
    }

    loadUser = async () => {
        const userJson = await loadUserById(this.props.id);
        this.setState({ user: userJson });
        this.setState({ name: userJson['name'] });
        this.setState({ email: userJson['email'] });
        this.setState({ password: userJson['password'] });
        this.setState({ isAdmin: userJson['isAdmin'] });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        let formErrors = false;

        if (formErrors) {
            return;
        }
        try {
            const { user, name, email, password, isAdmin } = this.state;
            const response = await axios.put('/user/' + user.id, {
                name,
                email,
                password,
                isAdmin
            })
            console.log(response.data);
            window.location.href = "/listusers";
        } catch (e) {

        }

    }

    render() {

        const { name, email, password, isAdmin } = this.state;

        return (
            <FormUpdateUserComponent >
                <div>
                    <Row>
                        <h2>Editar Usuário</h2>
                    </Row>
                    <Row>
                        <input type='text'
                            value={name}
                            onChange={e => this.setState({ name: e.target.value })}
                            placeholder="Nome"
                        />
                    </Row>

                    <Row>
                        <input type='email'
                            value={email}
                            onChange={e => this.setState({ email: e.target.value })}
                            placeholder="E-mail"
                        />
                    </Row>

                    <Row>
                        <input type='password'
                            value={password}
                            onChange={e => this.setState({ password: e.target.value })}
                            placeholder="Senha"
                        />

                    </Row>

                    <Row>
                        <input type='boolean'
                            value={isAdmin}
                            onChange={e => this.setState({ isAdmin: e.target.value })}
                            placeholder="Administrador?"
                        />

                    </Row>

                    <Button onClick={this.handleSubmit}>
                        Salvar
                    </Button>


                </div>

            </FormUpdateUserComponent>

        );
    }
}

export {FormUpdateUser}

