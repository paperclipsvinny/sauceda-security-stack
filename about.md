---
layout: layouts/base.njk
title: About
---

<style>
  main {
    max-width: 800px;
  }

  .about-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .about-header h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  article p {
    margin-bottom: 1.5rem;
    font-size: 1.05rem;
    line-height: 1.7;
  }

  article h2 {
    margin-top: 3rem;
    margin-bottom: 1rem;
    font-size: 1.6rem;
    color: var(--accent-color);
  }

  article ul {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }

  article li {
    margin-bottom: 0.75rem;
    font-size: 1.05rem;
    line-height: 1.7;
  }

  .at-a-glance {
    background-color: #371616;
    border: 1px solid rgba(255,255,255,0.15);
    padding: 1.5rem;
    margin-bottom: 3rem;
  }

  .at-a-glance h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    color: var(--accent-color);
  }

  .glance-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
    font-size: 0.95rem;
  }
 
 .glance-grid .glance-item:last-child {
  grid-column: 1 / -1;
}

  .glance-item strong {
    color: var(--accent-color);
    margin-right: 0.5rem;
  }

  @media (max-width: 640px) {
    .glance-grid {
      grid-template-columns: 1fr;
    }
  }
.profile-image {
    display: block;
    max-width: 400px;
    width: 100%;
    height: auto;
    border: 2px solid rgba(255,255,255,0.2);
    margin: 0.5rem auto 1.5rem; /* top 0.5rem, bottom 1.5rem, horizontal auto */
}

</style>

<main>
  <article>
    <div class="about-header">
      <h2>Hello, friend.</h2>
    </div>

<img src="/Assets/images/hellofriend1.jpg" alt="That's me!" class="profile-image">

<div class="at-a-glance">
      <h3>At a Glance ~ : </h3>
      <div class="glance-grid">
        <div class="glance-item">
          <strong>Working on:</strong> Enterprise environments
        </div>
        <div class="glance-item">
          <strong>Mindset:</strong> Knowledge is security
        </div>
        <div class="glance-item">
          <strong>Focus:</strong> Offensive security 
        </div>
        <div class="glance-item">
          <strong>Approach:</strong> Hands-on labs & projects
        </div>
        <div class="glance-item">
            <strong>Education:</strong> B.S. Cybersecurity & Information Assurance — WGU (in progress)
        </div>
      </div>
    </div>

    <p>
      I'm Benito. I'm a college student who's been interested in cybersecurity since before high school. People often ask me how I got my start, and honestly, it was a deep sense of curiousity that drew me into this field. In seventh grade, my father got me a laptop, and I discovered command prompt. A blinking cursor at a terminal, that looked straight out of a hacking movie. Then came the questions— which I've been answering ever since. The way I learn is by hands-on labs: setting things up, breaking them, fixing them, and learning about what happened at each step.
    </p>

    <h2>> What I'm working on</h2>

    <p>
      Lately, I've been spending most of my time around enterprise-style environments— the kinds of systems that feel closer to how organizations actually operate. Authentication, permissions, network boundaries, misconfigurations, etc. I also build a lot of my own labs. Physical setups, virtual ranges, half-finished experiments, because for me it's the way that sticks. I like knowing how the whole thing works, end to end.
    </p>

    <h2>> How I think about security</h2>

    <p>
      To me, security is fundamentally about pattern-recognition; understanding systems well enough to notice when something feels off. Deep knowledge of both attack tactics and techniques and defensive tooling and infastructure is what enables a good security team to become great. I find Offensive security fascinating because it's all about being creative and methodical at the same time- you're finding something other people missed. However, I'm also interested in the defensive side of the story- what breaks, why it breaks, and how people miss it. Especially nowadays, with the AI 'boom', it's increasingly common for organizations to throw AI systems at their security problems, which often lack contextualization and can lead to knowledge gaps— and ultimately, security gaps. On the other side of the problem is script kiddies that can just 'point and shoot' exploits at systems, without understanding what's happening. I use AI in my learning process, but deliberately and warily. To me, AI is a supplement, not a substitution, for understanding. Writing, in particular, is part of the learning process for me. If I can't explain something clearly, I usually don't understand it as well as I think I do.

      If you can explain something clearly, you truely understand it. And when you teach it or explain it to someone else, you're forced to *really* understand it. Especially in Cybersecurity, where the boundaries are being pushed every day, the best teachers are students who never stopped learning. 
    </p>

    <h2>> What you'll find here</h2>

    <p>On this site, you'll find:</p>

    <ul>
      <li>Writeups from CTFs, labs, and things I broke on purpose</li>
      <li>Projects that mix hardware, software, and networking</li>
      <li>Notes on experiments that aren't finished yet (and might never be)</li>
      <li>Occasional longer reflections when something sticks with me</li>
    </ul>

    <p>Some posts are technical, some are more reflective, but all of them are my honest voice.</p>

    <h2>> Where I'm headed</h2>

    <p>
      I'm early in my career, and honestly I'm excited about that. I've talked to a lot of senior, C Suite, and even midrange engineers who are so locked into their careers, they don't get much time for hands-on projects, which is the fun part, in my opinion. That said, I'm building toward a career in offensive security: threat hunting, penetration testing, red teaming— but I'm more focused on building solid fundamentals right now, than rushing into titled positions.
    </p>

    <h2>Who is Paperclips Vinny?</h2>
    <p>If you've read this far, you deserve the truth. 'Paperclips Vinny' is me, and I am 'paperclips vinny'. The username started as a screen name (it's a reference to a character in the movie Atlantis) to maintain my privacy while exploring the many facets of cybersecurity, and just slowly became my defacto online handle. 

    Anyways, have fun exploring this website and I hope you find what you're looking for. Happy Hacking! <span class="end-of-article">&lt;/&gt;</span>

  </article>
</main>
