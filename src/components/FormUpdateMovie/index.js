import React, { Component, useState } from "react";
import { Row, Button } from 'react-bootstrap';

import axios from '../../services/axios';
import { FormUpdateMovieComponent } from "./styled";
import { loadMovieById } from '../../utils/loadMovieById';
import { utilloadCategories} from '../../utils/utilloadCategories';

class FormUpdateMovies extends Component {

    state = {
        movie: [],
        categories:[],
        id: '',
        name: '',
        year: '',
        duration: '',
        description: '',
        categoryId: '',
        link: '',
        countScore: '',
        score: '',
        idCategory: '',
        nameCategory: ''
    }

    async componentDidMount() {
        await this.loadMovie();
        await this.loadCategories();
    }

    loadMovie = async () => {
        const movieJson = await loadMovieById(this.props.id);
        this.setState({ movie: movieJson });
        this.setState({ name: movieJson['name'] });
        this.setState({ year: movieJson['year'] });
        this.setState({ duration: movieJson['duration'] });
        this.setState({ description: movieJson['description'] });
        this.setState({ categoryId: movieJson['categoryId'] });
        this.setState({ link: movieJson['link'] });

    }

    loadCategories = async () => {
        const categoryJson = await utilloadCategories(this.props.id);
        this.setState({ categories: categoryJson });
        this.setState({idCategory: categoryJson['id']});
        this.setState({ categoryName: categoryJson['name'] });
        
    }
    

    handleSubmit = async (e) => {
        e.preventDefault();
        let formErrors = false;

        if (formErrors) {
            return;
        }
        try {
            const { movie, name, year, duration, description, categoryId, link } = this.state;
            const response = await axios.put('/movie/' + movie.id, {
                name,
                year,
                duration,
                description,
                categoryId,
                link,

            })
            console.log(response.data);
            window.location.href = "/adminlistmovies";
        } catch (e) {

        }
    }


    handleDrop = async (e) => {
        e.preventDefault();
        let formErrors = false;

        if (formErrors) {
            return;
        }
        try {
            const {nameCategory, idCategory} = this.state;
            const [state, setState] = useState(idCategory); 

        } catch (e) {

        }
    }



    render() {

        const { name, year, duration, description, categoryId, link } = this.state;
        const { categories, id, categoryName, state } = this.state;
        
        
        return (
            <>
                <FormUpdateMovieComponent >
                    <div>
                        <Row>
                            <h2>Editar Filme</h2>
                        </Row>
                        <Row>
                            <input type='text'
                                value={name}
                                onChange={e => this.setState({ name: e.target.value })}
                                placeholder="Nome"
                            />
                        </Row>

                        <Row>
                            <input type='number'
                                value={year}
                                onChange={e => this.setState({ year: e.target.value })}
                                placeholder="Ano"
                            />
                        </Row>

                        <Row>
                            <input type='number'
                                value={duration}
                                onChange={e => this.setState({ duration: e.target.value })}
                                placeholder="Duração"
                            />
                        </Row>

                        <Row>
                            <textarea type='text'
                                value={description}
                                onChange={e => this.setState({ description: e.target.value })}
                                placeholder="Descrição"
                            />
                        </Row>


                        <Row>
                            <select name="state" value={state}>
                                <option>Selecione uma categoria</option>
                                {categories.map( category => (
                                    <option value = {category.id} 
                                    onChange={e => this.setState({ category: e.target.value })}>
                                    {category.name}
                                    </option>
                                    
                                ))}                         
                            </select>
                        

                        </Row>

                        <Row>
                            <input type='number'
                                value={link}
                                onChange={e => this.setState({ link: e.target.value })}
                                placeholder="Link"
                            />
                        </Row>


                        <Button onClick={this.handleSubmit}>
                            Salvar
                        </Button>
                    </div>
                </FormUpdateMovieComponent>
            </>
        );
    }
}
export { FormUpdateMovies }
