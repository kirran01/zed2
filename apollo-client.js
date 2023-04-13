import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
  } from "@apollo/client";
  
  const client = new ApolloClient({
    link: new HttpLink({
      uri: "https://zed-kirran-test.hasura.app/api/v1/graphql",
      headers: {
        "x-hasura-admin-secret":
          "zx3hIgVhT3hiXeGTd5N17yeq1Tz9P3gsr2sWrewie7bPlnADM80JCBg10QV6wmek",
      },
    }),
    cache: new InMemoryCache(),
  });
  
  export default client;
  