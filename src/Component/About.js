import React from 'react'
import image2 from './image/restursntimage.jpg'
import image from './image/hhh.jpg'
import './About.css'
import Footer from './Footer/Footer';
export default function About() {
  return (
    <>
      <div className='about-wraper'>


       

        <div className='about-page ' >
          <div className='about-page-1' >
            <h1>About of Pizza Territory</h1>
                  <div className='product-restro-image'>
                    <img src={image} alt="" />
                  </div>

               
                  <div className='about-titelname' >
                    <h2 >Pizza Territory</h2>
                    <p  >Welcome to Pizza Territory

                      Our new menus, conceived by Chef Rajendra, pizza territory and his culinary team, showcase ingredient led, contemporary cuisine that is firmly rooted in the classics; bold, bright flavours are presented in skillfully executed dishes that echo nostalgia with a modern and local twist.

                      Our award-winning wine list is deep and global, carefully selected to deliver value and quality – let us guide you to your favourites or help you discover new varietals.

                      Open for lunch and dinner, with cocktail bar and happy hour in between and our own private dining room overlooking the art gallery, pizza territory  delivers an array of experiences to suit your individual mood and preferences.</p>
                  </div>
                
          </div>



        </div>
        <div  >
          <div className='about-page-1' >
            
                  <div className='product-restro-image'>
                    <img src={image2} alt="" />
                  </div>

               
                  <div className='about-titelname' >
                    <h2 >Pizza Territory</h2>
                    <p>
                      <ul>
                        <li>Our restaurant is a new perspective on food.</li>
                        <li>We serve the food that surprised you.</li>
                        <li>We have cuisine with class.</li>
                        <li>A good place for all foodies.</li>
                        <li>Our restaurant serves you food as well as your dreams. </li>
                        <li>Our restaurant’s food will give you royalty flavors.</li>
                        <li>We have so many foods that you love.</li>
                        <li>We are a new craft of taste.</li>
                        <li>We are adding the joy of the best taste to your favorite food. </li>
                        <li>When you’re crazy about food – come to our restaurant</li>

                      </ul>
                    </p>
                  </div>
                
          </div>



        </div>

      </div>
     
      <Footer />

     
    </>
  )
}


