import React, { Component } from "react";

class TestClass extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: 0
        }

    
    }
    componentDidUpdate(){
        this.setState = {
            value: this.state.value+1
        };
    }
    render() {
        const {value} = this.state;
        return (
            <div>
                <h1> {value} </h1>
                <button onClick={() => {
                    this.setState({value: this.state.value + 1})
                
                }}> increment </button>
                {console.log(this.state)}
            </div>
            
            
        )
    }
}

export default TestClass