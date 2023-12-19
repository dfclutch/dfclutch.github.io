import React from "react";

import { Mono } from "../post-components/Mono";
import { Link } from "../post-components/Link";
import { YoutubeEmbed } from "../post-components/YoutubeEmbed";

export default {
  title: "Home Pizza Tutorial",
  id: "pizza",
  previewContent: `
    My definitive guide to at-home pizza making
  `,
  date: "March 28, 2023",
  content: () => (
    <>
      {/* 
      
      Refactor:
      - Highest priority: recipe instruction
        - collapsible extra info?
        - how to smoothly handle split paths?
      
      
      
      Ratio calculator
        
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
      <p>
        This is a complete guide to cooking pizza at home, with a standard gas
        or electric oven.
      </p>
      <p>
        Cooking pizza in a home oven is challenging because the temperature
        limit is about 550&deg;, while professional pizza ovens operate at
        900&deg;. This temperature difference causes a moisture management
        problem that will make it difficult to get an ideal pizza crust. We are
        looking to achieve a crust that is crisp all the way to the center and
        baked all the way through. Much of the technique in this guide is
        focused on eliminating these moisture issues.
      </p>
      <h2>1. Dough</h2>
      <p>
        You can make the dough by hand (in a large bowl), with a bread machine,
        or in a stand mixer. In each case, you combine the ingredients in the
        same way before kneading. This recipe makes 600g of dough, enough for 2
        medium or 3 small pizzas.
      </p>
      <h3>1.1 Bloom yeast</h3>
      <p>To mixing vessel add:</p>
      <ul>
        <li>
          <Mono>1 tsp</Mono> sugar
        </li>
        <li>
          <Mono>1 cup (240g)</Mono> warm water - let your tap heat up to pretty
          warm, but not hotter than you would comfortably use to wash your
          hands.
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
        your finger to sprinkle, avoiding clumps.
      </p>
      <p>Let bloom for 3-5 mins - the yeast should bloom into a bubbly foam.</p>
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
      <h3>1.3 Mix and Knead</h3>
      <p>
        Combine wet and dry, with <Mono>2 Tbsp Olive Oil</Mono>.
      </p>
      <ul>
        <li>
          <strong>Bread machine:</strong> just let the dough setting run its
          course. This will usually handle proofing as well.
        </li>
        <li>
          <strong>Stand mixer:</strong> knead with the dough hook for ~5-10 mins
          until a smooth, tacky dough has formed.
        </li>
        <li>
          <strong>By hand:</strong> mix the dough in the bowl until it starts to
          come together. Turn out onto a clean work surface, scraping all the
          floury bits from the bowl. Knead by folding the dough over itself and
          pushing down, rotating as you go. Keep going until the dough is
          totally smooth, about 5-10 mins. When you start your hands will be
          covered in sticky, floury bits. By the time they are totally clean
          (e.g. the flour has worked back into the dough ball, you should be
          about done kneading.
        </li>
      </ul>
      <h3>1.4 Fermenting and Proofing</h3>
      <strong>Option 1: Cold Fermentation</strong>
      <p>
        Ideally, you'd make this pizza dough at least a full day in advance.
        This allows for a lengthy "Cold Ferment" in the fridge, which develops
        gluten for chew, adds flavor complexity, and improves browning in the
        oven. Simply store your kneaded dough in an airtight container in the
        fridge for 1-3 days. Be careful: if your container has a weak lid (like
        most non-snap tupperware), the expansion of the dough may pop the lid
        off and your dough will form a dried-out skin. Traditionally, this is
        done as a "bulk ferment" where all 600g of dough is kept together,
        however I don't think there would be a difference if you separate your
        dough into individual portions first.
      </p>
      <p>
        After cold fermenting, remove the dough at least 3 hours ahead of when
        you want to bake your pizza. First, let the dough come up to room temp
        for about 2 hours. Then move onto portioning and final proofing.
      </p>
      <strong>Option 2: Standard Proof</strong>
      <p>
        Allow your kneaded dough to rest at room temperature for about 1 hour
        until it's nearly doubled in size. Do this on the counter under an
        inverted bowl, in an airtight container, or in a bowl covered in a damp
        towel.
      </p>
      <strong>Portioning and Final Proof</strong>
      <p>Portion your dough into 200 or 300g.</p>
      <p>
        Form taut dough balls. This is a tricky thing to describe in words, so{" "}
        <Link
          text="here's a quick video on how to do it."
          href="https://youtu.be/v5t5MEZt6LM"
        />
      </p>
      <p>
        Allow he dough balls to prove one final time for about an hour, covered
        of course. By the end of this time, the dough should be extremely
        supple. When poked, the dimple should not spring back readily. If it
        still feels stiff, you can give it a bit of a head start by flattening
        it a bit from a sphere to a circle and letting it rest about 20 more
        minutes. This will encourage it to form a pizza round more easily.
      </p>
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
      <p> I am no purist and regularly add some or all of:</p>
      <ul>
        <li>Black pepper</li>
        <li>Garlic</li>
        <li>Onion</li>
        <li>Red pepper flake</li>
        <li>Dried basil and oregano</li>
        <li>Honey</li>
      </ul>
      <p>
        Restaurants often will not cook their sauce at all before topping the
        pizza. At home, cooking the sauce helps reduce the moisture and makes it
        easier to get a nice crust. I like to bring it to a boil and simmer for
        about 3 minutes. This doesn't thicken the sauce too much, but goes a
        long way on the pizza. Even if you don't cook the sauce at all, I highly
        recommend warming it before it goes onto the pizza (see ###Assembly)
      </p>
      <p>
        You can cook the sauce down to a thick, jarred marinara consistency if
        you want. I like to do so with lots of flavor mix-ins for thicker crust
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
      <h2>4. Toppings</h2>
      <p>
        The 2 most important aspects of topping a pizza for me are even
        distribution of toppings in each bite and avoiding pulling off lots of
        cheese and other toppings when you take a bite. Both of these are
        accomplished by chopping your toppings into small bits.
      </p>
      <p>
        As always, moisture is our primary concern. Many toppings benefit from
        being patted dry by a paper towel before going on the pizza, especially
        things that are packaged in liquid.
      </p>
      <p>
        Here is some specific advice and some toppings I like that you may not
        consider:
      </p>
      <ul>
        <li>Garlic: sliced to ultra-thin slivers</li>
        <li>
          Corn: kernels from a can or cut off the cob. The sweetness is
          delicious and pairs well with spicy/salty toppings
        </li>
        <li>
          Artichoke hearts: a bit meaty in texture and lemony in flavor, these
          definitely need a thorough drying. A nice preparation is to dry and
          roughly chop them, then mix in a bowl with salt, pepper, dried oregano
          and basil before topping. Goes great with spinach.
        </li>
        <li>
          Pineapple: one of the wettest ingredients around. Instead of doing big
          chunks, I prefer to slice the pineapple into thin (1/8") shingles.
          Even better: fry them in a skillet for a min or two before topping the
          pizza to get the crispiest, most caramelized pineapple pizza ever.
        </li>
        <li>
          Tomatoes: especially good if using a pesto or white cream sauce. Like
          the pineapple, slice large tomatoes into thin shingles, then pat them
          dry and salt them a few mins before topping. Cherry tomatoes halved or
          quartered are also great. <strong>Always salt your tomatoes</strong>{" "}
          (even when not making pizza).
        </li>
        <li>
          Spinach: a classic, you'll need a lot because it wilts away to nothing
          in the heat.
        </li>
        <li>
          Bacon: fry bacon in full strips, leaving it a bit underdone, drain
          some fat on a paper towel, and then chop/crumble onto the pizza. Raw
          bacon on a pizza will never get crisp and introduces way too much fat
          and liquid.
        </li>
        <li>
          Pepperoni: I prefer small "cup-and-crisp" pepperoni. Use more than you
          think you'll need because it shrinks as it bakes. Delicious with a
          spicy tomato sauce, extra red pepper flakes, and honey.
        </li>
        <li>
          Ricotta: maybe better under the Cheese section, dollops of ricotta
          around the pie are delicious and creamy. Step it up by roasting and
          crushing a few garlic cloves, and whisking into the ricotta with some
          salt.
        </li>
        <li>
          Nuts: walnuts, pine nuts, cashews, pistachios, whatever you want.
          Smash them to bits, perhaps toast/fry them in a bit of bacon fat from
          your rendered bacon?
        </li>
        <li>
          Fruit: dried fruit like figs and dates work especially well to add a
          lot of sweetness. Pair with a balsamic reduction drizzle after baking.
        </li>
      </ul>
      <h2>5. Assembly</h2>
      <p>
        We are finally ready to bake! Set your oven as high as it goes, at least
        500&deg; but ideally 550&deg;. While it preheats, put whatever you are
        baking your pizza on in the oven to come up to temperature. A normal
        baking sheet will work, but the heavier the better. A pizza stone is
        great, I often use a heavy cast iron griddle instead.
      </p>
      <h3>5.1 Stretching the dough</h3>
      <p>
        Don't let this step scare you, the dough can sense fear. Since
        stretching dough is such a feel-based process, I'm not going to try to
        explain it in words here. Instead, watch this video from the makers of
        the Ooni Pizza oven:
      </p>
      <YoutubeEmbed
        src="https://www.youtube.com/embed/Entzcl8q7H4?start=60"
        width={"560"}
        height={"315"}
      />
      <p>
        If you find the dough is too springy and won't stretch without
        contracting, don't rush it. Leave the dough as a small round, cover it
        with a clean towel or plastic and let it rest another 15 mins or so.
        Even better, move it near your warming oven to encourage further gluten
        relaxation.
      </p>
      <h3>5.2 Docking and Parbaking</h3>
      <p>
        I find that baking the pizza crust with no toppings or sauce for just a
        couple minutes is important for most pizzas/ovens. You get a head start
        on cooking the surface directly below the toppings, and forming a bit of
        a baked crust before putting sauce down means you aren't introducing
        more moisture into your dough to prevent baking.
      </p>
      <p>
        Docking is the process of putting tiny holes in the dough to keep it
        from bubbling too much. I always did this with a fork, until my brother
        got me a docking roller for Christmas. You don't need to go crazy, but
        try to get even coverage across the dough except in the crust. I usually
        do this step after transferring the dough to the baking sheet before the
        parbake. If you dock and then try to pick the dough up, you may end up
        with large holes in your crust.
      </p>
      <p>
        Once your dough is stretched, remove the baking sheet/pizza stone from
        the oven, quickly transfer the dough to it, dock, and put it back in the
        oven for about 2 minutes. You are looking for the dough to look just a
        bit drier and maybe a few very light brown spots where there are
        bubbles/high points in the dough.
      </p>
      <h3>5.3 Decorating</h3>
      <p>
        Remove your parbaked crust and sauce, cheese, and top it up. This is a
        race against time, you want your pizza out of the oven for the absolute
        minimum time. Make sure all your ingredients for topping are right at
        hand and already opened (ideally they'd be portioned too but that's a
        bit extra).
      </p>
      <h4>5.3.1 Sauce</h4>
      <p>
        One of the most critical steps in the fight for crispy crust:{" "}
        <strong>warm your sauce ahead of time.</strong> I only recently
        discovered this, but it makes total sense. You need to evaporate much of
        the water from the sauce in order to cook the dough and keep the
        toppings from being too wet. If you start from cold sauce, most of the
        time the pizza spends baking, the sauce is too cold to do much
        evaporating.
      </p>
      <p>
        If I've made fresh sauce, usually I will bring it to a boil and simmer
        for a bit anyway to reduce it some, so I go directly on the pizza from
        the pot. If I am using already made sauce from the fridge, I just
        microwave the amount I'll need for the pizza. It doesn't have to be
        boiling, but at least warm to the touch.
      </p>
      <p>
        I use relatively little sauce, just barely enough to cover. Even if you
        are a sauce fiend, use less than you think you'll need. It's easy to
        over-sauce.
      </p>
      <p>
        The rest of the decoration is how you'd expect it. I would encourage
        experimentation with how you apply toppings. For example: add a light
        layer of cheese, then your chunky toppings, then a bit more cheese.
        Think about what needs the most/least intense heat and position those
        toppings higher/lower in the stack.
      </p>
      <h3>6. Baking and Resting</h3>
      <p>
        Place your decorated pizza back in the oven and let it bake. There's no
        substitute for keeping a close eye on your pizza to tell when it's done.
        You want deep browning on the crust and cheese, so I encourage you to be
        brave and let it keep baking until it's truly cooked. We aren't here for
        anemic crusts.
      </p>
      <p>
        If your pizza is well baked you should be able to pick it up without the
        middle sagging. The bottom should be well browned, and audibly crisp if
        you scrape along the bottom of it.
      </p>
      <p>
        After you remove the pizza, it should rest about 3-5 minutes before
        slicing. This allows the cheese and toppings to set a bit to allow for
        clean slices. I will sometimes move the pizza off the baking sheet and
        onto a clean counter or another baking sheet so it cools faster, but
        that's extra cleanup.
      </p>
    </>
  ),
};
