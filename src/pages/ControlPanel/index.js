import { ControlPanelComponent } from './styled';
import ButtonPanelControl from '../../components/PanelControl';



function ControlPanel() {
  return (
    <ControlPanelComponent>

        <div className='menu'>
            <a href='/movies'>Voltar</a>  
        </div>
        <ButtonPanelControl/>
    </ControlPanelComponent>
  );
}

export default ControlPanel;