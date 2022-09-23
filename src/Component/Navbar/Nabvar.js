import "./Nabvar.css"
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function BasicExample({ cart, category }) {
  console.log("cart", cart)

  const negivate = useNavigate()
  const click = () => {
    negivate("/")
  }
  return (
    <div className="nev-back" >
      <Navbar  expand="lg">
      <Container>
<Navbar.Brand onClick={click} className='logo-text' >Pizza Territory</Navbar.Brand>

       
        <div className='cart'>
          <div className="hoome">
             <Link to="/" style={{textDecoration:"none"}} className="hoome1" >Home</Link>
             <Link to="/menu"  style={{textDecoration:"none"}} className="hoome1" >Menu</Link>
              <Link to="/about"  style={{textDecoration:"none"}} className="hoome1">About</Link>
             

             <div className="header__optionBasket">
             <Link to="/myorder" style={{textDecoration:"none"}} className="hoome1" ><FontAwesomeIcon icon={faCartShopping} className='fontawsome' />
              <span>
                <i>{cart?.total_items}</i>
              
              </span>
             </Link>
                     
                </div>
          </div>
         
        </div>

      </Container>
    </Navbar>

    </div>
    
  );
}

export default BasicExample;