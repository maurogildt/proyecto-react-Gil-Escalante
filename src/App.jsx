import { BrowserRouter, Routes, Route} from 'react-router-dom';

import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/product/:id' element={<ItemDetailContainer/>}/>
        <Route path="/category/:category" element={<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
