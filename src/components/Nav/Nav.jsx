import { useModal } from '../contextProvider/contextProvider';
import './Nav.css';

export default function Nav() {

    const {handleCreateModal, handleStatModal} = useModal();


    return(

        <div className='nav'>
            <div onClick={handleCreateModal}>Pridėti Paspirtuka</div>
            <div onClick={handleStatModal}>Statistika</div>
        </div>
    );
}