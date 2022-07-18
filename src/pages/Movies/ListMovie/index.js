import CardMovie from '../../../components/CardMovie';
import Header from '../../../components/Header';
import {ListMovieComponent}  from './styled';



function ListMovie() {
  return (
    <ListMovieComponent>
       <Header/>  
       <CardMovie/>
    </ListMovieComponent>    
    
  );
}

export default ListMovie;
