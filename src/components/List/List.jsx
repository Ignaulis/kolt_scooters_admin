import { useModal } from '../contextProvider/contextProvider';

import './List.css';

export default function List() {

    const { newScooter, listModal, handleSortRida, handleSortDate, handleShowDelete, handleShowUpdate, newScooterCreated, newScooterUpdated } = useModal();


    return (
        <div className={listModal ? 'list-container hidden' : 'list-container'} >
            <div className="list-wrapper">
                <div className="list-header">
                    <div>
                        <span>Paspirtukai</span>
                    </div>
                    <div className='list-btns'>
                    <button className='button orange' onClick={handleSortDate}>Rušiuoti pagal datą</button>
                        <button className='button orange' onClick={handleSortRida}>Rušiuoti pagal rida (km.)</button>
                    </div>
                </div>
                <div className="list-nav">
                    <span>Registracijos kodas</span>
                    <span>Užimtas</span>
                    <span>Paskutini karta naudotas</span>
                    <span>Rida (km.)</span>
                </div>
                <div className="list-scooter">
                    <div className='list-map'>
                        {
                            newScooter && newScooter.length > 0 ?
                                (newScooter.map((item, index) => (
                                    <div className={`main-list-inside ${item.id === newScooterCreated ? 'visiblebg' : ''}${item.id === newScooterUpdated ? 'updatedbg' : ''}`} key={index}>
                                        <div className='main-list' >
                                            <span>{item.reg_kodas}</span>
                                            <span>{item.uzimtas ? 'Taip' : 'Ne'}</span>
                                            <span>{item.data}</span>
                                            <span>{item.rida}</span>

                                        </div>
                                        <div className='main-list-btns'>
                                            <button onClick={() => handleShowUpdate(item.id)} className='button blue'>
                                                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                                                    <path d="m19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm3,19c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v14Zm-3-13v3c0,1.103-.897,2-2,2h-3c-.553,0-1-.448-1-1s.447-1,1-1h1.984c-.934-1.235-2.399-2-3.984-2-2.116,0-4.011,1.339-4.715,3.333-.146.411-.531.667-.943.667-.11,0-.223-.019-.333-.058-.521-.184-.794-.755-.61-1.276.986-2.792,3.64-4.667,6.602-4.667,1.913,0,3.702.801,5,2.127v-1.127c0-.552.447-1,1-1s1,.448,1,1Zm-.398,8.333c-.986,2.792-3.64,4.667-6.602,4.667-1.913,0-3.702-.801-5-2.127v1.127c0,.552-.447,1-1,1s-1-.448-1-1v-3c0-1.103.897-2,2-2h3c.553,0,1,.448,1,1s-.447,1-1,1h-1.984c.934,1.235,2.399,2,3.984,2,2.116,0,4.011-1.339,4.715-3.333.185-.521.755-.794,1.276-.61.521.184.794.755.61,1.276Z" />
                                                </svg>
                                            </button>
                                            <button onClick={() => handleShowDelete(item.id)} className='button red'>
                                                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                                                    <path d="M17,10c-3.859,0-7,3.14-7,7s3.141,7,7,7,7-3.14,7-7-3.141-7-7-7Zm0,12c-2.757,0-5-2.243-5-5s2.243-5,5-5,5,2.243,5,5-2.243,5-5,5Zm2.707-6.293l-1.293,1.293,1.293,1.293c.391,.391,.391,1.023,0,1.414-.195,.195-.451,.293-.707,.293s-.512-.098-.707-.293l-1.293-1.293-1.293,1.293c-.195,.195-.451,.293-.707,.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l1.293-1.293-1.293-1.293c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l1.293,1.293,1.293-1.293c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414Zm-.707-13.707h-6.528c-.154,0-.31-.037-.447-.105L8.869,.316c-.415-.207-.878-.316-1.341-.316h-2.528C2.243,0,0,2.243,0,5v12c0,2.757,2.243,5,5,5h3c.552,0,1-.448,1-1s-.448-1-1-1h-3c-1.654,0-3-1.346-3-3V8H22v1c0,.552,.447,1,1,1s1-.448,1-1v-2c0-2.757-2.243-5-5-5ZM2,5c0-1.654,1.346-3,3-3h2.528c.154,0,.31,.037,.447,.105l3.156,1.578c.415,.207,.878,.316,1.341,.316h6.528c1.302,0,2.402,.839,2.816,2H2v-1Z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                ))) :
                                (<span className='loading'>Loading...</span>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );

}