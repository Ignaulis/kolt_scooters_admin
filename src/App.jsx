import './App.css'
import Create from './components/Create/Create'
import NavBar from './components/Nav/NavBar'
import Wrapper from './components/wrapper/Wrapper'
import { ModalProvider } from './components/contextProvider/contextProvider';
import Statistika from './components/Statistika/Statistika';
import List from './components/List/List';
import Delete from './components/delete/Delete';
import Update from './Redagavimas/Update';
import Message from './components/message/Message';


function App() {
  


  return (
    <ModalProvider>
      <Wrapper>
        <NavBar />
        <Create/>
        <Statistika />
        <List />
        <Delete />
        <Update />
        <Message />
      </Wrapper>
    </ModalProvider>
  )
}

export default App
