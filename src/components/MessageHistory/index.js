import React, { Component } from 'react';
import { useQuery } from "@apollo/client";

// CONSTANTS
import * as Styles from '../../constants/Styles';
import MESSAGE_STATE_QUERY from "../../gql/message-state.gql";

// COMPONENTS
import { InstantMessage } from './InstantMessage.js';

// The message history list
class MessageHistory extends Component {
  getMessages = (data, loading) => {
    return loading ? [] : data.messages;
  };

  render() {
    const messages = this.getMessages(this.props.data, this.props.loading);
    const user = "alice";
    return <div style={Styles.historyContainerStyle}>
            <ul style={Styles.historyStyle}>
              {messages.map((message, index) =>
                <InstantMessage user={user}
                                message={message}
                                key={index}/>)}
            </ul>
          </div>;
  }
}

export default () => {
  const { loading, data } = useQuery(MESSAGE_STATE_QUERY);
  return (
      <MessageHistory data={data} loading={loading}/>
  )
}
