import React from "react";

import Figure from "../../post-components/Figure";

export default {
  title: "Columbus Park of Roses",
  id: "park-of-roses",
  previewContent: "Some pics from my recent visit and an awesome general plan from 1952.",
  date: "20 June, 2021",
  content: (
    <>
      <p>
        <a href="https://parkofroses.org/" target="_blank">Columbus Park of Roses</a> is a 13-acre public (free) rose garden on the north side of Columbus in the Clintonville neighborhood. The park is within the larger Whetstone park, along the banks of the Olentangy river and bordered to the south by Overbrook Ravine (more on the Ravines in a future article). Of all the great parks in the city, the rose garden truly stands out, it's among some of the best landscape design I've seen in person and it's such a treat to walk through.
      </p>
      <p>
        While reading <a>the Wikipedia entry</a> on the park, this general plan from 1952 (the year the park was build) stuck out to me. I'm a sucker for maps and architectural drawings (look at that title font!), so of course I had to find the source image. It's available at full resolution from the <a href="https://digital-collections.columbuslibrary.org/digital/collection/memory/id/13461">Columbus Metroplitan Library Collection</a>. You'll want to <em>right-click {">"} Open image in new tab</em> and zoom in on this one:
      </p>
      <Figure
        alt='General plan of the Park of Roses'
        src='./img/park-of-roses-plan.jpg'
      />
      <p>
        The plan differs from the current state of the park. I haven't been able to determine if this is a result of updates or if the plan wasn't implemented exactly. The changes I spotted include:
        <ul>
          <li>There is no administration building at the east tip of the garden</li>
          <li>The Ampitheater/gazebo is not drawn, instead the area is labeled as a lilac garden</li>
          <li>There are several bathrooms in the drawing that don't exist</li>
          <li>The children's garden was moved</li>
        </ul>
        Of note are the dotted lines south of the garden representing the banks of the ravine. They give a good indication of the relationship between the garden meadow and the adjacent ravine.
      </p>
      <p>
        Here are some pictures I took on June 5, 2021:
      </p>
      <Figure
        src='./img/por-1.jpg'
        alt='Colorful roses'
      />
      <Figure
        src='./img/por-2.jpg'
        alt='Colorful roses'
      />
      <Figure
        src='./img/por-3.jpg'
        alt='Colorful roses'
      />
      <Figure
        src='./img/por-4.jpg'
        alt='Colorful roses'
      />
      <Figure
        src='./img/por-5.jpg'
        alt='Colorful roses'
      />
      <Figure
        src='./img/por-6.jpg'
        alt='Colorful roses'
      />
    </>
  ) 
};
