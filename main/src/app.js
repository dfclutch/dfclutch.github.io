import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { GlobalStyle } from './globalStyle';
import Home from './Home';
import Links from './Links';
import Work from './Work';
import { AppContainer, ContentContainer } from './app.styles';
import { mobileCheck } from './mobile_check';
import { Nav } from './Nav';

function App() {
    const [ isMobile, setIsMobile] = useState(mobileCheck());
    const [ windowHeight, setHeight ] = useState(window.innerHeight);

    window.addEventListener(
        'resize',
        () => setIsMobile(mobileCheck())
    );
    
    window.onload = () => {
        /*
            delayed reset of height because some mobile browsers
            mess up the timing
        */ 
        setTimeout(() => {
            setHeight(window.innerHeight);
        }, 100);
    }

    return (
        <AppContainer
            isMobile={isMobile}
            windowHeight={windowHeight}
        > 
            <Router>
                <ContentContainer isMobile={isMobile}>
                    <Switch>
                        <Route
                            path="/work"
                            component={Work}
                        />
                        <Route
                            path="/links"
                            component={Links}
                        />
                        <Route
                            path="/"
                            component={Home}
                        />
                    </Switch>
                </ContentContainer>
                <Nav isMobile={isMobile}/>
            </Router>
            <GlobalStyle />
        </AppContainer>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));