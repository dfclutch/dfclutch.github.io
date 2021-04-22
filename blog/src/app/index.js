import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import Post from "./Routes/Post";
import Feed from "./Routes/Feed";
import { GlobalStyle, Content, Title } from "./styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Content>
        <Router>
          <Link to="/">
            <Title>Ye Olde Blogue</Title>
          </Link>
          <div>
            <Switch>
              <Route path="/posts/:id" component={Post} />
              <Route path="/" component={Feed} />
            </Switch>
          </div>
        </Router>
      </Content>
    </>
  );
}

export default App;
