import { UpdateCategoryComponent } from './styled';
import { FormUpadateCategoryComponent } from '../../../components/FormUpdateCategory'
import { Link, useParams } from 'react-router-dom';


function UpdateCategory() {
  const {id} = useParams();

  return (
    <UpdateCategoryComponent>
        <FormUpadateCategoryComponent id={id}/>
    </UpdateCategoryComponent>
    )
};

export default UpdateCategory;

