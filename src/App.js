import logo from './logo.svg';
import './App.css';
import Profile from './User';
import React, {useState} from 'react';
class App extends React.Component {
  constructor() {
    super();
    this.state={
      show : true
    }
  }
  render() {
    return (
      <div className="App">
        {
          this.state.show ? <Profile />: <h1>Child Component removed</h1>

        }
        <button onClick={()=>this.setState({show:!this.state.show})}>Toggle Child Component</button>
      </div>
    );
  }
}
export default App;
