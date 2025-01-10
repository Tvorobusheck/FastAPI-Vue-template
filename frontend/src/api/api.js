import { ApolloClient, createHttpLink, InMemoryCache, gql } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:8000/graphql',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})

// Define the hello-world query
const HELLO_WORLD_QUERY = gql`
  query {
    helloWorld
  }
`

// Method to fetch hello-world data
async function fetchHelloWorld() {
  const response = await apolloClient.query({
    query: HELLO_WORLD_QUERY,
  })
  return response.data.helloWorld
}

// Method to fetch items
async function fetchItems() {
  const response = await apolloClient.query({
    query: gql`
      query {
        items {
          name
        }
      }
    `,
  })
  return response.data.items
}


// Method to add item
async function addItem(name, description) {
  const response = await apolloClient.mutate({
    mutation: gql`
      mutation {
        addItem(name: "${name}", description: "${description}") {
            name
            description
        }
      }
    `,
  })
  return response.data.addItem
}

let exports = {
  apolloClient: apolloClient,
  apolloProvider: apolloProvider,
  fetchHelloWorld: fetchHelloWorld,
  fetchItems: fetchItems,
  addItem: addItem
}

export default exports