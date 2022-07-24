import React, { useState } from "react";

import { Row, Button, Alert } from 'react-bootstrap';
import axios from '../../services/axios';
import { FormCategoryComponent } from "./styled";
import { useNavigate} from 'react-router-dom';


export default function FormCategory() {
    
    const [name, setName] = useState('');
    const navigate = useNavigate();
    
    async function handleSubmit(e) {
   
        e.preventDefault();
        let formErrors = false;

        if (formErrors) {
            return; 
        }
         
        try {
            if(name != ""){
                const response = await axios.post('/category', {
                    name
                })
                console.log(response.data);  

                navigate('/listcategories');
            }else {
                return alert("Você não pode salvar um campo em branco.")
            }
          
            
        } catch (e) {
                return alert('Categoria já existe.');
            }
        }


    return (
        <FormCategoryComponent>
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

                <Button onClick={handleSubmit} >
                    Cadastrar
                </Button>
            </div>
        </FormCategoryComponent>
    );
}

