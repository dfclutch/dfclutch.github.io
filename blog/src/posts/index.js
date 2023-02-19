import first from "./1-first";
import chipotle from "./2-chipotle";
import giardiniera from "./3-giardiniera";
import interview_questions from "./4-interview-questions";
import set_theory from "./5-set-theory";
import parkOfRoses from "./6-park-of-roses";
import lens from "./7-lens";
import reactComponents from "./8-formidable-components-article";
import bocklin from "./9-bocklin";
import primitive_borders from "./10-primitive-borders";
import lamp from "./11-lamp";
import flair from "./12-flair";
import bft from "./13-btf-oct22";
import info_graphics_1 from "./wip/info-graphics-1";
import pizza from "./14-pizza-tutorial";
import bluegrass_lyrics from "./wip/bluegrass-lyrics";

const posts = [
  info_graphics_1,
  flair,
  lamp,
  primitive_borders,
  bocklin,
  reactComponents,
  lens,
  parkOfRoses,
  set_theory,
  interview_questions,
  giardiniera,
  chipotle,
  first,
];

export const wip = [bluegrass_lyrics, pizza, bft].map((article) => ({
  ...article,
  wip: true,
}));

export default posts;
