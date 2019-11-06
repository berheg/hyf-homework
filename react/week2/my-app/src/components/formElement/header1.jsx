import React, { Component } from 'react';

class HeaderH1 extends Component{
    render(){
        const {title} = this.props;
        return(
            <h1>{title}</h1>
        )
    }
}

export default HeaderH1;