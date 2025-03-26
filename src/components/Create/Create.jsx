import './Create.css';
import {useModal} from '../contextProvider/contextProvider'
export default function Create() {

    const {createModal, handleCreateModal, dateValue, handleDateValue, handleRidaValue, ridaValue, handleNewScooter} = useModal();


    return(
        <div className={`create-container ${createModal ? 'visible' : 'hidden'}`}>
        <div className='create-wrapper'>
            <div className='create-header'>
                <span>Pridėkite Paspirtuka</span>
            </div>
            <div className='create-input'>
                <div>
                    <label htmlFor="data">Paskutinis naudojimas</label>
                    <input type="datetime-local" id='data' value={dateValue} onChange={handleDateValue}/>
                </div>
                <div>
                    <label htmlFor="km">Rida (km.)</label>
                    <input type="number" id='km' value={ridaValue} onChange={handleRidaValue}/>
                </div>
            </div>
            <div className='create-btns'>
                <button className='button green' onClick={handleNewScooter}>Pridėti</button>
                <button className='button red' onClick={handleCreateModal}>Atšaukti</button>
            </div>
        </div>
        </div>
    );
}