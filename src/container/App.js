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
    })
  }
  render(){
    return (
      <div>
      <Hello/>
        <input onChange={this.update.bind(this)} type="text" name="test"/>
        <input onChange={this.update.bind(this)} type="text" name="coucou"/>
      </div>
    )
  }
}


class Hello extends Component {
  render(){
    return <h1>Hello World change</h1>
  }
}











export default App;
