import logo from './logo.svg';
import './App.css';
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  
  componentDidMount(){
    fetch('/people')
      .then(res => res.json())
      .then(data => {
        this.setState({data})
      })
  }

  
  render() {
    console.log('state: ', this.state)
    return (
      <div className="App">
        <h1>hello world</h1>
      </div>
    );
  }
}

