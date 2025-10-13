import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

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
        <BrowserRouter>
          <Link to="/">
            <Title>Ye Olde Blogue</Title>
          </Link>
          <h3>
            By <a href="http://dfclutch.com/">Dan Filler</a>
          </h3>
          <div>
            <ScrollToTop />
            <Routes>
              <Route path="/posts/:id" component={Post} />
              <Route path="/" component={Feed} />
            </Routes>
          </div>
        </BrowserRouter>
      </Content>
    </>
  );
}

export default App;
