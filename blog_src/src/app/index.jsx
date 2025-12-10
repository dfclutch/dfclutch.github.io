import React, { useState } from 'react'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Post from './Routes/Post'
import Feed from './Routes/Feed'
import { GlobalStyle, Content, Title } from './styles'
import { useBreakpoints } from '../utilities/responsive'
import { CONTENT_BREAKPOINTS } from './breakpoints'
import ScrollToTop from './ScrollToTop'

const App = () => {
  const width = useBreakpoints(CONTENT_BREAKPOINTS)
  const [showWIP, setShowWIP] = useState(false)

  return (
    <>
      <GlobalStyle />
      <Content width={width}>
        <Router>
          <Link to="/">
            <Title>Ye Olde Blogue</Title>
          </Link>
          <h3>
            By <a href="http://dan-schiller.com/">Dan Schiller</a>
          </h3>
          <div>
            <ScrollToTop />
            <Routes>
              <Route path="/posts/:id" element={<Post />} />
              <Route
                path="/"
                element={<Feed showWIP={showWIP} setShowWIP={setShowWIP} />}
              />
            </Routes>
          </div>
        </Router>
      </Content>
    </>
  )
}

export default App 