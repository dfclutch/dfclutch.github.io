import React from "react";
import { About, Logo, Small } from "./styles";

function Home() {
  return (
    <>
      <Logo src="./img/logotype.png"/>
      <About>
        <p>
          Building usable interfaces in React for salespeople at <a href="http://www.xant.ai" target="_blank">Xant</a>
        </p>
        <p>
          Pennsylvania Native, Ohio State CSE Alumni, Backpacker, Guitar-player, Coffee Maker, Map Drawer
        </p>
        <p>
          Columbus, OH
        </p>
        <a href="mailto:dwfiller@gmail.com">dwfiller@gmail.com</a>
      </About>
    </>
  );
}

export default Home;
