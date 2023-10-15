import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer'
import './App.css'

function App() {
  
  const greetingMessage = "¡Bienvenido a nuestro kiosco en línea!";

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={greetingMessage} />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
