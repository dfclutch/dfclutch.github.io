import React from "react";
import { About, Logo, Small } from "./styles";

function Home() {
  return (
    <>
      <Logo src="./img/logotype.png"/>
      <About>
        <p>
          Building React applications at <a href="http://www.xant.ai" target="_blank">Xant</a>
        </p>
        <p>
          Pennsylvania Native, Ohio State CSE Alumnus, JavaScript evangelist, Backpacker, Guitar-player, Coffee Maker, Map Drawer
        </p>
        <p>
          Living in Columbus, OH
        </p>
        <a href="mailto:dwfiller@gmail.com">dwfiller@gmail.com</a>
      </About>
    </>
  );
}

export default Home;
