import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import Post from "./Post";
import Feed from "./Feed";
import { GlobalStyle, Content, Title } from "./styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <div>
          <Content>
            <Link to="/">
              <Title>Ye Olde Blogue</Title>
            </Link>

            <Switch>
              <Route path="/posts/:id" component={Post} />
              <Route path="/" component={Feed} />
            </Switch>
          </Content>
        </div>
      </Router>
    </>
  );
}

export default App;
