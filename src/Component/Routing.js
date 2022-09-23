import { Routes, Route } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Menu from './Menu'
import About from './About'
import commerce from './lib/commerce'
import ShoppingCart from './MyOrder'
import BasicExample from './Navbar/Nabvar'
import Large from './Large'
import Profile from './Profile/Profile'
import Checkout from './Checkout'
import Thanku from './Thanku'
import "../App.css"




function Routing() {
  const [orderDetails, setOrderDetails] = useState({});
  const [productList, setproductList] = useState([])
  const [productListByCategory, setproductListByCategory] = useState([])

  const [category, setCategory] = useState([])

  const [cart, setCart] = useState([])

  const fetchProduct = async () => {
    const resp = await commerce.products.list()
    setproductList(resp.data)
    console.log("setproductList", resp)
  }
  const fetchProductByCategory = async (category) => {
    const resp = await commerce.products.list({
      category_slug: [category]
    })
    setproductListByCategory(resp.data)
    console.log("setproductList", resp)
  }
  const addOrder = async (prodId, qty) => {
    const resp = await commerce.cart.add(prodId, qty)
    setCart(resp)
    console.log("ank", resp)


  }
  const removeFromCart = async (prodId) => {
    const resp = await commerce.cart.remove(prodId)

    setCart(resp)
  }
  const fetchCategory = async () => {
    const resp = await commerce.categories.list();
    setCategory(resp.data)
    console.log("category", resp.data)
  }
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  useEffect(() => {
    fetchProduct()
    fetchCategory()
    fetchCart();
  }, [])

  const setOrder = (order) => {
    setOrderDetails(order)
  }
  return (
    <div>

      <BasicExample cart={cart} category={category} />
      {/* <div className='footer_____'>
      <Footer/>
      </div>
       */}



      <Routes>
        <Route path="/" element={<Profile productList={productList} addOrder={addOrder} />}></Route>




        <Route path="/Menu" element={<Menu productList={productList} addOrder={addOrder} category={category} />}></Route>
        <Route path="/about" element={<About productList={productList} />}></Route>
        <Route path="/category/:slug" element={<Large productList={productListByCategory} addOrder={addOrder} fetchProductByCategory={fetchProductByCategory} category={category} />}></Route>
        <Route path="/category/:slug" element={<Menu productList={productListByCategory} addOrder={addOrder} fetchProductByCategory={fetchProductByCategory} />}></Route>

        <Route path="/checkout" element={<Checkout cart={cart} setOrder={setOrder} />}></Route>
        <Route path="/thanku" element={<Thanku orderDetails={orderDetails} />}></Route>
        <Route path="*" element={<h1 className='error' style={{marginTop:"100px",alignItems:'center',color:"red",padding:"50px"}}>
          Error..404
          
        </h1>} />
        
        
        
        <Route path="/myorder" element={<ShoppingCart cart={cart} removeFromCart={removeFromCart} />}></Route>
      </Routes>


    </div>
  )
}

export default Routing




