import TableCategories from '../../../components/ListCategories';
import { ListCategoriesComponent } from './styled';


function ListCategoriesPage() {
  return (
    <ListCategoriesComponent>
      <div className='menu'>
        <a href='/movies'> Início </a>
      </div>

      <div className='menu'>
        <a href='/controlpanel'>Voltar</a>
      </div>
      <TableCategories />
    </ListCategoriesComponent>
  )
};

export default ListCategoriesPage;


