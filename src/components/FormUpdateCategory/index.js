import React, { Component, useState } from "react";

import { Row, Button } from 'react-bootstrap';

import axios from '../../services/axios';
import { FormUpdate } from "./styled";
import { loadCategoryById } from "../../utils/loadCategoryByID";
import { useNavigate } from 'react-router-dom';


class FormUpadateCategoryComponent extends Component {



    state = {
        category: [],
        name: '',
        id: ''
    }

    async componentDidMount() {
        await this.loadCategory();

    }

    loadCategory = async () => {

        const categoryJson = await loadCategoryById(this.props.id);

        this.setState({ category: categoryJson });
        this.setState({ name: categoryJson['name'] })

    }


    handleSubmit = async (e) => {
        e.preventDefault();
        let formErrors = false;

        if (formErrors) {
            return;
        }
        try {
            const { category, name } = this.state;
            const response = await axios.put('/category/' + category.id, {
                name
            })
            console.log(response.data)
            window.location.href = "/listcategories";

        } catch (e) {

        }

    }



    render() {
        const { name } = this.state;

        return (
            <FormUpdate  >
                <div>
                    <Row>
                        <h2>Editar Categoria</h2>
                    </Row>

                    <Row>
                        <input type='text'
                            value={name}
                            onChange={e => this.setState({ name: e.target.value })}
                        />
                    </Row>

                    <Button onClick={this.handleSubmit}>
                        Salvar
                    </Button>
                </div>
            </FormUpdate>
        );
    }
}

export { FormUpadateCategoryComponent }
