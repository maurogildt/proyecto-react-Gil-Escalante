import { BrowserRouter, Routes, Route} from 'react-router-dom'

import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import './App.css'
import { CartProvider } from './context/CartContext.jsx'
import Cart from './components/Cart.jsx'
import Contact from './components/Contact.jsx'
import Checkout from './components/CheckOut.jsx'

function App() {

  return (
    <CartProvider>
      <BrowserRouter>

        <NavBar/>

        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/product/:id' element={<ItemDetailContainer/>}/>
          <Route path="/category/:category" element={<ItemListContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/checkout" element={<Checkout />}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
