---
layout: layouts/post.njk
title: "BACL Musings"
date: 2026-02-03
tags:
  - posts
  - Reflections
  - Cabrillo College
  - Career
file_ext: ".tmp"
summary: >
  Cyber camps, building systems, and behind-the-scenes chaos, oh my! Here's what I learned working at the Bay Area Cyber League.
thumbnail: /assets/img/posts/my-cool-post.png
---

## What I Learned Working at the Bay Area Cyber League

I have had many awesome teachers, mentors, peers, and connections throughout the years. I am also sure to have many more, since my career is just getting started. As my favorite networking professor imparted though, if you accomplished something, it's only half the battle. However, my graduation from Cabrillo College also led to a natural close on my three year stint as part of the Bay Area Cyber League Team.

### Who, or what is the Bay Area Cyber League?

<div class="image">
  <img src="/Assets/images/postimages/BACL/baclheader2020.png" alt="BACL's website header from 2020.">
  <figcaption>Bay Area Cyber League's 2020 website - Source: https://web.archive.org/</figcaption>
</div>

The Bay Area Cyber League (or BACL), is a non profit organization devoted to increasing cybersecurity education for high school and community college students in underserved communities. In other words, through federal funding and grants, they offer free cybersecurity education, focusing on cyber camps, competitions, and other events. Here's their website: https://baycyber.net/.

Working with the Bay Area Cyber League gave me experience on both sides of cybersecurity education: front-facing teaching and also backend curriculum (and infrastructure) development. Working both sides forced me to slow down, zoom out, and think about how systems, and people actually work.

### Education & Teaching Cyber Camps

I cannot lie, I quite enjoyed the particular challenge associated with Cyber Camps. Despite being a young adult while teaching these camps, these young students still managed to inspire me for the classes that will follow mine. Some of the kids, despite their youth, are incredibly advanced, and it was truly an honor to have been part of their journey, wherever it leads. A lot of the students are quick learners and question everything, which encouraged me to be quick with answers, and honest if there was something I didn't know off the top of my head.

<div class="image">
  <img src="/Assets/images/postimages/BACL/westvalleycollege.png" alt="West Valley Camp">
  <figcaption>BACL's West Valley College Cyber Camp. Source: https://baycyber.net/</figcaption>
</div>

One of the biggest things I learned is how beginners actually learn. Since I didn't really have a structured path for most of my learning (like almost everyone in cybersecurity, I was largely self taught), I was almost as new to the idea of a cybersecurity curriculum as some of the students. Most of the time, concepts aren't too complex, but what's missing is context. Students usually got stuck because instructions assumed knowledge they didn't have yet, or because they couldn't see how one step connected to the next. Once that context clicked, things moved fast.

At the same time, I learned the importance of not being overly hand-holdy. There's a balance between giving enough guidance to prevent frustration and giving students space to struggle productively. Letting someone wrestle with a problem (instead of jumping in immediately) often led to better understanding and confidence (although it DID lead to some frustration from campers looking to take shortcuts, especially when they knew I was gate-keeping the answer).

<div class="image">
  <img src="/Assets/images/postimages/BACL/ncltraining.png" alt="Zoom NCL training session">
  <figcaption>Screenshot from one of our NCL Training meetings.</figcaption>
</div>

I also learned how to not always be the leader. I tend to jump in and take ownership of tasks, especially when I know I'm well suited for a role. Part of being a good team member, though, is stepping back and letting others take the reins- even if it's something you're particularly good at. One example that comes to mind occurred during our National Cyber League (NCL) preparational camp. The NCL is basically a nation-wide CTF, meant to help students bridge the gap between theoretical knowledge and career-worthy experience. For the competition, there are nine domains the challenges are split into: Web Application Exploitation, Open-Source Intelligence (OSINT), Password Cracking, Network Traffic Analysis, Forensics, Scanning & Reconnaissance, Enumeration & Exploitation (Reverse Engineering), Log Analysis, and Cryptography. For that project, our group of five mentors was tasked with developing a curriculum that would prepare the students for the challenges they would encounter during the NCL. We split the nine domains between us, and while I would have been happy to take categories that I was best in, I ended up with two categories that no one else wanted. Instead of complaining or trying to switch to suit my strengths, I gave others space to step into those roles. That choice let others grow, and it pushed me to work outside my comfort zone and support the team rather than defaulting to a leadership position.

### Development & Infrastructure

On the technical side, I learned how to divide and delegate work among peers without a rigid structure. On the dev side, we were usually given a project and told, essentially, "make it work." Task distribution was never a clean, even split— it changed constantly depending on the goal, deadlines, and who had momentum at the time. It brought me a lot closer with my coworkers and taught me that communication regarding how work gets divided is just as important as doing 'your part'. Especially when there are multiple moving pieces that need to work in sync.

<div class="image">
  <img src="/Assets/images/postimages/BACL/ingress.png" alt=".yaml file controlling ctfd ingress.">
  <figcaption>One of the .yaml configuration files- this section controlls ingressing.</figcaption>
</div>

I also learned professionalism in a learning environment. This wasn't a homelab experiment— the systems had real users and real expectations (and real deadlines). That meant communicating clearly, documenting decisions, and owning any mistakes instead of hiding them, which led to everyone helping each other more. And there were mistakes indeed, such as accidentally breaking the containers, misconfiguring .yaml files, or even when one of our team members accidentally exposed some code secrets- luckily we caught it within a few hours.

> Running a container locally is easy. Deploying it at scale is not.

Working with Docker and Kubernetes showed me what challenges you face when you have real users hitting real services at the same time, across multiple community colleges in the Bay Area. Suddenly, things like persistent volumes, networking rules, and ingress configurations actually matter. When something broke, I couldn't guess— I had to read logs, inspect events, and debug under pressure to get the systems back online, instead of just pulling the plug or starting over.

### Flexibility When Plans Change

Another major lesson was adaptability. In February 2025, a federal funding freeze forced a complete project pivot. The regional competition had originally been designed around students pentesting a simulated hospital network filled with HIPAA red herrings and realistic misconfigurations, closely modeled after how healthcare environments actually operate.

<div class="image">
  <img src="/Assets/images/postimages/BACL/hospitaltopology.png" alt="Hospotal Topology Packet Tracer Screenshot">
  <figcaption>Screenshot taken early on from our hospital topology development. </figcaption>
</div>

When that project was scrapped in favor of a Jeopardy-style CTF, the work didn't disappear— it transformed. I took parts of what I had learned and helped turn it into a smaller-scale incident response tabletop exercise with friends. That experience taught me that no work is wasted, and that being flexible is just as important as being technical.

## Closing Thoughts

Overall, my time working with the Bay Area Cyber League reinforced that cybersecurity is as much about people, systems, and adaptability as it is about technical skill. Teaching forced me to not only understand the fundamentals solidly, but also explain them at different levels of abstraction and context. Working on development and infrastructure sharpened my Cloud-Native Infrastructure skills, while being part of the team taught me professional communication. I'm incredibly grateful for my years at Bay Cyber League, and excited to apply what I learned in this chapter of my career towards the next one. <span class="end-of-article">&lt;/&gt;</span>

<div class="image">
  <img src="/Assets/images/postimages/BACL/cabrillocollegecamp.png" alt="Cabrillo Cybercamp.">
  <figcaption>BACL Cabrillo Summer Cyber Camp- there are many like it, but this one was mine! Source: https://baycyber.net/</figcaption>
</div>
