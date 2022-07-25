import {UpdateUserComponent}  from './styled';
import { useParams } from 'react-router-dom';
import { FormUpdateUser } from '../../../components/FormUpdateUser';


function UpdateUser() {
  const {id} = useParams();
  return (

    <UpdateUserComponent >
       <FormUpdateUser id={id}/>
    </UpdateUserComponent>    
    
  );
}

export default UpdateUser;
