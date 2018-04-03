import React from 'react';
import './cards.css';
var FontAwesome = require('react-fontawesome');

const Cards = () => {
    return(
        <div>
            <div class="card">
                <div class="view overlay">
                    <FontAwesome
                        className='super-crazy-colors'
                        name='users'
                        size='2x'
                            />
                </div>

                <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>


            <div class="card">
                <div class="view overlay">
                    <FontAwesome
                        className='super-crazy-colors'
                        name='laptop'
                        size='2x'
                        />
                </div>

                <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

            <div class="card">
                <div class="view overlay">
                    <FontAwesome
                        className='super-crazy-colors'
                        name='cogs'
                        size='2x'
                            />
                </div>

                <div class="card-body">
                    <h4 class="card-title">Card title</h4>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    );
}

export default Cards;