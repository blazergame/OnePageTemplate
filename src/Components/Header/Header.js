import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header class="head">
            <div class="mask rgba-gradient d-flex justify-content-center align-items-center">
                <div class="container">
                    <div class="row">    
                        <div class="col-md-6 white-text text-center text-md-left mt-xl-5 mb-5 wow fadeInLeft" data-wow-delay="0.3s">
                            <h1 class="h1-responsive font-weight-bold mt-sm-5">Simplify Your Reports </h1>
                            <hr class="hr-light" />
                            <h6 class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt
                            dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
                            iste.</h6>
                            <a class="btn btn-white">Download</a>
                            <a class="btn btn-outline-white">Learn more</a>
                        </div>

                        <div class="col-md-6 col-xl-5 mt-xl-5 wow fadeInRight" data-wow-delay="0.3s">
                            <img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png" alt="" class="img-fluid" />
                        </div>

                    </div>
                </div>
            </div>
      </header>
    );
}

export default Header;