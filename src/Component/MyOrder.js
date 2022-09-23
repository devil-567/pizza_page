import React from "react";
import "./MyOrder.css"
import { useNavigate } from "react-router-dom"
import { useHistory } from "react-router-use-history";
const ShoppingCart = ({ cart, removeFromCart }) => {
    const negivate = useNavigate()
    const history = useHistory()
    const menu = () => {
        negivate("/menu")
    }
    return (
        <>
            <div className="back-cover">
                <div className="checkout">
                    <div className="checkout2">
                        <span style={{ position: "fixed", right: "0", left: "0", marginLeft: "20px" }}> Your Orders..!</span>
                        <div className="header-right" onClick={menu}>
                            <div className="header-back" >
                                <span >Continue Order</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Product-contain-down" >
                    {
                        cart?.line_items?.map((items) => {
                            console.log("item", items)
                            return <div className="containet-down" key={items.id} >
                                <div className="checkout_product" style={{ width: "50%" }}>
                                    <img src={items.image.url} alt="" />

                                    <div className="checkoutProduct__info" >
                                        <p >{items.name}</p>
                                        <span>{items.price.formatted_with_symbol}  *  {items.quantity}</span><br />
                                        <button onClick={() => removeFromCart(items.id)} >Remove</button>
                                    </div>
                                </div>
                                <div className="main-containt" key={items.id} style={{ right: "0" }} >
                                    <p>Price</p>
                                    <span ><strong>₹{items.price.raw * items.quantity}</strong></span>
                                </div>
                            </div>

                        })
                    }

                </div>
                <div className="main-total-footer">



                    <div className="checkout__right">
                        <div className="subtotal">
                            <p ><span >Subtotal ({cart?.total_items}items):<strong>₹{cart?.subtotal?.formatted}</strong></span></p>

                        </div>
                        <button onClick={() => history.push("/checkout")}>Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ShoppingCart;