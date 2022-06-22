import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oiyg6q07q701xxe7l89lhc/master',
    cache: new InMemoryCache()
})