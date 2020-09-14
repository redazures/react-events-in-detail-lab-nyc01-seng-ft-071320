// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

    clanker = (event)=>{
        this.props.onReceiveCoordinates([event.clientX,event.clientY])
    }
    render(){
        return <button onClick={this.clanker}>Coords</button>
    }
}

export default CoordinatesButton 