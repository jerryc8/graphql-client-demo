import gql from "graphql-tag";

const MESSAGE_STATE_QUERY = gql`
  query messages {
    messages @client {
      key
      from
      text
    }
  }
`;

export default MESSAGE_STATE_QUERY;
