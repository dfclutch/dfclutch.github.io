import React, { useState } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import Post from "./Routes/Post";
import Feed from "./Routes/Feed";
import { GlobalStyle, Content, Title } from "./styles";
import { addWindowSizeListener, getBreakpointValue } from "../utilities/responsive";
import { CONTENT_BREAKPOINTS } from "./breakpoints";

function App() {
  const [
    contentWidth,
    setContentWidth
  ] = useState(getBreakpointValue(CONTENT_BREAKPOINTS));
  addWindowSizeListener(CONTENT_BREAKPOINTS, setContentWidth);

  return (
    <>
      <GlobalStyle />
      <Content width={contentWidth}>
        <Router>
          <Link to="/">
            <Title>Ye Olde Blogue</Title>
          </Link>
          <h3>By <a href="https://dfclutch.github.io/">Dan Filler</a></h3>
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
