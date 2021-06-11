import React from "react";
import { render } from "react-dom";
import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
} from "@apollo/client";
import MESSAGE_STATE_QUERY from "./gql/message-state.gql";
import MessageHistory from "./components/MessageHistory";
// CONSTANTS
import * as Styles from "./constants/Styles";

function App() {
  return (
    <div style={Styles.clientStyle}>
      <h1>graphql client demo</h1>
      <MessageHistory/>
    </div>
  );
}

const typeDefs = gql`
  type SimpleMessage {
    key: Int!
    from: String!
    text: String!
  }
`;

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  typeDefs,
});

// initial state
cache.writeQuery({
  query: MESSAGE_STATE_QUERY,
  data: {
    "messages": [
      {
        "key": 0,
        "from": "alice",
        "text": "hello?",
        "__typename": "SimpleMessage"
      },
      {
        "key": 1,
        "from": "bob",
        "text": "this is a test chat message!",
        "__typename": "SimpleMessage"
      }
    ]
  },
});

const DemoApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

render(<DemoApp />, document.getElementById("root"));
