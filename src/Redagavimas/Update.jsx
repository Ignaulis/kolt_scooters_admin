import { useModal } from '../components/contextProvider/contextProvider';
import './Update.css';

export default function Update() {

    const {newScooter, showUpdate, handleShowUpdate, updateId, dateValue, handleDateValue, ridaValue, handleRidaValue, setNewScooter, saveScooters, handleCheck, busy, setMsg, setNewScooterUpdated, setBusy} = useModal();

    const scooterToUpdate = newScooter.filter(item => item.id === updateId);
    const scooterRida = scooterToUpdate.map(item => item.rida);
    const scooterReg = scooterToUpdate.map(item => item.reg_kodas);


    

    const updatedScooter = () => {

        if(dateValue === '' || ridaValue === '') {
            setMsg({msg: 'Turite įvesti data, bei rida norint redaguoti.', color: 'rgb(156, 198, 249)'});
            setTimeout(() => {
                setMsg({msg: '', color: ''})
            }, 4000)
        }

        if(dateValue !== '' && ridaValue !== ''){


        setNewScooterUpdated(updateId)
        setTimeout(() => {

            setNewScooterUpdated(null)
        }, 4000)
        const data = dateValue.replace(/T/g, ' ')
        const updatedScooterData = {
            id: updateId,
            reg_kodas: String(scooterReg),
            uzimtas: busy,
            data: data,
            rida: Number(scooterRida) + Number(ridaValue)
        }
        const updatedScooter = newScooter.map(item => item.id === updateId ? updatedScooterData : item)
        setNewScooter(updatedScooter);
        handleShowUpdate();
        saveScooters(updatedScooter);
        setBusy(false);
        
    }
        

    }
    

    return (
        <div className={showUpdate ? 'update-container visible' : 'update-container'}>
            <div className="update-wrapper">
                <div className="update-head">
                    <span>Redaguokite informacija</span>
                </div>
                {
                    scooterToUpdate.map((item, index) => (
                <div className="update-mid" key={index}>
                    <div className='update-input-box box-reado'>
                        <label htmlFor="reg">Registracijos kodas</label>
                        <input type="text" id='reg' value={item.reg_kodas} readOnly/>
                    </div>
                    <div className='update-input-box box-reado'>
                        <label htmlFor="dates">Paskutini karta naudotas</label>
                        <input type="text" id='dates' value={item.data} readOnly/>
                    </div>
                    <div className='update-input-box'>
                        <label htmlFor="daten">Nauja data</label>
                        <input type="datetime-local" id='daten' value={dateValue} onChange={handleDateValue}/>
                    </div>
                    <div className='update-input-box box-reado'>
                        <label htmlFor="rida">Rida</label>
                        <input type="text" id='rida' value={item.rida + ' km.'} readOnly/>
                    </div>
                    <div className='update-input-box'>
                        <label htmlFor="ridan">Nuvažiuota šia diena</label>
                        <input type="number" id='ridan' value={ridaValue} onChange={handleRidaValue}/>
                    </div>
                    <div className='update-input-box box-busy'>
                        <label htmlFor="busy">Užimtas</label>
                        <input type="checkbox" id='busy' checked={busy} onChange={handleCheck}/>
                    </div>
                </div>
                ))}
                <div className="update-buttons">
                    <button className='button green' onClick={updatedScooter}>Saugoti</button>
                    <button className='button red' onClick={handleShowUpdate}>Atšaukti</button>
                </div>
            </div>
        </div>
    );
}