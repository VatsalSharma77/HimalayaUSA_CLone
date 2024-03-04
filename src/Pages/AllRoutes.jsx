
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import About from './About'
import SingleProductPage from './SingleProductPage'
import Cart from './Cart'
import Error from './Error'
import Account from './Account'
import Register from './Register'
import PrivateRoute from '../Components/PrivateRoute'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        } />
        <Route path='/about' element={<About />} />
        <Route path='/products/:id' element={
          <PrivateRoute>
            <SingleProductPage />
          </PrivateRoute>
        } />
        <Route path='/account' element={<Account />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        } />
        <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default AllRoutes