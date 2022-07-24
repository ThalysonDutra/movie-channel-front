import React from "react";
import { TableCategoriesCompontent } from "./styled";
import { Component } from "react";
import { utilloadCategories}  from "../../utils/utilloadCategories";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { InputGroup, Button, Form } from "react-bootstrap";
import { loadCategoryById} from "../../utils/loadCategoryByID";



class TableCategories extends Component {

    state = {
        categories: [],
        searchValue: ''
    };


    async componentDidMount() {
        await this.loadCategories1();
    }

    loadCategories1 = async () => {
        const categoriesJson = await utilloadCategories();
        this.setState({ categories: categoriesJson });
    }

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({searchValue: value});
    }

    handleChangeById = (e) => {
        const { value } = e.target;
        this.setState({searchValue1: value});
    }

    render() {
        const { categories, searchValue } = this.state;
        const filteredCategories = !!searchValue ?
            categories.filter(categories => {
                return categories.name.toLowerCase().includes(searchValue.toLowerCase());
            }) : categories;

        return (

            <TableCategoriesCompontent>
                <div className="container">
                    <h1> Lista de Categorias </h1>                    
                    <br/>

                    <InputGroup className="mb-3">
                        <Form.Control
                        placeholder="  Pesquise aqui sua categoria"
                        onChange={this.handleChange}
                        value={searchValue}
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        />
                    </InputGroup>
                    

                    <div>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col" className="icons">Editar</th>  
                                    <th scope="col" className="icons">Deletar</th>                                 
                                </tr>
                            </thead>
                            <tbody>
                                {filteredCategories.map(category => (
                                <tr>
                                <td>{category.id}</td>
                                <td>{category.name}</td>
                                <td className="icons edit"> <a href="" ><FaRegEdit /></a></td>
                                <td className="icons delete"> <a href="" ><AiOutlineDelete /></a> </td>
                              </tr>
                            ))}
                                
                          </tbody>
                        </table>
                    </div>
                </div>

            </TableCategoriesCompontent>

        );

    }

}

export default TableCategories;