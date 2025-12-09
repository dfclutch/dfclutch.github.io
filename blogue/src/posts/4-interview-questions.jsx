import React from "react";

import SectionHeader from "../post-components/SectionHeader";
import { Mono } from "../post-components/Mono";

export default {
  title: "Do I Even Want to Work Here?",
  id: "do-i-even-want-to-work-here",
  previewContent: "Moving past an \"I'll take what I can get\" attitude, how I think about appraising my willingness to work at a company, and what I think is important to know about a position in the interview stage.",
  date: "11 Jun, 2021",
  content: (
    <div>
      <p>
        In May 2020, I was looking for a software engineering job as a new graduate. The economy looked bleak, I'd had months of no success, and the field seemed crowded with thousands of other kids in my position. I thought that in order to land a position,  I needed to lower my standards. A year later, I wish I had dug deeper with my questions.
      </p>
      <p>
        As I enter a new job search, I've prepared a list of concerns that I'll be asking any potential employer about. Determining if you actually want to work at a given company is at least as important as convincing them they should hire you. Your job takes up a quarter of your life, it shouldn't feel frustrating or negative.
      </p>
      <p>
        This is a list developed out of looking for jobs as a frontend software engineer, but these thoughts apply for any software job and a lot of other technical positions. When to ask these questions about this stuff is probably the trickiest part. Because of their technical nature, a screening interview is definitely not the right time. Ideally, you'd talk to a member of the development team you will be joining.
      </p>
      <SectionHeader>Areas of Concern</SectionHeader>
      <ol>
        <li>
          <Mono>Onboarding Program:</Mono> ensuring that developers start with a consistent understanding of the product, standards, and organization is absolutely critical. Lack of a good onboarding system leaves developers confused and unable to succeed. Eventually, they come to an (often inaccurate) understanding of their environment. This lowers the knowledge shared by the team and increase communication overhead and noise. Further, if you are hired to work with technology you don't have professional exposure to, your employer should provide the resources necessary for you to be able to execute at a professional level.
        </li>
        <li>
          <Mono>Support Systems:</Mono> There are three exterior systems that allow a software development team to succeed:
          <ul>
            <li><Mono>Design Systems</Mono>: Systems by which developers are provided the desired outcome of an implementation</li>
            <li><Mono>Testing Systems</Mono>: Systems by which implementations are validated against the criteria provided by the design</li>
            <li><Mono>Deployment Systems</Mono>: Systems by which new features and products are delivered to the user</li>
          </ul>
          Failure to adequately provide support systems is a constraint on a team. No matter how good the engineers are, they won't be able to succeed. Conversely, successful support systems enable a team to achieve the best possible outcomes for the product and business.
        </li>
        <li>
          <Mono>Developer Turnover</Mono>: Turnover is very telling about the developer experience and how the company treats its engineering assets. In software engineering, communication overhead is the most imposing constraint. Regular turnover (especially when paired with poor documentation and standards) means the developers are playing telephone with the secrets of the code. Good employers know how to keep their engineers around for an appropriate length of time.
        </li>
        <li>
          <Mono>Remote Work Environment</Mono>: If working remote, the company should take explicit and effective steps toward ensuring an effective work environment. This goes beyond a stipend for some monitors. Ideally, someone should have thought about how to make the development processes work in a remote world.
        </li>
        <li>
          <Mono>Startup Financing</Mono>: If applying at a startup, ask about their financial stability and runway. Working for a new startup is a personal risk in your own financial stability. An employer should be transparent and open about the outlook of the organization to their perspective employees. An employer asking you to step onto a sinking ship is a clear sign they don't care about you.
        </li>
      </ol>
    </div>
  ),
};