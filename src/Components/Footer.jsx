import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
    
    function Footer() {
      return (
        <>
       <Header/>
        <div className='d-flex justify-content-center flex-column bg-info text-light mt-5' style={{width:'100%',height:'300px'}}>
        
            <div className='footer-content d-flex justify-content-evenly w-100 flex-wrap' >
              <div style={{width:'400px'}} className='website'>
                <h4>
                <i style={{height:'25px'}} className="fa-solid fa-truck-fast me-2"></i> E Cart
                </h4>
                <h6>
                  Designed and built with all the love in the world by the IT team with help of our contributors
                </h6>
                <h6>
                  Code licensed IT,docs CC BY 4.0
                </h6>
                <p>Currently v3.0.0</p>
              </div>
              <div className='links d-flex flex-column'>
               <h4>Links</h4>
               <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
               <Link to={'/cart'} style={{ textDecoration: 'none', color: 'white' }}>Cart</Link>
               <Link to={'/wishlist'} style={{ textDecoration: 'none', color: 'white' }}>Wishlist</Link>

              </div>
              <div className='guides d-flex flex-column'>
                <h4>Guides</h4>
                <Link to={'https://getbootstrap.com/'} style={{ textDecoration: 'none', color: 'white' }}>React</Link>
                <Link to={'https://react-getbootstrap.github.io/'} style={{ textDecoration: 'none', color: 'white' }}>React Bootstrap</Link>
                <Link to={'https://react-getbootstrap.com/'} style={{ textDecoration: 'none', color: 'white' }}>Routing</Link>


              </div>

              <div className='contact d-flex flex-column flex-wrap'>
                <h4>Contact Us</h4>
                <div className='d-flex'>
                <input className=' form-control'  placeholder='Enter your Mail'  />
                <button className='btn btn-danger  ms-2'>Send</button>


                </div>

                <div className='icons mt-3 d-flex justify-content-between fs-5'>
                <Link to={'https://getbootstrap.com/'} style={{ textDecoration: 'none', color: 'white' }}> <i className="fa-brands fa-linkedin-in "></i></Link>
                <Link to={'https://react-getbootstrap.github.io/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-instagram "></i></Link>
                <Link to={'https://react-getbootstrap.github.io/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-github "></i></Link>
                <Link to={'https://react-getbootstrap.github.io/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-facebook "></i></Link>
                <Link to={'https://react-getbootstrap.github.io/'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-twitter "></i></Link>


 

                </div>

              </div>
          
        </div>
                <center><p>Copyright 2024 E Cart.Built with React</p></center>
        </div>
        </>
      )
    }
    
    export default Footer
