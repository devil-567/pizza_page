import React from 'react'
import "../Component/Checkout.css"
import {useNavigate} from"react-router-dom"
import Footer from './Footer/Footer'

export default function Thanku( {orderDetails}) {
    const negivate=useNavigate()
    const redirect=()=>{
        negivate('/menu')
    }
  return (
    <>
    <div className='order-confirm' style={{marginTop:"80px"}}>
        <h1>Hello {orderDetails?.customer?.firstname}  {orderDetails?.customer?.lastname}</h1>
        <h2>Thanku for your Order !</h2>
        <h3>
          your order no is : {orderDetails?.id}
        </h3>
        <h4>
            order total : {orderDetails?.order.subtotal?.formatted_with_symbol}
        </h4>
        <button onClick={redirect}>Continue Shopping</button>

    </div>
    <Footer fixed="bottom"/>
    </>
  )
}
