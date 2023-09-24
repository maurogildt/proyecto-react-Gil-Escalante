import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer'
import './App.css'

function App() {
  
  const greetingMessage = "¡Bienvenido a nuestro kiosco en línea!";

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={greetingMessage} />
    </>
  )
}

export default App
