import React from 'react';
let {Component} = React;

class Counter extends Component{
  render(){
    return (
      <div>
        <h2>The number is {this.props.number} </h2>
        <div>
          <button onClick={this.props.increment}>Increment</button>
          <button onClick={this.props.decrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default Counter;
