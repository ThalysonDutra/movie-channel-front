import { TableUsersCompontent } from "./styled";
import { Component } from "react";
import { loadUsers}  from "../../utils/loadUsers";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { InputGroup, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from '../../services/axios';



class TableUsers extends Component {

    state = {
        users: [],
        user: [],
    };


    async componentDidMount() {
        await this.loadUsers();
    }

    loadUsers = async () => {
        const usersJson = await loadUsers();
        this.setState({ users: usersJson });
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
            const { user, name } = this.state;
            const response = await axios.delete('/user/' + id, {
                name
            })
            console.log(response.data)
            window.location.href = "/listusers";

        } catch (e) {

        }

    }


    render() {
        const { users, searchValue } = this.state;
        const filteredUsers = !!searchValue ?
            users.filter(users => {
                return users.name.toLowerCase().includes(searchValue.toLowerCase());
            }) : users;

        return (

            <TableUsersCompontent>
                <div className="container">
                    <h1> Lista de Usuários </h1>                    
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
                                    <th scope="col">E-mail</th>
                                    <th scope="col">Senha</th>
                                    <th scope="col">isAdmin?</th>
                                    <th scope="col" className="icons">Editar</th>  
                                    <th scope="col" className="icons">Deletar</th>                                 
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.map(user => (
                                <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td className="isAdmin">{user.isAdmin ? "Sim" : "Não"}</td>
                                <td className="icons edit"> <Link to={"/updateuser/" + user.id}><FaRegEdit /></Link></td>
                                <td className="icons delete"> <button onClick={()=> this.handleSubmit(user.id)}><AiOutlineDelete /></button> </td>
                              </tr>
                            ))}
                                
                          </tbody>
                        </table>
                    </div>
                </div>

            </TableUsersCompontent>

        );

    }

}

export default TableUsers;