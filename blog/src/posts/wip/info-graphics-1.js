import React from "react";
import { Link } from "../../post-components/Link";
import { Mono } from "../../post-components/Mono";
import Figure from "../../post-components/Figure";
import styled from "styled-components";
import { useIsMobile } from "../../utilities/responsive";

const Flex = styled.div`
  display: flex;
  align-items: start;
  justify-content: space between;
`;

export default {
  title: "Information Graphics Pt 1: Rules, Metrics, and Features",
  id: "info-graphics-1",
  previewContent: `
    Applying the Information Graphics theories of Edward Tufte
  `,
  date: "Aug 1, 2021",
  content: () => {
    const { isMobile } = useIsMobile();
    console.log({ isMobile });

    return (
      <>
        <h2>Information Graphics</h2>
        <p>
          Information Graphics are tools for visual communication. They may
          display data, communicate instructions, or highlight connections.
          These are ever present in our lives and an important part of how we
          interact with the world. Road signs, stock performance graphs,
          restaurant menus, weather reports, fire exit maps in your hotel room,
          etc.
        </p>
        <p>
          Information Graphics bring attention to features of a dataset that are
          not immediately apparent from looking at raw numbers. We can consume
          great quantities of information through graphical representation and
          visualization. The primary techniques include structuring, coloring,
          clustering, labeling, mapping, summarizing, etc. However, these
          manipulations of the data are also apt to mislead. Carefully
          constructed Information graphics are:
        </p>
        <ul>
          <li>Self-explanatory</li>
          <li>Information Dense</li>
          <li>Honest</li>
        </ul>
        <h2>Tufte</h2>
        <p>
          Edward Tufte is a statistician, graphics thinker, professor, and
          author. His primary work is a series of books on Information Graphics
          published from the early 80s to the late 2000s. These volumes contain
          hundreds of examples of information graphics, each analyzed for their
          strengths and weaknesses according to Tufte. Check out{" "}
          <Link href="https://www.edwardtufte.com/tufte/" text="his website" />,{" "}
          which includes many articles continuing his investigations into
          Information Graphics.
        </p>
        <p>
          I have loosely compiled my understanding of Tufte's work into a set of
          rules, metrics, and features. I started taking notes while reading his
          books, after realizing that I would not be able to internalize all of
          his theory in a single reading. Eventually, I took an opportunity to
          present some of this theory in front of a group of frontend engineers
          at work, which required me to formalize my framework for graphics
          thinking a bit more.
        </p>
        <h2>Concept Reference</h2>
        <h3>Rules</h3>
        <ul>
          <li>
            <Mono>
              Maximize <em>Data Ink</em> / Minimize <em>Chartjunk</em>:
            </Mono>{" "}
            devote the vast majority of space and "ink" (literal or digital) to
            expressing data points. In other words: draw focus to data, not data
            containers.
          </li>
          <li>
            <Mono>Single field-of-view:</Mono> all visual comparisons the viewer
            makes should be viewable at once. Don't make a viewer flip pages or
            slides to compare, humans have terrible visual memory.
          </li>
          <li>
            <Mono>Create useful visual hierarchies:</Mono> structure your data
            presentation such that the most important information is the most
            visually obvious.
          </li>
          <li>
            <Mono>Don't produce eye-tiring effects:</Mono> unintentional optical
            illusions in the form of stripes, patterns, high-contrast grids
            producing flashing dots, etc. all tire the viewers eyes and make it
            harder to draw visual conclusions.
          </li>
          <li>
            <Mono>Avoid encoded labeling:</Mono> Label images directly instead
            of labeling with a letter or number and requiring the viewer to
            search through a key. The less a users eye has to travel the better.
          </li>
          <li>
            <Mono>Don't use meaningless encodings:</Mono> Don't color things
            differently that aren't actually different.
          </li>
          <li>
            <Mono>Don't use arbitrary encodings:</Mono> Don't use a rainbow of
            colors to describe values of the same data type. Use a gradient of a
            single color instead.
          </li>
        </ul>
        <h3>Features</h3>
        <ul>
          <li>
            <Mono>Small Multiples:</Mono> Repeated small-scale graphical
            representations. These allow users to focus on changes in data
            instead of repeatedly deciphering new graphical representations.
            Shared scale is important.
          </li>
          <li>
            <Mono>Multivariate elements:</Mono> Single graphical elements that
            communicate many pieces of data allow for information-dense graphics
            and illuminate connections that may be hard to spot otherwise.
          </li>
          <li>
            <Mono>Macro/Micro Readings:</Mono> Information-dense graphics
            present different datasets at different levels of inspection. Maps
            do this fantastically with large-scale features like roads and towns
            viewable at a distance and small-scale features like schools or
            parks revealing themselves at closer inspection.
          </li>
          <li>
            <Mono>Graphic/Text Integration:</Mono> Text directly in graphics
            eliminates eye travel and lowers the amount of visual information
            the viewer is asked to remember.
          </li>
          <li>
            <Mono>"Small areas of concentrated color":</Mono> Reserving color to
            small areas of great importance and using neutrals elsewhere makes
            it obvious what is important and eliminates distractions.
          </li>
          <li>
            <Mono>Compressibility:</Mono> Graphics can be greatly reduced in
            size while still remaining valuable and informative.
          </li>
        </ul>
        <h3>Metrics</h3>
        <ul>
          <li>
            <Mono>Lie Factor:</Mono> Measures the difference between the data
            and the graphical representation. Calculated by dividing the size of
            an <em>Effect</em> in the data source by the size of the same effect
            in the graphic. Effect here means the difference between two values,
            so in a graphic this is the difference in area on the page
            representing the two values. A lie factor of 1.5 means the graphic
            is overstating the change in data by 50%.
          </li>
          <li>
            <Mono>Data Ink %:</Mono> The percentage of ink used in a graphic to
            represent actual data.
          </li>
          <li>
            <Mono>Multivariate element order:</Mono> The number of data
            dimensions a single element represents.
          </li>
          <li>
            <Mono>Eye travel distance:</Mono> How far the viewers eye must
            travel to gather information. A bit less literal than the others, I
            like to quantify this using "eye-trips across the page per data
            point."
          </li>
        </ul>
        <h2>Analysis of Examples</h2>
        <p>
          Now that we've got some shared vocabulary to bring to our critiques,
          we can start analyzing some examples. My ultimate goal with this
          research is to apply Information Graphics thinking to interactive User
          Interfaces. To bridge that gap a bit, we'll take most of our examples
          from the internet, but stick closer to traditional information
          visualizations than actual interface elements. In future articles, we
          can analyze components like user profiles, interaction counters, or
          data filters.
        </p>
        <h3>Worlds Largest Lakes - Wikipedia</h3>

        <ul>
          <li>
            <Mono>Small Multiples</Mono>: The lake drawings are easy to parse
            and due to their shared scale, are easy to compare to one another.
          </li>
          <li>
            <Mono>Single Field-of-View</Mono>: All lakes cannot be compared at
            once at a useful zoom level.
          </li>
          <li>
            <Mono>Multivariate elements</Mono>: The lake drawings are
            technically multivariate, Lake Vostok in Antarctica is shown in grey
            to signify it is sub-glacial.
          </li>
        </ul>

        <p>
          The comparison is greatly improved by redrawing the lakes to a grid.
          The labeling is lost, but in the world of interactive interfaces, that
          information could be contained in a hover state.
        </p>

        <Flex>
          <Figure
            src="https://ye-olde-blog.s3.amazonaws.com/img/info-graphics/lakes-33.png"
            breakpoints={[{ w: Infinity, v: "22%" }]}
          />
          <Figure
            src="https://ye-olde-blog.s3.amazonaws.com/img/info-graphics/lakes-redrawn.png"
            breakpoints={[
              { w: 700, v: "75%" },
              { w: Infinity, v: "75%" },
            ]}
          />
        </Flex>

        <h3>Nutrition Facts</h3>
        <p>
          Nutrition facts are a very familiar design, making it difficult to
          critique. Consumers have seen so many instances of this table of
          numbers that reading it becomes almost second nature (similar to the
          way small multiples work). With ubiquity, the design flaws start to
          disappear. It is a belabored design with bureaucracy (and lots of
          lobbying) baked in.{" "}
          <Link
            text="Here's an FDA article"
            href="https://www.fda.gov/food/new-nutrition-facts-label/how-understand-and-use-nutrition-facts-label"
          />{" "}
          breaking down the design in detail.
        </p>
        <Flex>
          <Figure
            src="https://ye-olde-blog.s3.amazonaws.com/img/info-graphics/nutrition-facts-1.png"
            breakpoints={[
              { w: 700, v: "45%" },
              { w: 1000, v: "33%" },
              { w: Infinity, v: "27%" },
            ]}
          />
          <Figure
            src="https://ye-olde-blog.s3.amazonaws.com/img/info-graphics/nutrition-facts-2.png"
            breakpoints={[
              { w: 700, v: "50%" },
              { w: 1000, v: "55%" },
              { w: Infinity, v: "45%" },
            ]}
          />
        </Flex>

        <ul>
          <li>
            <Mono>Compressible</Mono>: Nutrition Facts do a great job living in
            small scale on packaging, even as small as individually wrapped
            candy or granola bars.
          </li>
          <li>
            <Mono>Visual Hierarchy</Mono>: Font weights and sizes do a good job
            pushing calorie, serving size, and macro nutrients to the top of the
            hierarchy. Percent DV is a more useful measure than raw grams of a
            nutrient, so it is bolded and given it's own column. However, the
            heavy bars separating sections seem a bit over-emphasized.
          </li>
          <li>
            <Mono>Data Ink %</Mono>: Most of the horizontal and vertical
            dividers comprising the table are kept light, keeping a good data
            ink %. Again, I question the usefulness of the heavy dividers.
          </li>
          <li>
            <Mono>Multivariate elements</Mono>: None are present. A good
            addition to this table might be highlighting standout nutrients,
            like a candy bar that contains 75% of your DV for sugar. Using a
            coloring or other visual marker for these standouts would introduce
            a multivariate component and provide useful information.
          </li>
          <li>
            The design is highly variable depending on food, and holds up well
            to the variation. The dual-column variant above is a good example of
            the flexibility of the design.
          </li>
        </ul>

        <h3>Weather Underground</h3>
        <p>
          My preferred weather forecasting site, Weather Underground has a great
          10-day forecast display, bringing together 20 weather measures in
          temporal alignment. 11 measures are effectively continuous, and the
          hover-state displays a vertical slice of data showing the predictions
          for a specific time. This is one of my favorite data displays on the
          internet.
        </p>
        <Figure src="https://ye-olde-blog.s3.amazonaws.com/img/info-graphics/wunderground.png" />
        <ul>
          <li>
            <Mono>Single Field-of-View</Mono>: A full 1.5 weeks of weather are
            instantly comparable.
          </li>
          <li>
            <Mono>Meaningful Encodings</Mono>: The colors are chosen well to
            intuitively tie measures to their meaning (cloud cover in grey,
            precipitation in blue, hi/lo temps in red/blue, etc.)
          </li>
          <li>
            <Mono>Graphic/Text Integration</Mono>: Labels (along the vertical
            slice) and the keys are integrated directly onto the graphic.
          </li>
          <li>
            <Mono>Eye-travel distance</Mono>: Stacking sets of related measure
            lowers eye travel distance and increases data density.
          </li>
          <li>
            <Mono>Visual Hierarchy</Mono>: The daily weather summary (sunny,
            partly cloudy, etc.) are presented most clearly with both an icon
            and textual description. Important measures like temperature and
            precipitation are the most visually obvious within their stacks.
            Less important data like sun up/down time are much more subtle, only
            being revealed as a light shading along the vertical axis and a
            small icon.
          </li>
        </ul>
        <p>
          I could keep going on, but I'll stop here. This is "Graphical
          Excellence" as Tufte calls it. The graphic shows a massive amount of
          data (approximately 373 individual points) in a readable, intuitive,
          useful graphic.
        </p>
        <br />
        <p>
          Tufte built a whole career off of dissecting graphics, so this primer
          is a hopelessly brief introduction to the topic. The future of this
          series will expand Tufte's frameworks from static graphics, to
          interactive User Interfaces that dominate our digital lives.
        </p>
      </>
    );
  },
};
