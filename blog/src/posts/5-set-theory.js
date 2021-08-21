import React from "react";

import Figure from "../post-components/Figure";
import { Mono } from "../post-components/Mono";
import SectionHeader from "../post-components/SectionHeader";

export default {
  title: "Set Theory",
  date: "15 June, 2021",
  id: "set-theory",
  previewContent:
    <>
      Some interesting Computer Science/mathematics about my favorite
      card game - <Mono>Set</Mono>.
    </>,
  content: (
    <div>
      <p>
        There's this card game called <Mono>Set</Mono>. I first heard about it in a web apps project class I took during my 3rd year of undergrad. We had to build a web version of the game using Ruby. When I was working on the game, I got into playing an existing online version for a few weeks, it's pretty addictive. A year or so later I found an IRL version of the game in my parent's basement. This older box design is great:
      </p>
      <Figure
        src='https://ye-olde-blog.s3.amazonaws.com/img/set/box.jpg'
        alt='the Set game box'
        breakpoints={[
          { w: 1000, v: '100%' },
          { w: Infinity, v: '75%' }
        ]}
      />
      <p>
        This year, my lovely girlfriend and I started playing occasionally. It's a good game to sit and play for a round or 3 as they only take about 10 minutes. Definitely a solid choice if you're going to bring one game on a trip.
      </p>

      <SectionHeader>The Game</SectionHeader>
      <p>
        The deck is comprised of 81-cards, each with a certain number of symbols in different colors, fill patterns, and shapes.
      </p>
      <Figure
        src='https://ye-olde-blog.s3.amazonaws.com/img/set/field.jpg'
        alt='Assorted Set Cards'
        breakpoints={[
          { w: 1000, v: '100%' },
          { w: Infinity, v: '75%' }
        ]}
      />
      <p>
        The ruleset is simple: cards are layed down 12 at a time, players search the field for a <Mono>Set</Mono>, if the players agree it is a <Mono>Set</Mono> the cards are removed and replaced 3 cards with new cards from the deck. Whoever has the most <Mono>Sets</Mono> at the end of the deck wins.
      </p>
      <p>
        The more complicated piece is the definition of a <Mono>Set</Mono>. First, we must define the cards. A Card can be defined by 4 properties:
      </p>
      <ul>
        <li>Number of symbols <Mono>[1, 2, 3]</Mono></li>
        <li>Color of the symbols <Mono>[Red, Green, Purple]</Mono></li>
        <li>Shape of the symbols <Mono>[Diamond, Oval, Squiggle]</Mono></li>
        <li>Fill of the symbols <Mono>[Empty, Shaded, Solid]</Mono></li>
      </ul>
      <p>
        So we could define a card as <Mono>[3, Green, Diamond, Shaded]</Mono>. Note that each property has 3 possible values. The deck contains one of each card, leading to <Mono>3 x 3 x 3 x 3 = 81</Mono> total cards.
      </p>
      <p>
        A <Mono>Card</Mono> has 4 <Mono>properties</Mono> each with 3 possible <Mono>values</Mono>.
      </p>
      <p>
        Finally, a <Mono>Set</Mono> is three cards. Between those three cards, for each of the 4 properties, all the cards have either the same value or 3 different values. For example the following three cards are a <Mono>Set</Mono>:
      </p>
      <ul>
        <li><Mono>[3, Purple, Squiggle, Solid]</Mono></li>
        <li><Mono>[3, Green, Diamond, Solid]</Mono></li>
        <li><Mono>[3, Red, Oval, Solid]</Mono></li>
      </ul>
      <Figure
        src='https://ye-olde-blog.s3.amazonaws.com/img/set/valid.jpg'
        alt='A valid Set of cards'
        breakpoints={[
          { w: 1000, v: '100%' },
          { w: Infinity, v: '75%' }
        ]}
      />
      <p>
        The <em>number</em>s on each card are all the same, the <em>color</em>s of each card are all different, the <em>shape</em>s are all different, and the <em>fill</em>s are all the same.
      </p>
      <p>
        Here are a few more examples. Try to work out why each is a <Mono>Set</Mono> in your head. I usually end up going through one property at a time:
      </p>
      <p>
        Valid Sets:
        <ul>
          <li><Mono>[1, Purple, Squiggle, Solid]</Mono></li>
          <li><Mono>[2, Green, Squiggle, Shaded]</Mono></li>
          <li><Mono>[3, Red, Squiggle, Empty]</Mono></li>
        </ul>
        <ul>
          <li><Mono>[2, Green, Squiggle, Solid]</Mono></li>
          <li><Mono>[3, Purple, Oval, Empty]</Mono></li>
          <li><Mono>[1, Red, Diamond, Shaded]</Mono></li>
        </ul>
        <ul>
          <li><Mono>[3, Purple, Squiggle, Solid]</Mono></li>
          <li><Mono>[3, Purple, Squiggle, Shaded]</Mono></li>
          <li><Mono>[3, Purple, Squiggle, Empty]</Mono></li>
        </ul>
      </p>
      <p>
        Invalid Sets:
        <ul>
          <li><Mono>[2, Purple, Squiggle, Solid]</Mono></li>
          <li><Mono>[2, Green, Oval, Shaded]</Mono></li>
          <li><Mono>[3, Red, Oval, Empty]</Mono></li>
        </ul>
        <ul>
          <li><Mono>[2, Green, Squiggle, Solid]</Mono></li>
          <li><Mono>[3, Purple, Oval, Empty]</Mono></li>
          <li><Mono>[1, Green, Diamond, Shaded]</Mono></li>
        </ul>
        <ul>
          <li><Mono>[3, Purple, Squiggle, Solid]</Mono></li>
          <li><Mono>[2, Purple, Diamond, Shaded]</Mono></li>
          <li><Mono>[1, Purple, Squiggle, Empty]</Mono></li>
        </ul>
      </p>
      <p>
        I would be impressed if anyone picked that up on the first read. I find it difficult to explain in text. The best way to get it is to <a href="https://smart-games.org/en/set/start">play a few games and figure it out.</a>
      </p>

      <SectionHeader>The Properties</SectionHeader>
      <p>
        So now that we are all <Mono>Set</Mono> masters, let's define some interesting types of <Mono>Sets</Mono>. The first special case is a <Mono>Maximal Set</Mono>: a <Mono>Set</Mono> where all four properites have 3 different values. In other words, the cards of the <Mono>Set</Mono> couldn't get any more different. This <Mono>Set</Mono> is maximal:
      </p>
      <Figure
        src='https://ye-olde-blog.s3.amazonaws.com/img/set/maximal.jpg'
        alt='A maximal Set of cards'
        breakpoints={[
          { w: 1000, v: '100%' },
          { w: Infinity, v: '75%' }
        ]}
      />
      <p>
        <Mono>Maximal Sets</Mono> are pretty tough to spot in games. They don't register very well as having any relating properites so in a fast-paced game I usually don't pick them out first. A suggested rule addition would be to assign extra points for both finding and successfully identifying a <Mono>Maximal Set</Mono>.
      </p>
      <p>
        The next logical step then is to define a <Mono>Minimal Set</Mono>. This should be the <Mono>Set</Mono> of 3 identical cards - where all properties are have the same values. Due to the structure of the deck, there's only one of each card. So, we say a <Mono>Minimal Set</Mono> is a <Mono>Set</Mono>  where all but one of the properites are identical. These lead to the most aesthetic and easily identifiable <Mono>Sets</Mono> in the game:
      </p>
      <Figure
        src='https://ye-olde-blog.s3.amazonaws.com/img/set/minimal.jpg'
        alt='A minimal Set of cards'
        breakpoints={[
          { w: 1000, v: '100%' },
          { w: Infinity, v: '75%' }
        ]}
      />
      <p>
        Another interesting property of the game is the <Mono>Unique Completion</Mono> property. This means that for any 2 cards from the deck, there is exactly 1 card that completes a <Mono>Set</Mono>. You can easily prove this to yourself by looking at two cards and trying to identify which cards could be added to them to produce a <Mono>Set</Mono>:
      </p>
      <ul>
        <li><Mono>[3, Green, Squiggle, Solid]</Mono></li>
        <li><Mono>[2, Green, Diamond, Empty]</Mono></li>
      </ul>
      <p>
        Since these cards have 3 and 2 symbols, the third must only have 1. Since they are both Green, the third must also be green. Similarly for the other properties, you find that the completing card must be: <Mono>[1, Green, Oval, Shaded]</Mono>.
      </p>

      <SectionHeader>Computation</SectionHeader>
      <p>
        Naturally, I started thinking about the <a href="https://en.wikipedia.org/wiki/Computability">computability</a> of validating a <Mono>Set</Mono>.
      </p>
      <p>
        Time for some real CS: let's analyze <Mono>Set</Mono> validation. I was thinking about what complexity class this problem would fit into. This means identifying which types of abstract computation machines can correctly validate a <Mono>Set</Mono>.
      </p>
      <p>
        Initially, I thought that validation of a set would require a Turing Machine. Intuitively this makes sense: validation of a <Mono>Set</Mono> requires that you remember at least 2 values at once. A Turing Machine to complete this task would check the value for a property of the first card, check the value of the next card, and depending on if those are the same or different, validate the final value. Repeat 3 times, once for each property. Traversing back and forth along a string is a Turing Machine thing, and I thought this was necessary.
      </p>
      <p>
        Here's a vague sketch of what a validation algorithm for a single propery looks like:
      </p>
      <Figure
        src='https://ye-olde-blog.s3.amazonaws.com/img/set/machine.jpg'
        alt='A sketch of a Turing Machine to validate a set'
        breakpoints={[
          { w: 1000, v: '75%' },
          { w: Infinity, v: '55%' }
        ]}
      />
      <p>
        As it turns out, you don't need a Turing Machine at all. Since there is a finite number of possible <Mono>Sets</Mono>, a Finite State Automata can vaildate a <Mono>Set</Mono>. This machine is pretty brute-force. Since they don't have built-in memory devices, the only way to remember something is by changing state. So, to record the value of a property, you must branch. The machine branches 12 times (one for each value), each time branching into 3, building a tree with about <Mono>3^12 = 531441</Mono> states. This number can be reduced in the last layer by collapsing all success states into one. This machine can easily modified to identify our different types of <Mono>Sets</Mono> (Maximal, Minimal), by just changing the acceptance states.
      </p>
      <p>
        So there you go, the set of <Mono>Sets</Mono> forms a Regular language, you've just got to build a pretty huge machine.
      </p>
    </div>
  ),
};