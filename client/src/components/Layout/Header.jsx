import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/Auth';
import toast from 'react-hot-toast';

const Header = () => {
  const [auth, setAuth] = useAuth()
  const [menuOpen, setMenuOpen] = useState(false);
    
  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  }

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: ''
    })
    localStorage.removeItem('auth')
    toast.success("Logout Successfully")
  }

  const activeStyle = "text-white font-bold";
  const inactiveStyle = "text-gray-600 hover:text-white font-bold";

  return (
    <header className='sticky top-0 shadow-md bg-gradient-to-r from-purple-600 to-pink-500 font-sans tracking-wide z-50'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between py-4'>
          <a href="/" className="flex items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-white">SHAPARZZ</span>
          </a>

          <div className="hidden md:flex space-x-4">
            <NavLink to='/' className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Home</NavLink>
            <NavLink to='/about' className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>About</NavLink>
            <NavLink to='/store' className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Store</NavLink>
            {!auth.user ? (
              <>
                <NavLink to='/login' className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Login</NavLink>
                <NavLink to='/register' className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Register</NavLink>
              </>
            ) : (
              <>
              {auth.user.role === 1 ? (
                <NavLink to='/dashboard/admin' className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Dashboard</NavLink>) :
                (<NavLink to='/dashboard/user' className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Dashboard</NavLink>)}
                <NavLink to='/cart' className={({ isActive }) => isActive ? activeStyle : inactiveStyle}>Cart</NavLink>
                <button onClick={handleLogout} className={inactiveStyle}>Logout</button>
              </>
            )}
          </div>

          <button onClick={handleToggle} className="md:hidden text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to='/' className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-pink-500 text-white' : 'text-gray-600 hover:bg-pink-100 hover:text-pink-500'}`}>Home</NavLink>
            <NavLink to='/about' className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-pink-500 text-white' : 'text-gray-600 hover:bg-pink-100 hover:text-pink-500'}`}>About</NavLink>
            <NavLink to='/store' className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-pink-500 text-white' : 'text-gray-600 hover:bg-pink-100 hover:text-pink-500'}`}>Store</NavLink>
            {!auth.user ? (
              <>
                <NavLink to='/login' className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-pink-500 text-white' : 'text-gray-600 hover:bg-pink-100 hover:text-pink-500'}`}>Login</NavLink>
                <NavLink to='/register' className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-pink-500 text-white' : 'text-gray-600 hover:bg-pink-100 hover:text-pink-500'}`}>Register</NavLink>
              </>
            ) : (
              <>
                <NavLink to='dashboard' className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-pink-500 text-white' : 'text-gray-600 hover:bg-pink-100 hover:text-pink-500'}`}>Dashboard</NavLink>
                <NavLink to='/cart' className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-pink-500 text-white' : 'text-gray-600 hover:bg-pink-100 hover:text-pink-500'}`}>Cart</NavLink>
                <button onClick={handleLogout} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-pink-100 hover:text-pink-500">Logout</button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header