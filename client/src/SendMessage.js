import React, { Component } from 'react';
import './SendMessage.css'

class SendMessage extends Component {
  state = {
    username: '',
    message: ''
  }

  updateState = key => e =>  {
    this.setState({[key]: e.target.value})
  }

  onSend = () => {
    this.props.onSend(this.state)
    this.setState({ message: '' })
  }

  render() {
    return (
      <div className="SendMessage">
        <label>Username: </label>
        <input onChange={this.updateState('username')} value={this.state.username}/>
        <br />
        <label>Message: </label>
        <input onChange={this.updateState('message')}  value={this.state.message}/>
        <br />
        <button onClick={this.onSend}>Send</button>
      </div>
    );
  }
}

export default SendMessage;