import { HttpLink } from "apollo-link-http"
import ApolloClient from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import gql from 'graphql-tag'
import 'isomorphic-fetch'

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:4000/graphql" }),
  cache: new InMemoryCache()
})

client.query({
  query: gql`
query {
  books(limit: 1, offset: 0) {
    title
    author {
      username
      email
    }
  }
}
`
})
  .then(({ data }) => console.log(data))
  .catch(console.log)
