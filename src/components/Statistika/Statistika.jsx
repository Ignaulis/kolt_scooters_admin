import { useModal } from '../contextProvider/contextProvider';
import './Statistika.css';

export default function Statistika() {

    const {statModal, handleStatModal, newScooter} = useModal();

    let rida = newScooter.reduce((sum, item) => sum + Number(item.rida), 0);
    
    

    return(
        <div className={`stat-container ${statModal ? 'visible' : 'hidden'}`}>
            <div className="stat-wrapper">
                <div className='stat-header'>
                    <span>Statistika</span>
                </div>
                <div className='stat-info'>
                    <div>Kiekis: <span>{newScooter.length}</span></div>
                    <div>Bendra Rida: <span>{rida} km.</span></div>
                </div>
                <div className="stat-close">
                    <button onClick={handleStatModal} className='button red'>Uždaryti</button>
                </div>
            </div>
        </div>
    );
}