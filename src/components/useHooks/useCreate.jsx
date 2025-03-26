import { useEffect, useState } from "react";
import { generateRegistrationCode, saveScooters, getScooters } from '../localStorage';
export default function useCreate() {

    const [createModal, setCreateModal] = useState(false);
    const [statModal, setStatModal] = useState(false);
    const [listModal, setListModal] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    const [dateValue, setDateValue] = useState('');
    const [ridaValue, setRidaValue] = useState(0);
    const [newScooter, setNewScooter] = useState([]);
    const [deleteId , setDeleteId] = useState([]);
    const [updateId, setUpdateId] = useState([]);
    const [idCount, setIdCount] = useState(() => {
        const saveIdCount = localStorage.getItem('ids');
        return saveIdCount ? parseInt(saveIdCount, 10) : 1;
    });
    const [sort, setSort] = useState(true);
    const [busy, setBusy] = useState(false);
    const [msg, setMsg] = useState({msg: '', color: ''});
    const [newScooterCreated, setNewScooterCreated] = useState(null);
    const [newScooterUpdated, setNewScooterUpdated] = useState(null);

    const handleCheck = () => {
        setBusy(prev => !prev)
    }


    const handleShowUpdate = (item) => {
        setShowUpdate(prev => !prev);
        setListModal(prev => !prev);
        setUpdateId(item);
        setRidaValue(0)
        setDateValue('')

        
    }

    const handleShowDelete = (id) => {
        setShowDelete(prev => !prev);
        setDeleteId(id);
        
    }

    const handleDelete = () => {
        setNewScooter(prev => {
            const deleted = prev.filter(sc => sc.id !== deleteId)
            saveScooters(deleted)
            if(deleted) {
                setMsg({msg: 'Jus ištrynėte paspirtuką!', color: 'lightgreen'})
                setTimeout(() => {
                    setMsg({msg: '', color: ''})
                }, 4000)
            }
            return deleted
        })
        setShowDelete(false)
    }

    const handleSortRida = () => {
        setSort(!sort);
        setNewScooter([...newScooter].sort((a, b) => { return sort ? b.rida - a.rida : a.rida - b.rida }))
    }

    const handleSortDate = () => {
        setSort(!sort);
        setNewScooter(prev => {
            const sorted = [...prev].sort((a, b) => {
                const dateA = new Date(a.data)
                const dateB = new Date(b.data)
                return sort ? dateB - dateA : dateA - dateB;
            })
            return sorted
        })

    }

    useEffect(() => {
        setNewScooter(getScooters)
    }, []);

    useEffect(() => {
        localStorage.setItem('ids', idCount)
    }, [idCount]);


    const handleNewScooter = () => {
        if (dateValue === '' || ridaValue === '') {
            setMsg({msg: 'Turite įvesti data ir rida!', color: '#F75D59'})
            setTimeout(() => {
                setMsg({msg: '', color: ''})
            }, 4000)
            return
        }
        setNewScooter(prev => {
            const data = dateValue.replace(/T/g, ' ');
            const newly = {
                id: idCount,
                reg_kodas: generateRegistrationCode(),
                uzimtas: busy,
                data: data,
                rida: ridaValue
            };
            const updatedScooter = [...prev, newly]
            
            saveScooters(updatedScooter);



            if(updatedScooter){
                setNewScooterCreated(newly.id)
                
                setTimeout(() => {
                    setNewScooterCreated(null)
                }, 4000)

            }
            return updatedScooter;

        });
        setIdCount(prev => prev + 1);
        setDateValue('');
        setRidaValue(0);
        handleCreateModal();

        

    }

    const handleDateValue = e => {
        const newDate = e.target.value;
        const newD = new Date(newDate)
        if(Date.now() > newD.getTime()) {
        setDateValue(newDate);
        }
    }

    const handleRidaValue = e => {
        let value = e.target.value
        if(/^[0-9]*$/.test(value) || value === '') {
            setRidaValue(value)
        }
        
    }

    const handleCreateModal = () => {
        setCreateModal(prev => {
            const newV = !prev;
            setStatModal(false);
            setListModal(newV);
            return newV;
        });

    }
    const handleStatModal = () => {
        setStatModal(prev => {
            const newV = !prev;
            setCreateModal(false);
            setListModal(newV);
            return newV;
        })

    }


    return { createModal, handleCreateModal, handleStatModal, statModal, dateValue, handleDateValue, ridaValue, handleRidaValue, handleNewScooter, newScooter, listModal, handleSortRida, handleSortDate, handleDelete, handleShowDelete, showDelete, setShowDelete, handleShowUpdate, showUpdate, updateId, setNewScooter, saveScooters, setRidaValue, handleCheck, busy, msg, setMsg, newScooterCreated, setNewScooterCreated,newScooterUpdated, setNewScooterUpdated, setBusy }
}