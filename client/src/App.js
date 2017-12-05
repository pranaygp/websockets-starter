import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

import MessageList from './MessageList';
import SendMessage from './SendMessage';

class App extends Component {
  constructor() {
    super()
    //TODO: Setup WebSocket client
  }

  state = {
    messages: [{
      username: 'God',
      message: 'Welcome to the Chat room. Set a username, and start sending messages!'
    }]
  }

  sendMessage = ({username, message}) => {
    //TODO: Send message over websockets
  }

  receiveMessage = ({username, message}) => {
    this.setState({
      messages: [...this.state.messages, {username, message}]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to a Chat Room</h1>
        </header>
        <div className="App-body">
          <MessageList messages={this.state.messages} />
          <SendMessage onSend={this.sendMessage}/>
        </div>
      </div>
    );
  }
}

export default App;
