import Footer from './Footer/Footer'
import './Menu.css'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
export default function Menu({ productList, fetchProductByCategory, addOrder, category }) {
  console.log("jhon", productList)
  let { slug } = useParams()
  console.log(slug)
  useEffect(() => {
    if (slug) { fetchProductByCategory(slug) }
  }, [slug])
  return (

    <>
      <div className='wraper-menu-' >

        <div className='button-menu' style={{ color: "#198754" }} >

          {
            category?.map((category) => {
              return <span key={category.id}>
                <Link style={{ textDecoration: "none" }} to={`/category/${category.slug}`}>
                  <button >{category.name} </button>
                </Link>
              </span>
            })
          }
        </div>
        <div className="menu_wrap1">

          {
            productList.map((item) => {
              return <div className="Product1" key={item.id}>
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







