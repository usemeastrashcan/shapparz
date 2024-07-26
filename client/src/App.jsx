import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Policy from './pages/Policy'
import PageNotFound from './pages/Page-Not-Found'
import About from './pages/About'
import {Registration} from './pages/Auth/Registration'
import Login from './pages/Auth/Login'
import Dashboard from './pages/User/Dashboard'
import PrivateRoute from './components/Layout/Routes/privateRoutes'
import AdminRoute from './components/Layout/Routes/AdminPrivateRoute'
import AdminDashboard from './pages/Admin/AdminDashboard'
import Users from './pages/Admin/Users'
import Products from './pages/Admin/Products'
import Profile from './pages/User/Profile'
import Orders from './pages/User/Orders'
import UpdateProduct from './pages/Admin/UpdateProduct'
import GetProducts from './pages/Admin/GetProducts'
import Store from './pages/Store'
import CartPage from './pages/CartPage'
import ReturnPolicy from './pages/ReturnPolicy'
import TermsOfService from './pages/TOS'
import ContactUs from './pages/ContactUs'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/return-policy' element={<ReturnPolicy/>} />
        <Route path='/terms-of-service' element={<TermsOfService/>} />
        <Route path='/contact-us' element={<ContactUs/>} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<PageNotFound/>} />
        <Route path='/privacy-policy' element={<Policy/>} />
        <Route path='/store' element={<Store/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/register' element={<Registration/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard' element={<PrivateRoute/>}>
          <Route path='user' element={<Dashboard/>} />
          <Route path='user/profile' element={<Profile/>} />
          <Route path='user/orders' element={<Orders/>} />
        </Route>
        <Route path='/dashboard' element={<AdminRoute/>}>
          <Route path='admin' element={<AdminDashboard/>}></Route>
          <Route path='admin/users' element={<Users/>}></Route>
          <Route path='admin/create-product' element={<Products/>}></Route>
          <Route path='admin/products/:slug' element={<UpdateProduct/>}></Route>
          <Route path='admin/products' element={<GetProducts/>}></Route>

        </Route>
      </Routes>
    </>
  )

  }

export default App
