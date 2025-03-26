import { createContext, useContext } from "react";
import useCreate from "../useHooks/useCreate";

const ModalContext = createContext();

export const ModalProvider = ({children}) => {

    const {createModal, handleCreateModal, handleStatModal, statModal, dateValue, handleDateValue, ridaValue, handleRidaValue, handleNewScooter, newScooter, listModal, handleSortRida, handleSortDate, handleDelete, handleShowDelete, showDelete, setShowDelete, handleShowUpdate, showUpdate, updateId, setNewScooter, saveScooters, setRidaValue, handleCheck, busy, msg, setMsg, newScooterCreated, setNewScooterCreated, newScooterUpdated, setNewScooterUpdated, setBusy} = useCreate();

    return (
        <ModalContext.Provider value={{
            createModal,
            handleCreateModal,
            handleStatModal,
            statModal,
            dateValue, 
            handleDateValue, 
            ridaValue, 
            handleRidaValue, 
            handleNewScooter,
            newScooter,
            listModal,
            handleSortRida,
            handleSortDate,
            handleDelete, 
            handleShowDelete, 
            showDelete,
            setShowDelete, 
            handleShowUpdate, 
            showUpdate,
            updateId,
            setNewScooter,
            saveScooters,
            setRidaValue, 
            handleCheck, 
            busy,
            msg,
            setMsg, 
            newScooterCreated,
            setNewScooterCreated,
            newScooterUpdated, 
            setNewScooterUpdated,
            setBusy
        }}>
            {children}
        </ModalContext.Provider>
    );
    

}

export const useModal = () => {
    return useContext(ModalContext)
}