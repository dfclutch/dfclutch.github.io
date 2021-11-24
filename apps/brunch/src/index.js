import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { mobileCheck } from "./mobileCheck";
import {
  Content,
  DrinkSubTitle,
  GlobalStyle,
  MenuSubTitle,
  Section,
  SubTitle,
  Title,
} from "./styles";

const isWindowInnerWidthSmall = () => window.innerWidth < 820;

const Site = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(isWindowInnerWidthSmall);
  window.onresize = () => setIsSmallScreen(isWindowInnerWidthSmall());

  return (
    <>
      <Title>Dan's Birthday Brunch</Title>
      <Content isMobile={isSmallScreen}>
        <Section>
          <SubTitle>Deets</SubTitle>
          <strong>Date/time:</strong> Sunday December 5, 2021. 10:30am EST.
          <br />
          <strong>Location:</strong> LeVeque Tower, Apt 3202, 50 West Broad
          Street, Columbus, OH. You will need to ask the security desk to send
          you up to floor 32.
          <br />
          <strong>Ahead of time</strong>: Please peruse the drink menu and text
          me with your order if you would like a hot drink (coffee, tea, or a
          steamer) so I can plan ahead. Please specify preferences for roast,
          milk type, and flavor mixins as listed below.
          <br />
          <strong>What to bring:</strong> Absolutely nothing!
          <br />
        </Section>
        <Section>
          <SubTitle>Menu</SubTitle>
          <div>
            <MenuSubTitle>Food</MenuSubTitle>
            Egg + bacon + croissant casserole
            <br />
            Cinnamon Palmiers
            <br />
            Lemon Bars
            <br />
            Fresh Fruit
          </div>
          <div>
            <MenuSubTitle>Drink</MenuSubTitle>
            <DrinkSubTitle>Coffee</DrinkSubTitle>
            <strong>Roast options</strong>: choice of a lighter or darker roast.
            Coffee from Brioso.
            <br />
            <strong>Milk options</strong>: Whole milk or Oat
            <br />
            <strong>Flavor options</strong>: Mocha, Gingerbread
            <br />
            <strong>Espresso Drinks</strong>: Espresso, Americano, Cortado, Flat
            White, Latte, Cappuccino
            <br />
            <strong>Brewed Coffee</strong>: standard drip coffee, pourover, or
            french press
            <DrinkSubTitle>Not Coffee</DrinkSubTitle>
            Chai tea or latte
            <br />
            Steamer (hot steamed milk with your choice of flavor option)
            <br />
            OJ
          </div>
        </Section>
      </Content>
      <GlobalStyle />
    </>
  );
};

ReactDOM.render(<Site />, document.getElementById("root"));
