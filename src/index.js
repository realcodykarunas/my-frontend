import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import App from "./App";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const URI = "https://yr8gm1.sse.codesandbox.io/";

const client = new ApolloClient({
  uri: URI,
  cache: new InMemoryCache()
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
  rootElement
);

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   rootElement
// );
