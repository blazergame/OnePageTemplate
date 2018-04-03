import React, { Component } from 'react';

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
                <p>Hi from Container</p>
            </div>
        );
    }
}

export default InitialContainer;