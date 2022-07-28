import TableMovies from '../../../components/AdminListMovies';
import { AdminListMovieComponent } from './styled';


function AdminListMoviePage() {
    return (
      <AdminListMovieComponent>
        <div className='menu'>
            <a href='/movies'> Início </a>
        </div>

        <div className='menu'>
            <a href='/controlpanel'>Voltar</a>  
        </div>
        
        <TableMovies />
      </AdminListMovieComponent>
      )
  };
  
  export default AdminListMoviePage;