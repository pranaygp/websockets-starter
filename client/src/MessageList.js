import React, { PureComponent } from 'react';
import './MessageList.css'

class MessageList extends PureComponent {
  render() {
    return (
      <div className="MessageList">
        {this.props.messages.map(message => (
          <div className="MessageList-message">
            <i>{message.username}</i>
            <br />
            <span>{message.message}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default MessageList;