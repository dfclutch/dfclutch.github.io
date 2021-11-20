import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './styles';

const Site = () => {
  return (
    <>
      Static Site Template
      <GlobalStyle />
    </>
  );
}


ReactDOM.render(<Site />, document.getElementById("root"));