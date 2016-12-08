import React from 'react';

let {Component} = React;

class Counter extends Component{
  constructor(props){
    super(props);
    this.state = {
      number : +this.props.number || 0
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(){
    this.setState({
       number: this.state.number+1
    });
  }

  decrement(){
    this.setState({
      number: this.state.number-1
    });
  }

  render(){
    let {number} = this.state;
    return (
      <div>
        <h2>The number is {number} </h2>
        <div>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default Counter;
