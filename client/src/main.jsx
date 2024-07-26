import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom';

import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './context/Auth';
import { CartProvider } from './context/Cart.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <BrowserRouter>
  <CartProvider>
  <React.StrictMode>
    <App />
    <Toaster/>
    </React.StrictMode>
    </CartProvider>
  </BrowserRouter>
  </AuthProvider>
)
