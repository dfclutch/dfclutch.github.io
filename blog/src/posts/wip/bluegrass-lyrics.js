import React from "react";
import { Link } from "../../post-components/Link";
import { Pullquote } from "../../post-components/PullQuote";

export default {
  title: "The Wild World of Bluegrass Lyrics",
  id: "bluegrass-lyrics",
  previewContent: `
    Copy and paste this template into a new post in /wip
  `,
  date: "Aug 1, 2021",
  content: () => (
    <>
      <p>
        The tunes that comprise the Bluegrass canon come from all across the
        rural American melting pot's back catalogue of folk, spiritual,
        traditional, and work music. They reach back to mother countries and
        generations past, shifting and changing with each iteration. As songs
        are shared, the lyrics are misheard, mis-learned, or purposely
        rewritten. The canon itself is not even agreed upon and varies greatly
        across regions, even in a post-recording, post-internet world.
      </p>
      <p>
        With this vast library, comes a wild world of lyrical curiosities and
        some downright stupid lyrics. I don't have the expertise to know the
        origins of any of these, and I'm sure there's weirder lyrics out there.
        But, here's some of my favorites that I've come across in the last year
        or so of learning bluegrass tunes.
      </p>
      <h3>Features:</h3>
      <p>A couple consistent features will crop up across these tunes:</p>
      <ul>
        <li>Repeated syllables</li>
        <li>Repeated concepts or words</li>
        <li>Repeated or mirrored structures</li>
      </ul>
      <h3>Blue Ridge Cabin Home</h3>
      <p>
        In my circles at least, Blue Ridge Cabin Home feels like "Bluegrass tune
        no. 1". It's the first track on{" "}
        <Link
          href="https://en.wikipedia.org/wiki/The_Bluegrass_Album"
          text="The Bluegrass Album"
        />
        , which typifies "modern" bluegrass to this day, and it's basic
        structure and melody are fundamental to a lot of bluegrass tunes.
      </p>
      <p>
        The first oddity here: nowhere in the entire song is the word "Cabin"
        used. Not once. Some recordings do use "Cabin" in the chorus, but that's
        not the way Flatt and Scruggs wrote or played it. The song would be more
        aptly named "Blue Ridge Mountain Home", with the chorus:
      </p>
      <Pullquote
        lines={[
          "Oh I love those hills of old Virginia",
          "From those Blue Ridge hills I did roam",
          "When I die won't you bury me on the mountain",
          "Far away near my Blue Ridge mountain home",
        ]}
      />
      <p>
        Note the parallel structure with the first two lines containing{" "}
        <i>Hill</i> references and the second two containing <i>Mountain</i>{" "}
        references.
      </p>
      <p>
        The second half of the second verse demonstrates strong syllabic
        repetition, with 6 uses of some variant of a <i>"ther"</i> syllable:
      </p>
      <Pullquote
        lines={[
          "There my mother and dad are laid there to rest",
          "They're sleeping in peace together there",
        ]}
      />
      <p>
        We see a few repeated words and concepts, namely "Wandering" and being
        far-away from the Blue Ridge mountains. Here across verses 1 and 2:
      </p>
      <Pullquote
        lines={[
          "There's a well-beaten path in that old mountainside",
          "Where I wandered when I was a lad",
          "There I wandered alone to the place that I call home",
          "In those Blue Ridge hills far away",
        ]}
      />
      <Pullquote
        lines={[
          "Now my thoughts wander back to that ramshackle shack",
          "In those Blue Ridge hills far away",
          "...",
        ]}
      />
      <p>
        And boy, that "back/ramshackle/shack" triple rhyme hits hard, don't it?
      </p>
      <h3>She left me Standin' on the Mountain</h3>
      <p>
        We see a great example of syllabic repetition from{" "}
        <i>She left me Standin'</i> verse 3:
      </p>
      <Pullquote
        lines={[
          "I just saw a whip-poor-will a-talkin to a bear",
          "They were both a-laughin' about her givin' me the air",
        ]}
      />
      <p>
        The preceding <i>a-</i> sound that occurs 5 times in this stanza gives a
        lilting, rolling sound to the verse. The words stumble one into the next
        with an "uh", driving the sound forward, and sounding a little like{" "}
        <i>a-Me a-Mario</i>. At high tempos, the song rolls off the tongue like
        a newscaster's vocal warmup.
      </p>
      <h3>Footprints in the Snow</h3>
      <p>
        A great example of a mirrored structure shows up in this Bill Monroe
        classic, first in the chorus:
      </p>
      <Pullquote
        lines={[
          "I traced her little footprints in the snow",
          "I found her little footprints in the snow",
          "Bless that happy day when Nellie lost her way",
          "For I found her when the snow was on the ground",
        ]}
      />
      <p>But in verse 2 we see a reversal of the traced/found wording:</p>
      <Pullquote
        lines={[
          "I stopped one night to see her, there was a big round moon",
          "Her mother said she'd just stepped out but she'd be returning soon",
          "I found her little footprints and traced them through the snow",
          "For I found her when the snow was on the ground",
        ]}
      />
      <p>
        For me, the verse 2 ordering makes a lot more sense. How can you trace
        the footprints in the snow before you find them? This tune has a
        destructive commitment to repetition - every verse and chorus ends with{" "}
        <i>For I found her when the snow was on the ground</i>, never
        considering if it fits with the lines around it.
      </p>
    </>
  ),
};
