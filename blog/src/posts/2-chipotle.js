import React from "react";

import Figure from "../post-components/Figure";

export default {
  title: "Chipotle Design Influences",
  date: "5 March, 2021",
  previewContent: `
    Where my love of chairs intersects with my love of fast-casual burritos.
    The chain draws from storied 20th century architects for its primary
    design language.
  `,
  id: "chipotle-design",
  content: (
    <div>
      <p>
        Out of all restaurants, I've eaten at Chipotle easily 2-3 times as many
        as the next most frequent. I fear I've spent hundreds if not thousands
        of dollars at Chipotle restaurants since high school, and the{" "}
        <a href="https://en.wikipedia.org/wiki/Mission_burrito">
          Mission Burrito
        </a>{" "}
        is one of my all time favorite foods. So I figured I'd write a bit about
        it's design influences.
      </p>
      <p>
        Chipotle is plainly distinguished from all other large chains in it's
        quality of interior design. The industrial look stretches back to the
        second location, opened in Denver. Concrete floors, exposed duct work,
        stainless steel, birch CDX plywood, and white tile are the primary
        materials. When assembled, the restaurant feels authentic, high-quality,
        welcoming, and one of Chipotle's key brand identifiers: transparent.
      </p>
      <Figure
        src="./img/chipotle/chipotle-interior.jpg"
        alt="Chipotle Mexican Restaurant interior"
      />
      <p>
        The current iteration of Chipotle's interior design language was refined
        in 2007 by{" "}
        <a href="http://www.architectureoutfit.com/">Architecture Outfit</a>.
        While the exact design of each franchise location is left up to the
        franchisee, the firm put together a "kit of parts" and a set of
        guidelines to provide cohesion across locations. One of the most
        interesting influences on the design was Ludwig Mies Van Der Rohe's{" "}
        <a href="https://farnsworthhouse.org/">Farnsworth House</a>. The house
        is composed from a glass facade and plywood "core volume" containing the
        kitchen, bathroom and fireplace.
      </p>
      <Figure
        src="./img/chipotle/farnsworth-house-exterior.jpg"
        alt="Exterior view of the Farnsworth House"
        caption="The Farnsworth House, a floating box of a building."
      />
      <Figure
        src="./img/chipotle/farnsworth-house-interior.jpg"
        alt="Interior view of the Farnsworth House"
        caption="The plywood core of the Farnsworth House referenced by Chipotle's large plywood interior structures. A box within a box."
      />
      <p>
        The design influence here is clear, and referenced in AO's project page
        on the{" "}
        <a href="http://www.architectureoutfit.com/eating#/chipotle">
          Chipotle Re-Wrap
        </a>
        . Chipotle restaurants appropriated the large plywood mass, often
        housing drink stations, bathroom entrances, and acting as a separation
        between the dining area and kitchen. The transparency of the Farnsworth
        house's glass exterior is also adopted by the restaurant; diners can see
        almost everything the chefs do.
      </p>
      <p>
        The design language mirrors the core tenets of Chipotle's customer
        experience. Simplistic design, clear direction of where to go upon
        entry, obvious signage, and lack of excess. Steve Ells has described
        Chipotle's menu as doing one thing right, avoiding bloat. The restaurant
        itself accomplishes that goal beautifully.
      </p>
      <p>Another early piece of Chipotle design is the chair:</p>

      <Figure
        src="./img/chipotle/chipotle-chair.jpg"
        alt="The Chipotle Chair"
      />
      <p>
        The chair is a excellent piece of design (let alone for a mass produced
        piece of fast-casual restaurant furniture). It is comfortable enough to
        act as a dining chair, and fades into its environment through its
        continuation of the material selections and restrained form. I'd wager
        most regular patrons have no clue what the chair even looks like,
        although it is used in every location (although, most people probably
        don't remember the chairs of any restaurant). The basis of the design
        was a set of dining chairs made for Frank Lloyd Wright's Seth Peterson
        Cottage.
      </p>
      <Figure
        src="./img/chipotle/peterson-interior.jpg"
        alt="Peterson Cottage Interior"
        caption="The dining chairs referenced in the design of the Chipotle chair."
      />

      <Figure
        src="./img/chipotle/peterson-exterior.jpg"
        alt="Peterson Cottage"
        caption="Seth Peterson Cottage, Reedsburg, WI"
      />
      <p>
        These chairs were made of plywood, a common material in Wright's
        furniture designs. They contribute to a motif found in furniture designs
        by FLW: The "apex" cut out of the base of the vertical, forward-oriented
        plywood legs. The pattern extends to tables, lounge chairs around the
        fireplace, and several other pieces of furniture from Wright's
        portfolio. I can't say which piece of furniture came first, however the
        dining chairs are a personal favorite from Wright's selection of plywood
        chairs.
      </p>

      <Figure
        src="./img/chipotle/peterson-fireplace.jpg"
        alt="Peterson Cottage fireplace lounge chairs"
        caption="Peterson Cottage fireplace lounge chairs, shorter, wider, more
        reclined versions of the dining chairs."
      />

      <Figure
        src="./img/chipotle/flw-chairs.jpg"
        alt="Frank Lloyd Wright chairs"
        caption="Wright designed chairs from the Clarence Sondern House exhibiting a similar leg design."
        breakpoints={[
          { w: 1000, v: '100%' },
          { w: 2000, v: '75%' },
          { w: Infinity, v: '800px'},
        ]}
      />
      <p>
        Bruce Gueswel (the man often referenced as the designer of the Chipotle
        chair) built a copy of this chair that became the model for the{" "}
        <a href="http://www.oixio.com/habitat-solutions/form/form-chair.html">
          <em>
            for<u>m</u> chair
          </em>
        </a>{" "}
        designed by Steve Sauer. Sauer took the plywood leg pieces from the
        original chair and redesigned them in skeletal, galvanized steel. Sauer
        also widened the base to improve stability. The apex bends in the metal
        converge under the seatpan in the for<u>m</u>, a divergence from the
        original design. The chair's name is stylized as for<u>m</u>, with only
        the "m" underlined.
      </p>

      <Figure
        src="./img/chipotle/form-chair.jpg"
        alt="Form chair"
        caption="The form chair."
        breakpoints={[
          { w: 900, v: '100%' },
          { w: 1100, v: '80%' },
          { w: Infinity, v: '560px'},
        ]}
      />
      <p>
        These chairs were put into production for the first 7 Chipotle
        locations, with a run of 244 examples. The chairs were quite noisy, so
        Ells asked Sauer to design feet to quite them. At this point, Gueswel
        took over the design and manufacture of the chairs, adding feet and
        rubber components under the seatpan. The distinguishing difference
        between the Gueswel Chipotle chair and the original for<u>m</u> chair is
        the shape of the skeletal legs. The current chair dropped the central
        convergence for two separate leg components connected in the front and
        back by cross struts.
      </p>
      <p>
        I prefer the for<u>m</u> chair to the Gueswel chair. Due to the outward
        bend of the rear leg rods, the lines of the chair are dynamic as the
        viewing angle changes, appearing straight when viewed from the side and
        curved when viewed from the rear. This is referenced in the stamp Sauer
        used to identify his chairs. The rear leg is perfectly straight, but
        when viewing them from behind, the bend is present.
      </p>

      <Figure
        src="./img/chipotle/form-chair-2.jpg"
        alt="Form chair"
        breakpoints={[
          { w: 400, v: '100%' },
          { w: Infinity, v: '400px'},
        ]}
      />
      <Figure
        src="./img/chipotle/form-stamp.jpg"
        alt="Form stamp"
        caption="The stamp Sauer used to identify his chairs."
        breakpoints={[
          { w: 600, v: '80%' },
          { w: 800, v: '60%' },
          { w: Infinity, v: '400px'},
        ]}
      />
    </div>
  ),
};
