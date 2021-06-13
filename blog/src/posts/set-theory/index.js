import React from "react";

import { Mono } from "../../post-components/Mono";

export default {
  title: "Set Theory",
  date: "",
  id: "set-theory",
  previewContent: `
    Some interesting Computer Science/mathematics about my favorite
    card game - Set.
  `,
  content: (
    <div>
      <p>
        There's this card game called <Mono>Set</Mono>. I first heard about it in a web apps project class I took during my 3rd year of undergrad. We had to build a version of the game using Ruby. When I was working on the game, I got pretty into playing the online version for a few weeks, it's pretty addictive. A year or so later I found a real version of the game in my parent's basement. This older box design is great:
        {/* image of box */}
      </p>
      <p>
        This year, my lovely girlfriend and I started playing occasionally. It's a good game to sit and play for a round or 3 as they only take about 10 minutes. Definitely a solid choice if you're going to bring one game on a trip.
      </p> 
      <p>
        The deck is comprised of 81-cards, each with a certain number of symbols.
      </p>
      {/** image of some cards */}
      <p> 
        The ruleset is simple: cards are layed down 12 at a time, players search the field for a <Mono>Set</Mono>, replace the 3 cards with new ones from the deck, whoever has the most <Mono>Sets</Mono> at the end of the deck wins.
      </p>
      <p>
        The more complicated piece is the definition of a <Mono>Set</Mono>. First, we must define the cards. A Card can be defined by 4 attributes:
      </p>
      <ul>
        <li>Number of symbols <Mono>[1, 2, 3]</Mono></li>
        <li>Color of the symbols <Mono>[Red, Green, Purple]</Mono></li>
        <li>Shape of the symbols <Mono>[Diamond, Oval, Squiggle]</Mono></li>
        <li>Fill of the symbols <Mono>[Empty, Shaded, Solid]</Mono></li>
      </ul>
      <p>
        So we could define this card as <Mono>[3, Green, Diamond, Shaded]</Mono>. Note that each attribute has 3 possible values. The deck contains one of each card, leading to <Mono>3 x 3 x 3 x 3 = 81</Mono> total cards.
      </p>
      <p>
        Finally a <Mono>Set</Mono> is <em>three cards where for each of the 4 attributes, all three cards have either the same value or all different values.</em> For example the following three cards are a <Mono>Set</Mono>:
      </p>
        <ul>
          <li><Mono>[3, Green, Diamond, Solid]</Mono></li>
          <li><Mono>[3, Red, Oval, Solid]</Mono></li>
          <li><Mono>[3, Purple, Squiggle, Solid]</Mono></li>
        </ul>
      <p>
        The <em>number</em> is all the same, the <em>color</em> is all different, the <em>shape</em> is all different, and the <em>fill</em> is all the same. Another way to think about it is that for any of the attributes you can't have 2 values the same and one different. 
      </p>
      <p>
        I would be impressed if anyone picked that up on the first read. The best way to figure it out is to <a href="https://smart-games.org/en/set/start">Play a few games and figure it out.</a>
      </p>
    </div>
  ),
};