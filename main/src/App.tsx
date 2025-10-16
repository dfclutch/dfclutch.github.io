import { CircularImage } from './components/Image'
import { GlobalStyle } from './global.styles'
import { COLORS } from './utils/colors'


import profPic from "./assets/prof-pic-4.jpg"

import { useIsMobile } from './utils/useIsMobile'
import { AppContainer } from './app.styles'
import { Logo } from './components/Logo'
import { BigLink, Link } from './components/Link'
import styled from 'styled-components'
import { SectionHeader } from './components/SectionHeader'
import { Project } from './components/Project'

const SplitSection = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-top: 36px;
`

function App() {
  const isMobile = useIsMobile()

  return (
    <AppContainer isMobile={isMobile}>
      <Logo isMobile={isMobile} />
      <div>
        <p>
          {'Frontend software engineer at Salesforce, working on '}
          <Link href="http://www.spiff.com">
            Spiff
          </Link>
        </p>

        <p>
          Pennsylvania native, Ohio State CSE alumnus, javascript evangelist, ultralight backpacker, traditional bluegrass banjo/guitar/mandolin picker, espresso brewer, home cook, map enthusiast
        </p>
        <p>
          Living in Columbus, OH with my wife Carly and dog Maggie
        </p>
      </div>


      <SplitSection>
        <div><BigLink href="mailto:dwfiller@gmail.com">
          Email
        </BigLink>
          <br />
          <BigLink href="https://dfclutch.github.io/dan-filler-resume.pdf">
            Resume
          </BigLink>
          <br />
          <BigLink href="https://github.com/dfclutch">
            Github
          </BigLink>
          <br />
          <BigLink href="https://www.linkedin.com/in/dan-filler/">
            LinkedIn
          </BigLink>
          <br />
          <BigLink href="https://dfclutch.github.io/blog/#/">
            Blog
          </BigLink>
          <br />
          <BigLink href="https://dfclutch.github.io/apps/drawings">
            Drawings
          </BigLink>
          <br />
          <BigLink href="https://danfiller.bandcamp.com/">
            Music
          </BigLink>
          <br />
          <BigLink href="https://www.youtube.com/@danielfiller5569">
            Youtube
          </BigLink>
          <br />
          <BigLink href="https://www.instagram.com/d__schiller/">
            Instagram
          </BigLink>
        </div>
        <CircularImage src={profPic} isMobile={isMobile} />
      </SplitSection>

      <section>
        <SectionHeader>Projects</SectionHeader>
        <Project
          description="81-mile trail system in the Michaux State Forest"
          link="https://michaux-long-trail.surge.sh"
          title="Michaux Long Trail"
        />
        <Project
          description="A microlibrary with 0 dependencies for generating random data of all kinds. Published on npm."
          link="https://www.npmjs.com/package/rndom"
          title="rndom"
        />
        <Project
          description="D3js-based interactive graphical simulation based on the SIR epidemic model."
          link="http://dfclutch.github.io/apps/epsim"
          title="Covid SAIRD simulation"
        />
        <Project
          description="An interactive visualization of several random network generation models."
          link="http://dfclutch.github.io/apps/d3"
          title="Network Generation Models"
        />
        <Project
          description="Vanilla JS visualization of some graph algorithms, implements a novel geographic graph generation model."
          link="http://dfclutch.github.io/apps/graphs"
          title="Graph Algorithms"
        />
      </section>



      <GlobalStyle
        color={COLORS.blue}
        isInverted={false}
      />
    </AppContainer>
  )
}

export default App
