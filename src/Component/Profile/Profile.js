import React from 'react'
import "./Profile.css"
import { useNavigate } from "react-router-dom"

import Slider from '../Slider.js/Slider';
import Footer from '../Footer/Footer';
export default function Profile({ productList, addOrder }) {
    const negivate = useNavigate()
    const click = () => {
        negivate("/menu")
    }
    return (
        < ><div className='wraper' >
            <div className='resturant-name'>
                <h1 >Pizza Territory</h1>
                <p>Italian Restaurant in Shahabad<br />
                    Open today until 10:00 PM</p>
                <div className='button-order' >
                    <button onClick={click} >Order Now</button>

                </div>
            </div>
            <div className='slider-images'>
                <Slider />

            </div>
            <div className='bestdeals' >
                <h1 >
                    Best Deals
                </h1>
            </div>




            <div className="menu_wrap">

                {
                    productList?.map((item) => {
                        return <div className="Product" key={item.id} >
                            <img src={item.image.url} alt='' />
                            <p >{item.name}</p>
                            <span >{item.description}</span>
                            <p><strong>{item.price.formatted_with_symbol}</strong></p>
                            <button onClick={() => addOrder(item.id, 1)}>Order</button>

                        </div>

                    })
                }
            </div>

        </div>
            <Footer fixed="bottom"/>
        </>
    )
}
























