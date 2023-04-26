import { Component } from "react";

class ClassEvent extends Component{

    handleClick(){
        console.log('Button is Clicked')
    }
    render(){
        return (
            <div>
                This is a class based component
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}

export default ClassEvent;