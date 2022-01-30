import { PrismicLink } from "apollo-link-prismic";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";

export const client = new ApolloClient({
  link: PrismicLink({
    uri: "https://krishna.prismic.io/graphql",
    accessToken:
      "MC5ZZmNaTFJFQUFDQUE2VjFZ.IO-_vUvvv70h77-9XO-_vW7vv71V77-977-9AO-_vSTvv71t77-977-9XltHQ0tUTO-_ve-_vRTvv73vv70",
  }),
  cache: new InMemoryCache(),
});
