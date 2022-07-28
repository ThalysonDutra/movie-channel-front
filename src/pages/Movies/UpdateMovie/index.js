import {UpdateMovieComponent}  from './styled';
import { useParams } from 'react-router-dom';
import { FormUpdateMovies } from '../../../components/FormUpdateMovie';


function UpdateMoviePage() {
  const {id} = useParams();
  return (

    <UpdateMovieComponent >
       <FormUpdateMovies id ={id}/>
    </UpdateMovieComponent>    
    
  );
}

export default UpdateMoviePage;
