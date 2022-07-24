import React, { Component, useState } from "react";

import { Row, Button } from 'react-bootstrap';

import axios from '../../services/axios';
import { FormUpdate } from "./styled";

class FormUpadateCategoryComponent extends Component{
    
        async componentDidMount() {
        await this.loadCategoryById();
    }

    handleSubmit = (e) => {
        const { value } = e.target;
        this.setState({searchValue1: value});
    }

    loadCategory = async (props) => {
        const categoryJson = await loadCategoryById(props);
        this.setState({ category: categoryJson });
    }
    
    render() {

        return (
        <FormUpdate >
            <div>
                <Row>
                    <h2>Editar Categoria</h2>
                </Row>

                <Row>
                    <input type='text'
                        value={category.name}
                        onChange={e => setName(e.target.value)}
                    />
                </Row>

                <Button>
                    Salvar
                </Button>
            </div>
        </FormUpdate>
    );
    }
}

export { FormUpadateCategoryComponent }
