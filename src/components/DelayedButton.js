// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {
    
    clanker=(event)=>{
        event.persist();
        window.setTimeout(()=>{
            this.props.onDelayedClick(event);
        }, this.props.delay);
    }

    render(){
        
        return<button onClick={this.clanker}>
            Delay
        </button>;
    }

}

export default DelayedButton;