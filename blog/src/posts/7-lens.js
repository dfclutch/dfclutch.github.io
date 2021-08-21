import React from "react";
import Figure from "../post-components/Figure";

const image = <Figure
  src='https://ye-olde-blog.s3.amazonaws.com/lens.jpeg'
  alt='vintage Nikon lens with beautiful pastel colors'
  breakpoints={[{ w: Infinity, v: '75%' }]}
/>

export default {
  title: "I love the colors on this vintage Japanese Nikon-fit lens",
  id: "lens",
  previewContent: image,
  date: "22 Jun, 2021",
  content: image,
};