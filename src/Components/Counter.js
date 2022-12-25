import React, { Component } from 'react';

class Counter extends Component {

    state = {
        counter: 0
    }

    increase =()=>{
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrease =()=>{
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        return (
            <div>
                <h4>{this.state.counter}</h4>
                <h2>Counter Component</h2>
                <button onClick={this.increase}>+</button>
                <button onClick={this.decrease}>-</button>
            </div>
        );
    }
}

export default Counter;