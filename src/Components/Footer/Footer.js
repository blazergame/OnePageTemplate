import React from 'react';
import './footer.css';

const Footer = () => {

    return(
        <footer class="page-footer font-small indigo pt-0 set-footer">

            <div class="container">

                <div class="row">

                    <div class="col-md-12 py-5">

                        <div class="mb-5 flex-center">

                            <a class="fb-ic">
                                <i class="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a class="tw-ic">
                                <i class="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a class="gplus-ic">
                                <i class="fa fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a class="li-ic">
                                <i class="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a class="ins-ic">
                                <i class="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            <a class="pin-ic">
                                <i class="fa fa-pinterest fa-lg white-text fa-2x"> </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer-copyright py-3 text-center">
                © 2018 Copyright:
                <a href="#"> Benson.com </a>
            </div>

        </footer>
                      
    )
    
}

export default Footer;