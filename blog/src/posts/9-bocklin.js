import React from "react";
import Figure from "../post-components/Figure";

export default {
  title: <>Arnold B&#246;cklin</>,
  id: "bocklin",
  previewContent:
    "In which I realize how hard it is to find the name of a font.",
  date: "Sept 18, 2021",
  content: (
    <>
      <p>
        I feel like I know fonts better than most people. I work with font
        almost every day as a part of my job. I can recognize a lot of fonts, I know the terms like <em>ascenders</em> and <em></em>
        Armed with a college degree in Googling, I thought finding the name of a
        familiar font would be a trivial quest. I went several months unable to
        track down the name of a certain font. Every so often I'd see a new
        example or think of a new adjective to search. Further, the font is
        extremely distinctive and decorative. Below are some examples and
        variants I found.
      </p>
      <Figure
        caption={<>Short North Tavern, Columbus, OH</>}
        src="https://ye-olde-blog.s3.amazonaws.com/img/bocklin/short-north-tavern.jpeg"
        breakpoints={[{ w: Infinity, v: "700px" }]}
      />
      <Figure
        caption="Alrosa Villa nightclub, Columbus, OH. Site of the Dimebag Darrell shooting."
        src="https://ye-olde-blog.s3.amazonaws.com/img/bocklin/alrosa.jpeg"
        breakpoints={[{ w: Infinity, v: "700px" }]}
      />
      <Figure
        caption="Bicycle card deck"
        src="https://ye-olde-blog.s3.amazonaws.com/img/bocklin/card-deck.jpeg"
        breakpoints={[{ w: Infinity, v: "500px" }]}
      />
      <Figure
        caption="That 70s Show title card"
        src="https://ye-olde-blog.s3.amazonaws.com/img/bocklin/That_'70s_Show_logo.png"
        breakpoints={[{ w: Infinity, v: "700px" }]}
      />
      <Figure
        caption="Grateful Dead Merch"
        src="https://ye-olde-blog.s3.amazonaws.com/img/bocklin/GD_Tee.jpeg"
        breakpoints={[{ w: Infinity, v: "700px" }]}
      />

      <p>
        Of these, the Grateful Dead tee is the only true use of the font (the
        others are variations). I finally broke through and found it when I
        searched for "grateful dead font" It's called{" "}
        <em>Arnold B&#246;cklin.</em>
      </p>

      <Figure
        caption=""
        src="https://ye-olde-blog.s3.amazonaws.com/img/bocklin/ArnoldBocklinSpec.png"
        breakpoints={[{ w: Infinity, v: "700px" }]}
      />
    </>
  ),
};
