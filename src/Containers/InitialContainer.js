import React, { Component } from 'react';
import InitialComponent from '../Components/InitialComponent.js';

class InitialContainer extends Component {

    constructor(props){
        super(props);

        this.setState = {
            isEnabled:false
        }
    }

    render(){
        return(
            <div>
                <InitialComponent />
                <p>Hi from Container</p>
            </div>
        );
    }
}

export default InitialContainer;