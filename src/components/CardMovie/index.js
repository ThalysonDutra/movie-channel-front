import { CardComponent } from "./styled";
import img from '../../assets/images/vingadores.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from '../../services/axios';
import React, { useRef, useState, Component } from "react";
import ReactStars from "react-rating-stars-component";
import 'bootstrap/dist/css/bootstrap.css';
import { loadMovies } from "../../utils/loadMovies";
import { utilloadCategories } from "../../utils/utilloadCategories";

class CardMovie extends Component {

    state = {
        value: 0,
        valueRef: 0,
        movies: [],
        categories: [],
        searchValue: ""
    };


    async componentDidMount() {
        await this.loadListMovies();
    }

    loadListMovies = async () => {
        const moviesJson = await loadMovies();
        const categoriesJson = await utilloadCategories();

        this.setState({ movies: moviesJson, categories: categoriesJson });
    }

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({ searchValue: value });
    }

    handleSubmit = async (id, score) => {
        const response = await axios.post('/movie/' + id + "/score", {
            score
        })

        window.location.reload(false);



    }


    render() {
        const { value } = this.state;
        const { movies, searchValue, categories } = this.state;
        var filteredMovies = !!searchValue ?
            movies.filter(movies => {
                return movies.name.toLowerCase().includes(searchValue.toLowerCase());
            }) : movies;

        return (

            <CardComponent>
                {filteredMovies.map(movie => (
                    <div className="movie">

                        <Row>
                            <Col sm={2}>
                                <div className="title">
                                    <img src={movie.link} />
                                </div>
                            </Col>
                            <Col sm={8}>
                                <h1>{movie.name}</h1>

                                <div className="genero">
                                    <p>
                                        {categories.find(element => element.id == movie.categoryId).name}</p>
                                </div>
                                <div className="description">

                                    <p className="texto">
                                        {movie.description}
                                    </p>
                                </div>
                                <Row>
                                    <Col>
                                        <p>
                                            Ano
                                        </p>
                                        <p>
                                            {movie.year}
                                        </p>
                                    </Col>

                                    <Col>
                                        <p>
                                            Duração
                                        </p>
                                        <p>
                                            {movie.duration} min
                                        </p>
                                    </Col>

                                    <Col>
                                        <p>
                                            Nota
                                        </p>
                                        <p>
                                            {parseFloat(movie.score).toFixed(1)}
                                        </p>
                                    </Col>

                                    <Col>
                                        <p>Avalie</p>

                                        <ReactStars
                                            count={5}
                                            value={movie.score}
                                            isHalf={true}
                                            size={24}
                                            onChange={(newValue) => this.handleSubmit(movie.id, newValue)}
                                            activeColor="#ffd700"
                                        />,

                                    </Col>


                                </Row>

                            </Col>
                        </Row>



                    </div>
                ))}

            </CardComponent>

        );
    }
}

export default CardMovie;
