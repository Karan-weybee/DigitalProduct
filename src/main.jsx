import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Content from './components/content/Content.jsx'
import Modal from './components/ProductDetail/Modal.jsx'
import LoginModal from './components/LoginModal.jsx'
import UserWishList from './components/UserWishList/UserWishList.jsx'
import AdminProduct from './components/AdminProducts/AdminProduct.jsx'
import AdminModal from './components/AdminProductDetails/AdminModal.jsx'
import AddProduct from './components/Product/AddProduct.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
     <Route path='' element={
      <>  
     <Content />
     <Modal />
     <LoginModal />

      </>
     } />
     <Route path='admin' element={
      <>
      <AdminProduct/>
      <AdminModal/>
      <AddProduct/> 
        </>
     } />

      <Route path='wishlist' element={
      <>
      <UserWishList/>
        </>
     } />
     
    </Route>
  ))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
