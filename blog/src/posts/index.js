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
import info_graphics_1 from "./wip/info-graphics-1";
import pizza from "./14-pizza-tutorial";
import aftJuly2023 from "./15-aft-july23";

const posts = [
  aftJuly2023,
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

export const wip = [pizza].map((article) => ({
  ...article,
  wip: true,
}));

export default posts;
