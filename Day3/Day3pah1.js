import React from 'react';
class Day3pah1 extends React.Component{
    state={
        transformation:"Kaioken"
    }
    transform=()=>{
        this.setState((prevState)=>({
            transformation:prevState.transformation==="Kaioken"?"SuperSaiyen":"Kaioken"
        }))
    }
    render(){
        return(
            <div>
                <h1>Current Transformation: {this.state.transformation}</h1>
                <button onClick={this.transform}>Transformation</button>
            </div>
        )
    }
}
export default Day3pah1;