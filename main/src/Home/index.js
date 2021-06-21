import React from "react";
import { About, Logo, Small } from "./styles";

function Home() {
  return (
    <>
      <Logo src="./img/logotype.png"/>
      <About>
        <p>
          Frontend software engineer at <a href="http://www.xant.ai" target="_blank">Xant</a>
        </p>
        <p>
          Pennsylvania Native, Ohio State CSE Alumnus, JavaScript evangelist, Backpacker, Guitar-player, Coffee Maker, Map Drawer
        </p>
        <p>
          Living in Columbus, OH
        </p>
        <a href="http://dfclutch.github.io/blog">Read my blog!</a>
        <br/>
        <a href="mailto:dwfiller@gmail.com">dwfiller@gmail.com</a>
      </About>
    </>
  );
}

export default Home;
