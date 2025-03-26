import { useModal } from '../contextProvider/contextProvider';
import './Delete.css';

export default function Delete() {
    const {setShowDelete, showDelete, handleDelete} = useModal();

    return(
        <div className="delete-container" style={{display: showDelete ? 'flex' : 'none'}}>
            <div className="delete-wrapper">
                <div className="delete-head">
                    <span>Ar tikrai norite ištrinti ?</span>
                </div>
                <div className="delete-buttons">
                    <button className='button green' onClick={handleDelete}>Taip</button>
                    <button className='button red' onClick={() => setShowDelete(false)}>Ne</button>
                </div>
            </div>
        </div>
    );
}