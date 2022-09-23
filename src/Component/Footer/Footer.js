import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <div className='footer-wrap' >
      <MDBFooter className='text-center' color='white'  >
        <MDBContainer className='p-4'>
          <div>
            <section className='' >
              <MDBRow>
                <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                  <ul className='list-unstyled mb-0'>
                    <h5 className='text-uppercase' >Owner Details</h5>

                    <li  >
                      <span clssName='text-white' >
                        Mr. Anshu Gangwar<br />
                        Contact no - 8006814145

                      </span>
                    </li>


                  </ul>
                </MDBCol>

                <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                  <h5 className='text-uppercase'>Contact</h5>

                  <ul className='list-unstyled mb-0'>

                    <li  >
                      <a class="PDvGL-q8cvFf"
                        href="tel:+91-8006814145"
                        data-tracking-element-type="3"
                        jslog="56037; track:impression,click"
                        itemprop="telephone" dir="ltr">
                        <button className='button'>Contact</button>
                      </a>

                    </li>
                    <li  >
                      <span className='text-white' >
                        9354248902
                      </span>
                    </li>

                  </ul>
                </MDBCol>

                <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                  <h5 className='text-uppercase'>Location</h5>

                  <ul className='list-unstyled mb-0'>

                    <li  >
                      <div >

                        <a class="PDvGL-q8cvFf"
                          href="https://www.google.com/maps/dir//28.8040812,79.2054744/@28.8040812,79.2032857,17z?hl=en"
                          target="_blank"
                          data-tracking-element-type="6"
                          jslog="56039; track:impression,click" style={{ textDecoration: "none", color: "#ffffff" }}><button className='button'>Get directions</button></a>

                      </div>

                    </li>
                    <li  >
                      <span className='text-white' >
                        Kemri Road, Kemri, Uttar Pradesh 244928
                      </span>
                    </li>

                  </ul>
                </MDBCol>

                <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                  <h5 className='text-uppercase'>Business Hours</h5>

                  <ul className='list-unstyled mb-0'>
                    <li  >
                      <span className='text-white' >
                        10 : 00 AM - 10 : 00 PM
                      </span>
                    </li>
                    <li  >
                      <span className='text-white' >
                        Monday to Sunday
                      </span>
                    </li>

                  </ul>
                </MDBCol>

              </MDBRow>
            </section>
          </div>
          <div className='section-style'>
            <section >Connect With Us </section>

          </div>

          <div >
            <span> <FontAwesomeIcon icon={faFacebook} className='fontawsome' /></span>
            <span> <FontAwesomeIcon icon={faInstagram}  className='fontawsome'/></span>


          </div>
        </MDBContainer>

        <div className='text-center-p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <p> © Powered by <span >Google</span></p>


        </div>
      </MDBFooter>
    </div>
  );
}



