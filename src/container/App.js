import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      title : 'Hello World'
    }
  }
  update(e){
    console.log(e.target.name)
    this.setState({
      title : e.target.value
    });
  }
  render(){
    return (
      <div>
        <Hello hello={this.state.title}/>
        <Input name='Input firstName'/>
        <Input name='Input lastName'/>
      </div>
    )
  }
}


class Hello extends Component {
  render(){
    return <h1>{this.props.hello}</h1>
  }
}

class Input extends Component {
  render() {
    return (
      <div>
        <input type="text"  name={this.props.name}/>
      </div>
    )
  }
}











export default App;
