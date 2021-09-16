import React from "react";
import SectionHeader from '../post-components/SectionHeader';
import Figure from "../post-components/Figure";

export default {
  title: "Columbus Park of Roses",
  id: "park-of-roses",
  previewContent: "Some pics from my recent visit and an awesome landscape plan from 1952.",
  date: "20 June, 2021",
  content: (
    <>
      <p>
        <a href="https://parkofroses.org/" target="_blank">Columbus Park of Roses</a> is a 13-acre rose garden on the north side of Columbus in the Clintonville neighborhood. The park is within the larger Whetstone park, along the banks of the Olentangy river and bordered to the south by Overbrook Ravine (more on the Ravines in a future article). Of all the great parks in the city, the rose garden stands out.
      </p>
      <p>
        This garden is a standard that I think all public spaces should reach for. Importantly, it's completely free and open to the public.
      </p>
      <p>
        While reading <a href="https://en.wikipedia.org/wiki/Columbus_Park_of_Roses" target="_blank">the Wikipedia entry</a> on the park, I found this landscape plan. It dates to 1952, the year the park was built. I'm a sucker for maps and architectural drawings (look at that title font!), so of course I had to find the source image. It's available at full resolution from the <a href="https://digital-collections.columbuslibrary.org/digital/collection/memory/id/13461">Columbus Metroplitan Library Collection</a>. You'll want to <em>right-click {">"} Open image in new tab</em> and zoom in on this one.
      </p>
      <Figure
        alt='General plan of the Park of Roses'
        src='https://ye-olde-blog.s3.amazonaws.com/img/park-of-roses/park-of-roses-plan.jpg'
      />
      <p>
        The plan differs from the current state of the park. I haven't been able to determine if this is a result of updates or if the plan wasn't implemented exactly. Here are some differences I can spot:
      </p>
      <p>
        Missing administration building:
      </p>
      <Figure
        alt='drawing of an admin building'
        src='https://ye-olde-blog.s3.amazonaws.com/img/park-of-roses/admin-detail.png'
      />
      <Figure
        alt='satellite image of an admin building'
        src='https://ye-olde-blog.s3.amazonaws.com/img/park-of-roses/admin-sat.png'
      />
      <p>Current ampitheater/gazebo is labeled as a lilac garden, also note missing restroom:</p>
      <Figure
        alt='drawing of a lilac garden'
        src='https://ye-olde-blog.s3.amazonaws.com/img/park-of-roses/lilac-detail.png'
      />
      <Figure
        alt='satellite image of missing lilac garden'
        src='https://ye-olde-blog.s3.amazonaws.com/img/park-of-roses/lilac-sat.png'
      />
      <p>Children's Garden moved and expanded:</p>
      <Figure
        alt='drawing of the childrens garden'
        src='https://ye-olde-blog.s3.amazonaws.com/img/park-of-roses/children-detail.png'
      />
      <Figure
        alt='satellite image of moved childrens garden'
        src='https://ye-olde-blog.s3.amazonaws.com/img/park-of-roses/children-sat.png'
      />
      <p>
        Of note are the dotted lines south of the garden representing the banks of the ravine. They give a good indication of the relationship between the garden meadow and the adjacent ravine.
      </p>
      <p>
        Here are some pictures I took on June 5, 2021:
      </p>
      <Figure
        src='https://ye-olde-blog.s3.amazonaws.com/img/park-of-roses/por-1.jpg'
        alt='Colorful roses'
      />
      <Figure
        src='https://ye-olde-blog.s3.amazonaws.com/img/park-of-roses/por-2.jpg'
        alt='Colorful roses'
      />
      <Figure
        src='https://ye-olde-blog.s3.amazonaws.com/img/park-of-roses/por-3.jpg'
        alt='Colorful roses'
      />
      <Figure
        src='https://ye-olde-blog.s3.amazonaws.com/img/park-of-roses/por-4.jpg'
        alt='Colorful roses'
      />
      <Figure
        src='https://ye-olde-blog.s3.amazonaws.com/img/park-of-roses/por-5.jpg'
        alt='Colorful roses'
      />
      <Figure
        src='https://ye-olde-blog.s3.amazonaws.com/img/park-of-roses/por-6.jpg'
        alt='Colorful roses'
      />
    </>
  )
};
