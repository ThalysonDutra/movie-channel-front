import { CategoryComponent } from './styled';
import FormCategory from '../../../components/FormCategory';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-bootstrap';


function CreateCategory() {
  return (
    <CategoryComponent>
        <FormCategory/>
        <ToastContainer autoClose={3000}/>
    </CategoryComponent>
    )
};

export default CreateCategory;


