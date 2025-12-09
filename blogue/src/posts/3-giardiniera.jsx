import React from "react";

import Figure from "../post-components/Figure";

export default {
  title: "You should make Giardiniera",
  date: "18 April, 2021",
  id: "giardiniera",
  previewContent: "The Italian answer to Sauerkraut",
  content: (
    <div>
      <p>
        To start, in an American accent it's pronounced <em>Jar-din-air-uh</em>.
      </p>
      <p>
        I first heard about Giardiniera somewhere in 2018-2019 while binging Bon
        Apetit videos. Brad Leone, king of all things fermented and pickled,
        made a{" "}
        <a href="https://www.youtube.com/watch?v=QPvLA-egmWA">
          video on this italian pickled/fermented vegetable medley.
        </a>{" "}
        I didn't think much of it, I'm not a pickle person and the veggie blend
        threw me off.
      </p>
      <p>
        I tried it for the first time at{" "}
        <a href="https://warios-beef-and-pork.business.site/">
          Wario's Beef and Pork
        </a>{" "}
        on their cold cut and was blown away. It's tangy, funky, and complex. I
        prefer Wario's version with small (1/8") dice veggies, to the more
        common coarser chop. I've done other fermentation projects (kombucha
        mainly), and a friend had sent me a purpose-built fermentation vessel,
        so I gave it a try.
      </p>
      <p>My Giardiniera included</p>
      <ul>
        <li>Cauliflower</li>
        <li>Carrots</li>
        <li>Red Bell Pepper</li>
        <li>Onion</li>
        <li>Celery</li>
        <li>Green beans</li>
        <li>Jalapeno</li>
        <li>Garlic</li>
        <li>
          Oregano, red pepper flake, celery salt, peppercorns, coriander, fresh
          bayleaf
        </li>
      </ul>
      <p>
        I probably should have weighed these as they were going in, but it's
        really not important. Eyeball it and add more of what you like. The bay
        leaf was at the recommendation of Brad Leone, he claims that the tannins
        in the leaf keep the vegetables crunchy.
      </p>
      <p>
        The vegetables are covered in a 3% (by weight) saltwater solution. I use
        8 cups of water (1920g) and then 3% (~60g) salt to cover my vegetables.
        The time to complete the fermentation is at least 3 days, up to a week,
        but it varies. I don't think the exact day is very critical. I pulled it
        when the color had muted significantly and most of the vegetables sank
        to the bottom.
      </p>
      <Figure
        src="https://ye-olde-blog.s3.amazonaws.com/img/giardiniera/start-2.jpg"
        alt="Beginning of Giardiniera fermentation"
        caption={`
          At the beginning, most of the contents float. In my experience, most of the vegetables will sink to the bottom by the end of the fermentation.
        `}
        breakpoints={[
          { w: 600, v: "100%" },
          { w: 900, v: "75%" },
          { w: 1100, v: "60%" },
          { w: 1200, v: "50%" },
          { w: Infinity, v: "600px" },
        ]}
      />
      <Figure
        src="https://ye-olde-blog.s3.amazonaws.com/img/giardiniera/start.jpg"
        alt="Close up view of beginning"
        breakpoints={[
          { w: 600, v: "100%" },
          { w: 900, v: "75%" },
          { w: 1100, v: "60%" },
          { w: 1200, v: "50%" },
          { w: Infinity, v: "600px" },
        ]}
      />
      <p>
        At the end of the fermentation, I added 3 tbsp sugar and a quarter cup
        of white vinegar. This should mostly stop the fermentation and add a bit
        more acidity to the giardiniera.
      </p>
      <p>
        If I were to change these ingredients at all I would definitely remove
        the fresh parsely. Fresh herbs react poorly to the fermentation. A
        variation would be to go more herbaceous with dried Rosemary, sage,{" "}
        {"&"} thyme. I think in that case I would drop any hot peppers.
      </p>
      <Figure
        src="https://ye-olde-blog.s3.amazonaws.com/img/giardiniera/bottled.jpg"
        alt="Bottled giardiniera"
        breakpoints={[
          { w: 600, v: "100%" },
          { w: 900, v: "75%" },
          { w: 1100, v: "60%" },
          { w: 1200, v: "50%" },
          { w: Infinity, v: "600px" },
        ]}
      />
      <p>
        I bottled mine in mason jars. They keep for several weeks in the fridge.
        This stuff goes great on a sandwhich, salad, hotdog, etc. The brine is
        also good anywhere you need some salty, acidic liquid but brings a bit
        of funk. I've added a bit when bringing together a pasta sauce in place
        of something like wine or lemon juice.
      </p>
      <Figure
        src="https://ye-olde-blog.s3.amazonaws.com/img/giardiniera/sandwich.jpg"
        alt="Giardiniera on a sandwhich"
        breakpoints={[
          { w: 2000, v: "100%" },
          { w: Infinity, v: "600px" },
        ]}
      />
    </div>
  ),
};
