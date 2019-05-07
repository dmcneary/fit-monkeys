import React from "react";
import "./Footer.css";

const Footer = () => (

    <footer class="page-footer font-small special-color-dark pt-4">
        <div class="container">
            <div class="row">
                <div class="col-md-3 mb-md-0 mb-3">
                </div>
            </div>
            
            <div class="container text-center">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-linkedin"></i></a>
                <a href="#"><i class="fa fa-google"></i></a>
            </div>
            <br></br><br></br>
            <div class="footer-copyright text-center py-3">© 2019 Copyright:
          <p>UCLA Bootcamp Final Project</p>
            </div>
        </div>
    </footer>
);

export default Footer;