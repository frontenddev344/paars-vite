import React from 'react'
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="top-footer-wrapper">
          <div class="container">
            <div class="top-footer">
              <div class="row">
                <div class="col-lg-4 col-md-4  one">
                  <div class="footer-menu-wrapper footer-menu-left">
                    <ul class="footer-menu">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/services">Services</Link></li>
                      <li><Link to="/our-approach">Our Approach</Link></li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 two">
                  <div class="footer-logo footer-logo-center">
                    <a href="/">
                      <img src={logo} alt="logo" /></a>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 three">
                  <div class="footer-menu-wrapper footer-menu-right">
                    <ul class="footer-menu">
                      <li><Link to="/blogs">Blogs</Link></li>
                      <li><Link to="/contact-us">Contact us</Link></li>
                      <li><Link to="/about-us">About Us</Link></li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="center-footer">
          <div class="container">
            <div class="center-footer-inner">
              <h3>Together for Better Governance</h3>
              <p>PAARS is a specialized advisory firm that helps governments strengthen regulatory frameworks,
                enhance policymaking, and drive innovation and accountability. </p>
            </div>
          </div>
          <div class="footer-tags-row">
            <span class="footer-tag tag-1"><Link to="#">Regulation</Link></span>
            <span class="footer-tag tag-2"><Link to="#">Accountability</Link></span>
            <span class="footer-tag tag-3"><Link to="#">Analysis</Link></span>
            <span class="footer-tag tag-4"><Link to="#">Public Policy</Link></span>
            <span class="footer-tag tag-5"><Link to="#">Analysis</Link></span>
            <span class="footer-tag tag-6"><Link to="#">Accountability</Link></span>
            <span class="footer-tag tag-7"><Link to="#">Regulation</Link></span>
            <span class="footer-tag tag-8"><Link to="#">Strategy</Link></span>
            <span class="footer-tag tag-9"><Link to="#">Public Policy</Link></span>
            <span class="footer-tag tag-10"><Link to="#">Analysis</Link></span>
            <span class="footer-tag tag-11"><Link to="#">Accountability</Link></span>
          </div>
        </div>


        <div class="bottom-footer">
          <div class="container">
            <div class="bottom-footer-inner">
              <p>© 2025 PAARS</p>
            </div>
          </div>
        </div>



      </footer>





      
    </div>
  )
}

export default Footer