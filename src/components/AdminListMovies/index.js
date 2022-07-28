import { AdminListMovieCompontent } from "./styled";
import { Component } from "react";
import { loadMovies}  from "../../utils/loadMovies";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { InputGroup, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from '../../services/axios';



class TableMovies extends Component {

    state = {
        movies: [],
        movie: [],
    };


    async componentDidMount() {
        await this.loadMovies();
    }

    loadMovies = async () => {
        const moviesJson = await loadMovies();
        this.setState({ movies: moviesJson });
    }

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({searchValue: value});
    }

    handleSubmit = async (id) => {
      
        let formErrors = false;

        if (formErrors) {
            return;
        }
        try {
            const { name } = this.state;
            const response = await axios.delete('/movie/' + id, {
                name
            })
            console.log(response.data)
            window.location.href = "/adminlistmovies";

        } catch (e) {

        }

    }


    render() {
        const { movies, searchValue } = this.state;
        const filteredMovies = !!searchValue ?
            movies.filter(movies => {
                return movies.name.toLowerCase().includes(searchValue.toLowerCase());
            }) : movies;

        return (

            <AdminListMovieCompontent>
                <div className="container">
                    <h1> Lista de Filmes </h1>                    
                    <br/>

                    <InputGroup className="mb-3">
                        <Form.Control
                        placeholder="  Pesquise o usuário"
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
                                    <th scope="col" className="text-center">Ano</th>
                                    <th scope="col" className="text-center">Duração</th>                                    
                                    <th scope="col" className="text-center">Id da Categoria</th>                                    
                                    <th scope="col" className="text-center">N° Avaliações</th>
                                    <th scope="col" className="text-center">Nota</th>
                                    <th scope="col" className="icons">Editar</th>  
                                    <th scope="col" className="icons">Deletar</th>                                 
                                </tr>
                            </thead>
                            <tbody>
                                {filteredMovies.map(movie => (
                                <tr key={movie.id}>
                                <td>{movie.id}</td>
                                <td>{movie.name}</td>
                                <td className="text-center">{movie.year}</td>
                                <td className="text-center">{movie.duration}</td>                                
                                <td className="text-center">{movie.categoryId}</td>                                
                                <td className="text-center">{movie.countScore}</td>
                                <td className="text-center">{movie.score}</td>                                
                                <td className="icons edit"> <Link to={"/updatemovie/" + movie.id}><FaRegEdit /></Link></td>
                                <td className="icons delete"> <button onClick={()=> this.handleSubmit(movie.id)}><AiOutlineDelete /></button> </td>
                              </tr>
                            ))}
                                
                          </tbody>
                        </table>
                    </div>
                </div>

            </AdminListMovieCompontent>

        );

    }

}

export default TableMovies;