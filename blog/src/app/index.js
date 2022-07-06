import React, { useState } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import Post from "./Routes/Post";
import Feed from "./Routes/Feed";
import { GlobalStyle, Content, Title } from "./styles";
import { useBreakpoints } from "../utilities/responsive";
import { CONTENT_BREAKPOINTS } from "./breakpoints";
import ScrollToTop from "./ScrollToTop";

function App() {
  const width = useBreakpoints(CONTENT_BREAKPOINTS);

  return (
    <>
      <GlobalStyle />
      <Content width={width}>
        <Router>
          <Link to="/">
            <Title>Ye Olde Blogue</Title>
          </Link>
          <h3>
            By <a href="https://dfclutch.github.io/">Dan Filler</a>
          </h3>
          <div>
            <ScrollToTop />
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
