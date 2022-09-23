
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <div className='slider__' style={{position:"inherit"}}>

    
    <Carousel>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg"
          alt="First slide"
          style={{width:"100%",height:"400px" ,borderRadius:"10px"}}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg"
          alt="Second slide"
          style={{width:"100%",height:"400px" ,borderRadius:"10px"}}

        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg"
          alt="Third slide"
          style={{width:"100%",height:"400px" ,borderRadius:"10px"}}

        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Slider;