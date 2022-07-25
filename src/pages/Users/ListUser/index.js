
import TableUsers from '../../../components/ListUsers';
import { ListUserComponent } from './styled';


function ListUserPage() {
    return (
      <ListUserComponent>
        <div className='menu'>
            <a href='/movies'> Início </a>
        </div>

        <div className='menu'>
            <a href='/controlpanel'>Voltar</a>  
        </div>
        
        <TableUsers />
      </ListUserComponent>
      )
  };
  
  export default ListUserPage;