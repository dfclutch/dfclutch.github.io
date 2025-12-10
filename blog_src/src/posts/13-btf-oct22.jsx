import React from "react";
import Figure from "../post-components/Figure";
import { Link } from "../post-components/Link";
import { Map } from "../post-components/Map";

export default {
  title: "Black Forest Trail Trip Report",
  id: "bft-oct22",
  previewContent: `
    Making mistakes in great weather.
  `,
  date: "Aug 1, 2021",
  content: () => (
    <>
      <p>
        The Black Forest Trail (BFT) is a 43 mile trail in North Central
        Pennsylvania. Despite being on the shorter end of PA long trails, it is
        one of the most physically demanding, with 7 ascents/descents of 1000'.
        The trail draws two arcs through the water-carved Allegheny plateu,
        alternating between easy, flat trail atop the plateu and knee-busting
        climbs in and out of 500-1000' deep hollows.
      </p>
      <Map src="https://caltopo.com/m/L5QV9"></Map>
      <Figure src="https://ye-olde-blog.s3.amazonaws.com/img/bft-oct22/bft-profile.png" />
      <p>
        Last time I was on the Black Forest Trail in December 2018, I attempted
        it during a winter break from college. I hiked 10 miles the first day
        and destroyed my feet and knees due to poor conditioning. The second day
        I took the shortest route back to the car, connecting some multi-use
        trails and sections of the BFT. This time around I was determined to
        complete a thru hike.
      </p>
      <p>
        I debated switching directions from my first attempt, hiking the trail
        clockwise. This would give me new scenery first and leave the shortest
        day for the drive home. Ultimately, I decided to hike it in the same
        direction as before. Hiking counterclockwise match up with the direction
        the guidebook is written in and to make the first day a bit easier.
      </p>
      <p>
        I used the Black Forest Trail interpretive guide written by Chuck Dillon
        and{" "}
        <Link
          href="https://pahikes.com/products/black-forest-trail-guide-and-map"
          text="sold through PAHikes."
        />{" "}
        These PAHikes guides are full of great info, including history of the
        area, tips for dealing with conditions and wildlife in the are to
        expect. The main feature is a detailed breakdown of trail movements,
        points of interest, water sources, campsites, etc. It turns the hike
        into somewhat of a scavenger hunt and provides information about things
        along the trail you'd never know.
      </p>
      {/* pic of guidebook */}
      <p>
        The guidebook package also comes with a waterproof map. I used this
        exclusively, in conjunction with the guidebook for navigation. Usually I
        have a GPS track on my phone to follow, but this time I decided I didn't
        need it. The map got pretty beaten up during the hike as it was
        constantly in and out of my pocket. The information is pretty useful. I
        wish the cartography was more elegantly produced.
      </p>
      {/* pic of map */}
      <h2>Mistake 1: Mothballs</h2>
      <p>
        I think it's fair to say the Guidebook caused my first mistake. I
        briefly skimmed it ahead of time, and found an interesting section on
        Porcupines. The author claims if you leave your car in/around the
        forest, you are exposed to porcupines which will chew wiring and hoses
        under your car looking for salty buildup. Their recommended remedy was
        to put a container of mothballs under your vehicle to ward the
        porcupines off. I dismissed the warning, assuming this was an edge case
        I didn't have to worry about. I'm leaving my car there for 3 days,
        people LIVE in the forest, I'm sure they don't carry mothballs
        everywhere.
      </p>
      <p>
        Now, you may be thinking my car is about to get wrecked by porcupines.
        Luckily that didn't happen. However, when I arrived at the parking lot,
        of the two cars there one had mothballs under it. My mind flashed back
        to the authors warning, and checked the guidebook to ensure I had
        remembered correctly. I panicked, assuming this was a commonly known
        problem in the forest.
      </p>
      <p>
        After a few minutes trying to figure out if I should really do this, I
        went a couple hundred feet up the road to Wolfe's General Store. They
        did in fact have
      </p>
    </>
  ),
};
