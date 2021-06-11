import React, { Component } from 'react';

// CONSTANTS
import * as Styles from '../../constants/Styles';

// A formatted instant message
export class InstantMessage extends Component { // user, key, message
  render() {
    return <li style={(this.props.message.from === this.props.user) ? Styles.senderStyle : Styles.recipientStyle}>
        <strong>{this.props.message.from}: </strong> {this.props.message.text}
    </li>;
  }
}
