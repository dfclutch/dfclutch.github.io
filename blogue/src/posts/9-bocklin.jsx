import React from "react";
import Figure from "../post-components/Figure";

export default {
  title: <>Arnold B&#246;cklin</>,
  id: "bocklin",
  previewContent:
    "In which I realize how hard it is to find the name of a typeface.",
  date: "Sept 18, 2021",
  content: (
    <>
      <p>
        I feel like I know typography better than most people. I work with type
        almost every day as a part of my job. I can recognize a lot of
        typefaces, I know the terms like <em>ascenders</em> and <em>kerning</em>
        . Even with all that, I was completely stumped trying to identify a
        familiar font that I never knew the name of. Every so often I'd see a
        new example or think of a new adjective to search, but it took forever
        to actually get a result.
      </p>
      <p>
        Here's some examples of variations and similar typefaces I found along
        the way:
      </p>
      <Figure
        caption={<>Short North Tavern, Columbus, OH</>}
        src="https://ye-olde-blog.s3.amazonaws.com/img/bocklin/short-north-tavern.jpeg"
        breakpoints={[{ w: Infinity, v: "700px" }]}
      />
      <Figure
        src="https://ye-olde-blog.s3.amazonaws.com/img/bocklin/alrosa.jpeg"
        breakpoints={[{ w: Infinity, v: "700px" }]}
      />
      <p>
        Alrosa Villa nightclub in Salem Village, Columbus, OH. Legendary metal
        guitarist{" "}
        <a href="https://en.wikipedia.org/wiki/Dimebag_Darrell" target="_blank">
          Dimebag Darrell
        </a>{" "}
        was shot and killed during a show here. This sign no longer exists and
        the venue is set to be demolished and replaced with apartments.
      </p>
      <Figure
        caption="Bicycle card deck"
        src="https://ye-olde-blog.s3.amazonaws.com/img/bocklin/card-deck.jpeg"
        breakpoints={[{ w: Infinity, v: "500px" }]}
      />
      <Figure
        caption="Moon River - Frank Ocean"
        src="https://ye-olde-blog.s3.amazonaws.com/img/bocklin/moon-river.jpeg"
        breakpoints={[{ w: Infinity, v: "700px" }]}
      />
      <Figure
        caption="Grateful Dead Merch"
        src="https://ye-olde-blog.s3.amazonaws.com/img/bocklin/GD_Tee.jpeg"
        breakpoints={[{ w: Infinity, v: "700px" }]}
      />
      <Figure
        src="https://ye-olde-blog.s3.amazonaws.com/img/bocklin/pedal-with-pete.jpg"
        breakpoints={[{ w: Infinity, v: "700px" }]}
      />
      <p>
        Pedal With Pete is a local <a href="https://pedal-with-pete.org/" target="_blank">cerebral palsy foundation</a>. They no longer use this extravagant font in their branding.
      </p>

      <p>
        Of these, the Grateful Dead tee is the only true use of the typeface,
        the others are variations. After a few months of searching, I finally
        got the name: <em>Arnold B&#246;cklin.</em>
      </p>

      <Figure
        src="https://ye-olde-blog.s3.amazonaws.com/img/bocklin/ArnoldBocklinSpec.png"
        breakpoints={[{ w: Infinity, v: "700px" }]}
      />

      <p>
        It's a classic{" "}
        <a
          href="https://en.wikipedia.org/wiki/Display_typeface"
          target="_blank"
        >
          Display typeface
        </a>{" "}
        - something used mainly for signs and titles, never for body text.
        B&#246;cklin was designed in 1904 and named for an eponymous 19th
        century Symbolist painter. Not sure exactly the connection between him
        and the typeface/type designer. B&#246;cklin is an <em>Art Nouveau</em>{" "}
        style typeface. The style focuses on highly decorative and artistic
        script fonts, often featuring extended serifs. For me, it evokes
        thoughts of high fantasy novels or psychedelics. Reading about the Art
        Nouveau movement led me to this amazing Wikipedia page:{" "}
        <a
          href="https://en.wikipedia.org/wiki/Art_Nouveau_posters_and_graphic_arts"
          target="_blank"
        >
          Art Nouveau posters and graphics
        </a>
        . None of the images contained font strikingly similar to B&#246;cklin,
        but they are classic hipster wall decor:
      </p>

      <Figure
        src="https://upload.wikimedia.org/wikipedia/commons/8/80/Privat-Livemont_-_Absinthe_Robette%2C_1896.jpg"
        breakpoints={[{ w: Infinity, v: "650px" }]}
      />

      <p>
        Speaking of High Fantasy, here's a cool Art Nouveau typeface named for
        Tolkein's character Galadriel. Though it's contemporary (1970s), it is
        very similar to many of the fonts used in the Art Nouveau graphics:
      </p>
      <Figure
        src="https://ye-olde-blog.s3.amazonaws.com/img/bocklin/galadriel.jpeg"
        breakpoints={[{ w: Infinity, v: "650px" }]}
      />

      <p>
        Galadriel is quite similar to, though a bit less creepy than, the
        typeface that American Horror Story uses:{" "}
        <a
          href="https://en.wikipedia.org/wiki/Willow_(typeface)"
          target="_blank"
        >
          Willow
        </a>
        . Both feature vertically high-positioned cross-members, but Willow has
        the tiny "O" character. <em>*shudder*</em>
      </p>

      <Figure
        src="https://ye-olde-blog.s3.amazonaws.com/img/bocklin/willow.png"
        breakpoints={[{ w: Infinity, v: "650px" }]}
      />
    </>
  ),
};
