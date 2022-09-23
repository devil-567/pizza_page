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
      <div className='wraper-menu-' style={{ marginTop: "100px" }}>

        <div className='button-menu' >

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









        <div className="tittle-menu-item ">
          <h2>Veg Pizza's</h2>
        </div>
        <div className="menu_wrap1">

          {
            productList.map((item) => {
              return <div className="Product1" key={item.id}>
                <img src={item.image.url} alt='' />
                <p style={{ color: "#198754", padding: "10px" }}>{item.name}</p>
                <p style={{ color: "darkgray", marginTop: "-20px" }}>{item.description}</p>
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







