import React from "react";

import { Mono } from "../post-components/Mono";

export default {
  title: "Pizza Tutorial",
  id: "pizza",
  previewContent: `
    Copy and paste this template into a new post in /wip
  `,
  date: "REPLACE ME!",
  content: () => (
    <>
      {/* Ratio calculator
        
        input:
          # of pizzas
          weight of individual pizzas (200, 300, 400, 500g)
          hydration: 65%-85%

        output:
          water
          sugar
          yeast
          olive oil
          flour
          salt
        */}
      <h2>1. Dough</h2>

      <p>
        You can make the dough by hand (in a large bowl), with a bread machine,
        or in a stand mixer. In each case, you combine the ingredients in the
        same way before kneading.
      </p>

      <h3>1.1 Bloom yeast</h3>
      <p>To mixing vessel add:</p>
      <ul>
        <li>
          <Mono>1 tsp</Mono> sugar
        </li>
        <li>
          <Mono>1 cup (240g)</Mono> warm water - let your tap heat up to pretty
          warm, but not hotter than you would comfortably use to wash your hands
        </li>
      </ul>
      <p>
        Swirl around to mostly dissolve sugar. It's okay if it's not completely
        dissolved, but if is mostly undissolved, your water is probably too
        cold.
      </p>
      <p>
        Sprinkle <Mono>2 tsp</Mono> Active Dry Yeast over the water - Hold the
        teaspoon level above the water's surface and tap the side of it with
        your finger to sprinkle, avoiding clumps
      </p>
      <p>Let bloom for 3-5 mins - the yeast shoulD bloom into a bubbly foam</p>

      <h3>1.2 Dry ingredients</h3>
      <p>In a separate bowl, mix thoroughly:</p>
      <ul>
        <li>
          <Mono>360g (2.5 cups)</Mono> Flour - I generally use bread flour, but
          often sub out ~10% for whole wheat. All Purpose flour also works fine
          here, it's a bit more tender and less chewy. As long as you add up to
          the correct weight it should be fine. Whole wheat may need a bit more
          hydration in my experience.
        </li>
        <li>
          <Mono>1 tsp</Mono> kosher salt
        </li>
      </ul>

      <h2>2. Sauce</h2>
      <p>
        Tomato sauces are very flexible. Most in-the-know pizza makers will use
        a canned San Marzano tomato. Canning is done at the peak of freshness
        and ripeness and preserves the flavor well. In the simplest recipes, the
        tomatoes are pureed with only salt and olive oil. Simple Italian cooking
        requires high quality ingredients to work. Sourcing good olive oil and
        tomatoes is well worth it. At the very least, a taste of either on its
        own should be delicious.
      </p>
      <p> I am no purest and regularly add some or all of:</p>
      <ul>
        <li>Black pepper</li>
        <li>Garlic</li>
        <li>Red pepper flake</li>
        <li>Dried basil and oregano</li>
        <li>Honey</li>
      </ul>

      <p>
        Restaurants often will not cook their sauce at all before topping the
        pizza. This is possible because their ovens are 900&#8451;. Since our
        pizza will be baked at around 500&#8451;, cooking the sauce helps reduce
        the moisture and makes it easier to get a nice crust. I like to bring it
        to a boil and simmer for about 3 minutes. This doesn't thicken the sauce
        too much, but goes a long way on the pizza. Even if you don't cook the
        sauce at all, I highly recommend warming it before it goes onto the
        pizza (see ###Assembly)
      </p>
      <p>
        You can cook the sauce down to a thick, jarred-marinara consistency if
        you want. I like that with lots of flavor mix-ins on thicker crust
        pizzas like Chicago or Detroit style, or even Focaccia.
      </p>

      <h2>3. Cheese</h2>
      <p>
        For a long time I used fresh mozzarella. It's delicious straight from
        the fridge or melted and browned on a pizza. Sadly, I think it's a poor
        choice for a home oven baked pizza because it's moisture content is far
        too high.
      </p>
      <p>
        Low moisture mozz is the best option, ideally grated from a block.
        Pre-grated cheese is fine, but it has anti-clumping agents which inhibit
        smooth melting on the pizza.
      </p>
      <p>
        I generally grate parmesan or pecorino over the pizza immediately after
        baking.
      </p>
    </>
  ),
};
