import React from "react";
import Figure from "../post-components/Figure";
import { Gallery } from "../post-components/Gallery";

export default {
  title: "Lamp prototyping part 1: Process",
  id: "lamp-proto",
  previewContent: `
    Process and construction of a simple plywood and dowel lamp
  `,
  date: "Jul 6, 2022",
  content: (
    <>
      <p>
        I've long thought I should try to build a lamp, so I decided to give it
        a go this weekend. I figure a lamp is a good starting point for
        furniture design and construction since it requires relatively little
        structural integrity to be effective. The process was informed by access
        to only simple materials and tools. I also needed a large margin for
        error in construction since I am a total layman. This lead to a design
        and construction that is simple to execute and repeat.
      </p>
      <p>
        I started with a quick sketch on paper and then a bit of extra
        formalizing on SketchUp
      </p>
      <Figure
        src="https://ye-olde-blog.s3.amazonaws.com/img/lamp/sketch.jpg"
        breakpoints={[
          { w: 600, v: "100%" },
          { w: 900, v: "75%" },
          { w: 1100, v: "60%" },
          { w: 1200, v: "50%" },
          { w: Infinity, v: "600px" },
        ]}
      />
      <Figure
        src="https://ye-olde-blog.s3.amazonaws.com/img/lamp/sketchup.png"
        breakpoints={[
          { w: 600, v: "100%" },
          { w: 900, v: "75%" },
          { w: 1100, v: "60%" },
          { w: 1200, v: "50%" },
          { w: Infinity, v: "600px" },
        ]}
      />

      <p>
        Many of the features in the sketch made it to the final build. The main
        thing I changed is adding a second top and bottom layer. The original
        plan was for a small, perforated diffusion layer above the lightbulb. I
        changed this during the build process to use 2 equally sized layers at
        the top and bottom. This would provide a soft diffusion layer, doubles
        the number of visual spaces, and adds structural rigidity. The dowels in
        the sketchup model are 1/2", I ended up using 1/4".
      </p>
      <p>
        Unfortunately, I didn't take any photos during the cutting phase. I used
        a hand held circular saw, a few saw horses, and a guide rail to cut
        birch ply into the 6 main pieces I needed: two top layers, two bottom
        layers, a mount plate, and the hole template. I also cut 1/4" dowel for
        the vertical supports.
      </p>
      <p>
        I purchased a simple lamp socket kit. I'd like to replace this with
        something nicer, it doesn't even have a switch! Here it is during a test
        fit with the mount plate after I wired it up.
      </p>
      <Figure
        src="https://ye-olde-blog.s3.amazonaws.com/img/lamp/socket.jpg"
        breakpoints={[
          { w: 600, v: "100%" },
          { w: 900, v: "75%" },
          { w: 1100, v: "60%" },
          { w: 1200, v: "50%" },
          { w: Infinity, v: "600px" },
        ]}
      />

      <p>
        I cut a template to use while drilling holes for the mount plate and the
        vertical supports. These were drilled a bit smaller than the dowels to
        allow me to assemble the lamp with just a friction fit. I figured that
        no matter how messy the planes were cut, if I could keep the dowel holes
        aligned, it would at least fit together. I marked the bottom left corner
        each time I used the template and maintained the alignment of each layer
        in the assembly. Sandwiching the boards between the template and a piece
        of scrap prevented the holes from splintering too much.
      </p>
      <Figure
        src="https://ye-olde-blog.s3.amazonaws.com/img/lamp/template.jpg"
        breakpoints={[
          { w: 600, v: "100%" },
          { w: 900, v: "75%" },
          { w: 1100, v: "60%" },
          { w: 1200, v: "50%" },
          { w: Infinity, v: "600px" },
        ]}
      />
      <p>
        The friction-fit assembly is quite difficult to get square. Trying to
        nudge the plates to align properly upsets the other components. When I
        glue this together, it will be much easier to align one plate at a time,
        let it set, align the next plate to that, etc. Here is an initial
        assembly with a folded paper shade
      </p>
      <Figure
        src="https://ye-olde-blog.s3.amazonaws.com/img/lamp/off-sidetable.jpg"
        breakpoints={[
          { w: 600, v: "100%" },
          { w: 900, v: "75%" },
          { w: 1100, v: "60%" },
          { w: 1200, v: "50%" },
          { w: Infinity, v: "600px" },
        ]}
      />
      <p>
        The dowels have a twist to them which I have attempted to correct by
        rigging a pile of books to apply a twisting pressure for a few hours
      </p>
      <Figure
        src="https://ye-olde-blog.s3.amazonaws.com/img/lamp/books.jpg"
        breakpoints={[
          { w: 600, v: "100%" },
          { w: 900, v: "75%" },
          { w: 1100, v: "60%" },
          { w: 1200, v: "50%" },
          { w: Infinity, v: "600px" },
        ]}
      />
      <p>
        You can see how rough some edges are. Painting (and maybe a bit of
        sanding) on these will hopefully smooth some things down, though I'm not
        too worried about it.
      </p>
      <Figure
        src="https://ye-olde-blog.s3.amazonaws.com/img/lamp/detail.jpg"
        breakpoints={[
          { w: 600, v: "100%" },
          { w: 900, v: "75%" },
          { w: 1100, v: "60%" },
          { w: 1200, v: "50%" },
          { w: Infinity, v: "600px" },
        ]}
      />
      <p>Here's a gallery of the lamp in situ:</p>

      <Gallery
        breakpoints={[
          { w: 600, v: "100%" },
          { w: 900, v: "75%" },
          { w: 1100, v: "60%" },
          { w: 1200, v: "50%" },
          { w: Infinity, v: "600px" },
        ]}
        images={[
          {
            src: "https://ye-olde-blog.s3.amazonaws.com/img/lamp/on-sidetable.jpg",
          },
          {
            src: "https://ye-olde-blog.s3.amazonaws.com/img/lamp/dining-view.jpg",
          },
          {
            src: "https://ye-olde-blog.s3.amazonaws.com/img/lamp/off-builtin.jpg",
          },
          {
            src: "https://ye-olde-blog.s3.amazonaws.com/img/lamp/on-builtin.jpg",
          },
        ]}
      />

      <p>
        My preferred placement in the room is on this built in, allowing the
        lamp to cast light into both the living and dining room. As a sole light
        source, it creates a great diffused low-light environment. An
        incandescent bulb paired with heavy wood is nice and cozy.
      </p>

      <Figure
        src="https://ye-olde-blog.s3.amazonaws.com/img/lamp/dark-room.jpg"
        breakpoints={[
          { w: 600, v: "100%" },
          { w: 900, v: "75%" },
          { w: 1100, v: "60%" },
          { w: 1200, v: "50%" },
          { w: Infinity, v: "600px" },
        ]}
      />

      <p>Stay tuned for decoration of this lamp and further iterations!</p>
    </>
  ),
};
